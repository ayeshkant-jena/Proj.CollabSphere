import { useEffect, useState } from "react";
import { getMatches } from "../../api/matching";
import { useParams } from "react-router-dom";

const Matches = () => {
  const { campaignId } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(campaignId).then(res => setMatches(res.data));
  }, [campaignId]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Recommended Influencers</h2>

      <div className="grid grid-cols-3 gap-4">
        {matches.map((m) => (
          <div key={m.influencer_id} className="border rounded p-4 shadow">
            <h3 className="font-semibold">{m.email}</h3>
            <p>Niche: {m.niche}</p>
            <p>Followers: {m.followers}</p>
            <p>Engagement: {m.engagement_rate}%</p>
            <p className="font-bold text-green-600">
              Match Score: {m.match_score}
            </p>
            <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded">
              Send Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
