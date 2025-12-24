from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from brands.models import Campaign
from influencers.models import InfluencerProfile
from .matching import calculate_match_score

class CampaignMatchingView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, campaign_id):
        campaign = Campaign.objects.get(id=campaign_id)

        influencers = InfluencerProfile.objects.all()
        results = []

        for influencer in influencers:
            score = calculate_match_score(campaign, influencer)
            if score > 0:
                results.append({
                    "influencer_id": influencer.id,
                    "email": influencer.user.email,
                    "niche": influencer.niche,
                    "city": influencer.city,
                    "followers": influencer.followers_count,
                    "engagement_rate": influencer.engagement_rate,
                    "pricing": influencer.pricing,
                    "match_score": score
                })

        # Sort by highest score
        results.sort(key=lambda x: x["match_score"], reverse=True)

        return Response(results)
