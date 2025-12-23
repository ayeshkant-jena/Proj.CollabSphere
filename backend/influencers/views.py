from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import InfluencerProfile
from .serializers import InfluencerProfileSerializer

class InfluencerProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile = InfluencerProfile.objects.get(user=request.user)
        serializer = InfluencerProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        serializer = InfluencerProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def put(self, request):
        profile = InfluencerProfile.objects.get(user=request.user)
        serializer = InfluencerProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
