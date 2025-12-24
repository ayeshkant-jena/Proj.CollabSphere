import { useEffect, useState } from "react";
import { getProfile, saveProfile, updateProfile } from "../../api/influencer";

const InfluencerProfile = () => {
  const [form, setForm] = useState({
    niche: "",
    city: "",
    followers_count: "",
    engagement_rate: "",
    pricing: "",
    bio: "",
    platforms: { instagram: true, youtube: false }
  });

  const [exists, setExists] = useState(false);

  useEffect(() => {
    getProfile()
      .then(res => {
        setForm(res.data);
        setExists(true);
      })
      .catch(() => setExists(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    exists ? updateProfile(form) : saveProfile(form);
    alert("Profile saved");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Influencer Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2" placeholder="Niche" value={form.niche}
          onChange={e => setForm({...form, niche: e.target.value})} />

        <input className="w-full border p-2" placeholder="City" value={form.city}
          onChange={e => setForm({...form, city: e.target.value})} />

        <input className="w-full border p-2" placeholder="Followers"
          value={form.followers_count}
          onChange={e => setForm({...form, followers_count: e.target.value})} />

        <input className="w-full border p-2" placeholder="Engagement Rate (%)"
          value={form.engagement_rate}
          onChange={e => setForm({...form, engagement_rate: e.target.value})} />

        <input className="w-full border p-2" placeholder="Pricing"
          value={form.pricing}
          onChange={e => setForm({...form, pricing: e.target.value})} />

        <textarea className="w-full border p-2" placeholder="Bio"
          value={form.bio}
          onChange={e => setForm({...form, bio: e.target.value})} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default InfluencerProfile;
