import { useEffect, useState } from "react";
import { getCampaigns, createCampaign } from "../../api/brand";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    niche_required: "",
    location_preference: "",
    min_followers: "",
    max_followers: "",
    budget: ""
  });

  useEffect(() => {
    getCampaigns().then(res => setCampaigns(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCampaign(form).then(res => {
      setCampaigns([...campaigns, res.data]);
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Campaigns</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 mb-6">
        <input className="border p-2" placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
        <input className="border p-2" placeholder="Niche" onChange={e => setForm({...form, niche_required: e.target.value})} />
        <input className="border p-2" placeholder="Location" onChange={e => setForm({...form, location_preference: e.target.value})} />
        <input className="border p-2" placeholder="Min Followers" onChange={e => setForm({...form, min_followers: e.target.value})} />
        <input className="border p-2" placeholder="Max Followers" onChange={e => setForm({...form, max_followers: e.target.value})} />
        <input className="border p-2" placeholder="Budget" onChange={e => setForm({...form, budget: e.target.value})} />
        <textarea className="col-span-2 border p-2" placeholder="Description"
          onChange={e => setForm({...form, description: e.target.value})} />
        <button className="col-span-2 bg-green-600 text-white py-2 rounded">
          Create Campaign
        </button>
      </form>

      <ul className="space-y-2">
        {campaigns.map(c => (
          <li key={c.id} className="border p-3 rounded">
            <h3 className="font-semibold">{c.title}</h3>
            <p>{c.niche_required} • {c.location_preference}</p>
            <p>Budget: ₹{c.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campaigns;
