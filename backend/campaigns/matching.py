def calculate_match_score(campaign, influencer):
    score = 0

    # 1. Niche match (40)
    if influencer.niche.lower() == campaign.niche_required.lower():
        score += 40

    # 2. Location match (20)
    if influencer.city.lower() == campaign.location_preference.lower():
        score += 20

    # 3. Followers range (25)
    if campaign.min_followers <= influencer.followers_count <= campaign.max_followers:
        score += 25

    # 4. Engagement rate (15)
    if influencer.engagement_rate >= 2.0:
        score += 15

    return score
