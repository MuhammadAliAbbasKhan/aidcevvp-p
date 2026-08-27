from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('demo/request/', views.request_demo, name='request_demo'),
    path('subscriptions/checkout/', views.checkout_subscription, name='checkout_subscription'),
    path('subscriptions/status/', views.get_user_subscription, name='get_user_subscription'),
    path('telemetry/logs/', views.telemetry_logs, name='telemetry_logs'),

    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
