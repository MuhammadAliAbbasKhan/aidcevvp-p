from django.db import models

class UserAccount(models.Model):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255, blank=True, default='')
    role = models.CharField(max_length=100, default='Data Center Engineer')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.email})"

class DemoBooking(models.Model):
    contact_name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255)
    facility_capacity_mw = models.IntegerField(default=10)
    deployment_timeline = models.CharField(max_length=100, default='Immediate (1-3 months)')
    notes = models.TextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Demo Request: {self.company} ({self.facility_capacity_mw}MW)"

class Subscription(models.Model):
    email = models.EmailField()
    plan_tier = models.CharField(max_length=100)
    monthly_price = models.IntegerField()
    billing_cycle = models.CharField(max_length=20, default='monthly')
    card_last_four = models.CharField(max_length=4, default='4242')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Subscription: {self.email} - {self.plan_tier} (${self.monthly_price}/mo)"

class TelemetryLog(models.Model):
    gpu_load_mw = models.FloatField(default=25.0)
    coolant_flow_lmin = models.FloatField(default=350.0)
    pue_value = models.FloatField(default=1.12)
    vpp_storage_kw = models.FloatField(default=2500.0)
    active_mode = models.CharField(max_length=100, default='Autonomous AIDC & EV VPP Active')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Telemetry {self.timestamp}: PUE {self.pue_value}"
