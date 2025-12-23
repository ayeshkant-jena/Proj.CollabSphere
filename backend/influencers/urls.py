from django.urls import path
from .views import InfluencerProfileView

urlpatterns = [
    path("profile/", InfluencerProfileView.as_view()),
]
