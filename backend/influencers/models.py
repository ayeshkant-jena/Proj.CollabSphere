# from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class InfluencerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    niche = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    platforms = models.JSONField()  # { instagram: true, youtube: false }
    followers_count = models.IntegerField()
    engagement_rate = models.FloatField()
    pricing = models.DecimalField(max_digits=10, decimal_places=2)
    bio = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email
