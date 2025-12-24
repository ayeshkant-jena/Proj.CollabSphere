from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import BrandProfile
from .serializers import BrandProfileSerializer

class BrandProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = BrandProfile.objects.get(user=request.user)
        serializer = BrandProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        serializer = BrandProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def put(self, request):
        profile = BrandProfile.objects.get(user=request.user)
        serializer = BrandProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

from .models import Campaign

class CampaignView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        brand = BrandProfile.objects.get(user=request.user)
        campaigns = Campaign.objects.filter(brand=brand)
        serializer = CampaignSerializer(campaigns, many=True)
        return Response(serializer.data)

    def post(self, request):
        brand = BrandProfile.objects.get(user=request.user)
        serializer = CampaignSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(brand=brand)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
