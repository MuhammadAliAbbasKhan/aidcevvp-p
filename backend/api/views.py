from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserAccount, DemoBooking, Subscription, TelemetryLog
from .db_mongo import sync_to_mongo

ADMIN_PASSCODE = "aliabbas1234578!"

@api_view(['POST'])
def register_user(request):
    data = request.data
    email = data.get('email', '').strip()
    full_name = data.get('full_name', '').strip()
    company = data.get('company_name', '').strip()

    if not email or not full_name:
        return Response({'error': 'Email and full name are required.'}, status=status.HTTP_400_BAD_REQUEST)

    user, created = UserAccount.objects.get_or_create(
        email=email,
        defaults={'full_name': full_name, 'company_name': company}
    )

    sync_payload = {'email': email, 'full_name': full_name, 'company_name': company, 'type': 'user_registration'}
    sync_to_mongo('users', sync_payload)

    return Response({
        'message': 'Account registered successfully!',
        'user': {'email': user.email, 'full_name': user.full_name, 'company': user.company_name}
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email', '').strip()
    if not email:
        return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=email).first()
    if not user:
        user = UserAccount.objects.create(email=email, full_name=email.split('@')[0].capitalize())

    return Response({
        'message': f'Welcome back, {user.full_name}!',
        'user': {'email': user.email, 'full_name': user.full_name, 'company': user.company_name}
    })

@api_view(['POST'])
def request_demo(request):
    data = request.data
    contact_name = data.get('contact_name', '').strip()
    email = data.get('email', '').strip()
    company = data.get('company', '').strip()
    mw_capacity = int(data.get('facility_capacity_mw', 10))
    timeline = data.get('deployment_timeline', '1-3 months')
    notes = data.get('notes', '')

    if not contact_name or not email or not company:
        return Response({'error': 'Name, email, and company are required.'}, status=status.HTTP_400_BAD_REQUEST)

    demo = DemoBooking.objects.create(
        contact_name=contact_name,
        email=email,
        company=company,
        facility_capacity_mw=mw_capacity,
        deployment_timeline=timeline,
        notes=notes
    )

    sync_payload = {
        'contact_name': contact_name,
        'email': email,
        'company': company,
        'mw_capacity': mw_capacity,
        'timeline': timeline
    }
    sync_to_mongo('demo_bookings', sync_payload)

    return Response({
        'message': f'Demo request submitted successfully for {company} ({mw_capacity}MW)! Our engineering team will contact you shortly.',
        'booking_id': demo.id
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def checkout_subscription(request):
    data = request.data
    email = data.get('email', '').strip()
    plan_tier = data.get('plan_tier', 'Professional AIDC & Liquid Cooling')
    monthly_price = int(data.get('monthly_price', 150))
    card_number = data.get('card_number', '').replace(' ', '')
    card_last_four = card_number[-4:] if len(card_number) >= 4 else '4242'

    if not email or len(card_number) < 13:
        return Response({'error': 'Valid account email and card number are required.'}, status=status.HTTP_400_BAD_REQUEST)

    # 1. Enforce Authentication Requirement (User must be registered/signed in)
    user_account = UserAccount.objects.filter(email=email).first()
    if not user_account:
        return Response({'error': 'Authentication required. Please sign up or sign in before subscribing to a plan.'}, status=status.HTTP_401_UNAUTHORIZED)

    # 2. Prevent Duplicate Payment (Active monthly subscription lock)
    existing_sub = Subscription.objects.filter(email=email, is_active=True).first()
    if existing_sub:
        return Response({'error': f'Account ({email}) already has an active {existing_sub.plan_tier} subscription for this month. You do not need to pay again!'}, status=status.HTTP_400_BAD_REQUEST)

    sub = Subscription.objects.create(
        email=email,
        plan_tier=plan_tier,
        monthly_price=monthly_price,
        card_last_four=card_last_four,
        is_active=True
    )

    sync_payload = {'email': email, 'plan_tier': plan_tier, 'monthly_price': monthly_price, 'type': 'stripe_checkout'}
    sync_to_mongo('subscriptions', sync_payload)

    return Response({
        'message': f'Successfully subscribed to {plan_tier} (${monthly_price}/mo)! Active AI Control enabled for {email}.',
        'subscription': {'id': sub.id, 'email': sub.email, 'plan': sub.plan_tier, 'price': sub.monthly_price, 'is_active': True}
    }, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_user_subscription(request):
    email = request.query_params.get('email', '').strip()
    if not email:
        return Response({'is_active': False})
    
    sub = Subscription.objects.filter(email=email, is_active=True).first()
    if sub:
        return Response({
            'is_active': True,
            'plan_tier': sub.plan_tier,
            'monthly_price': sub.monthly_price,
            'paid_date': sub.created_at.strftime('%Y-%m-%d')
        })
    return Response({'is_active': False})


@api_view(['GET', 'POST'])
def telemetry_logs(request):
    if request.method == 'POST':
        data = request.data
        log = TelemetryLog.objects.create(
            gpu_load_mw=float(data.get('gpu_load_mw', 25.0)),
            coolant_flow_lmin=float(data.get('coolant_flow_lmin', 350.0)),
            pue_value=float(data.get('pue_value', 1.12)),
            vpp_storage_kw=float(data.get('vpp_storage_kw', 2500.0)),
            active_mode=data.get('active_mode', 'Autonomous AIDC & EV VPP Active')
        )
        return Response({'message': 'Telemetry logged', 'id': log.id})

    logs = TelemetryLog.objects.all().order_by('-timestamp')[:10]
    return Response([{
        'gpu_load_mw': l.gpu_load_mw,
        'coolant_flow_lmin': l.coolant_flow_lmin,
        'pue_value': l.pue_value,
        'vpp_storage_kw': l.vpp_storage_kw,
        'timestamp': l.timestamp.strftime('%Y-%m-%d %H:%M:%S')
    } for l in logs])

@api_view(['GET'])
def admin_analytics(request):
    passcode = request.headers.get('X-Admin-Passcode', '')
    if passcode != ADMIN_PASSCODE:
        return Response({'error': 'Unauthorized access. Invalid Admin Passcode.'}, status=status.HTTP_403_FORBIDDEN)

    users_count = UserAccount.objects.count()
    demos_count = DemoBooking.objects.count()
    subs_count = Subscription.objects.count()
    total_mrr = sum(s.monthly_price for s in Subscription.objects.filter(is_active=True))

    recent_demos = [{
        'company': d.company,
        'capacity_mw': d.facility_capacity_mw,
        'email': d.email,
        'date': d.created_at.strftime('%Y-%m-%d')
    } for d in DemoBooking.objects.all().order_by('-created_at')[:5]]

    recent_subs = [{
        'email': s.email,
        'plan': s.plan_tier,
        'mrr': s.monthly_price,
        'card_last4': s.card_last_four
    } for s in Subscription.objects.all().order_by('-created_at')[:5]]

    return Response({
        'summary': {
            'registered_users': users_count,
            'demo_requests': demos_count,
            'active_subscriptions': subs_count,
            'monthly_recurring_revenue_usd': total_mrr,
            'database_status': 'SQLite (Primary) + MongoDB Cloud Atlas (Synced)'
        },
        'recent_demos': recent_demos,
        'recent_subscriptions': recent_subs
    })
