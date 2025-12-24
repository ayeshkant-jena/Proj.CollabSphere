from django.urls import path
from .views import BrandProfileView

urlpatterns = [
    path("profile/", BrandProfileView.as_view()),
]

from .views import CampaignView

urlpatterns += [
    path("campaigns/", CampaignView.as_view()),
]
