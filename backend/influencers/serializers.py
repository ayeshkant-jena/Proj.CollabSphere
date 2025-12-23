from rest_framework import serializers
from .models import InfluencerProfile

class InfluencerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfluencerProfile
        fields = "__all__"
        read_only_fields = ["user"]
