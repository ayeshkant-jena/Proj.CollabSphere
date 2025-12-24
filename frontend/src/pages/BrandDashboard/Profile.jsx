import { useEffect, useState } from "react";
import { getBrandProfile, saveBrandProfile, updateBrandProfile } from "../../api/brand";

const BrandProfile = () => {
  const [form, setForm] = useState({
    company_name: "",
    industry: "",
    website: "",
    city: "",
    description: ""
  });
  const [exists, setExists] = useState(false);

  useEffect(() => {
    getBrandProfile()
      .then(res => {
        setForm(res.data);
        setExists(true);
      })
      .catch(() => setExists(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    exists ? updateBrandProfile(form) : saveBrandProfile(form);
    alert("Brand profile saved");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Brand Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2" placeholder="Company Name"
          value={form.company_name}
          onChange={e => setForm({...form, company_name: e.target.value})} />

        <input className="w-full border p-2" placeholder="Industry"
          value={form.industry}
          onChange={e => setForm({...form, industry: e.target.value})} />

        <input className="w-full border p-2" placeholder="Website"
          value={form.website}
          onChange={e => setForm({...form, website: e.target.value})} />

        <input className="w-full border p-2" placeholder="City"
          value={form.city}
          onChange={e => setForm({...form, city: e.target.value})} />

        <textarea className="w-full border p-2" placeholder="Description"
          value={form.description}
          onChange={e => setForm({...form, description: e.target.value})} />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default BrandProfile;
