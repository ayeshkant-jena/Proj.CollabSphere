from django.urls import path
from .views import CampaignMatchingView

urlpatterns = [
    path("match/<int:campaign_id>/", CampaignMatchingView.as_view()),
]
