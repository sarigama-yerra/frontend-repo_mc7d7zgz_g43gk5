import { useEffect, useMemo, useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Stars({ value }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= value ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`} />
      ))}
    </div>
  );
}

export default function Demo() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [profile, setProfile] = useState(null);

  const skills = useMemo(() => ({
    technical: 5,
    communication: 5,
    teamwork: 5,
    reliability: 5,
    problem_solving: 5,
  }), []);

  const createFlow = async () => {
    // 1) Create candidate
    const candRes = await fetch(`${API}/api/candidates`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Full-stack engineer passionate about product impact.',
        slug: 'john-doe'
      })
    });
    const cand = await candRes.json();
    setCandidate(cand);

    // 2) Create job
    const jobRes = await fetch(`${API}/api/jobs`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidate_id: cand._id,
        company: 'Google',
        title: 'Software Engineer',
        start_date: '2022-01',
        end_date: '2024-01'
      })
    });
    const job = await jobRes.json();
    setJobs([job]);

    // 3) Create review request (token)
    const rrRes = await fetch(`${API}/api/review-requests`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        candidate_id: cand._id,
        job_id: job._id,
        reviewer_email: 'jane.smith@google.com',
        reviewer_name: 'Jane Smith'
      })
    });
    const rr = await rrRes.json();

    // 4) Submit review using token
    const submitRes = await fetch(`${API}/api/reviews/${rr.token}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reviewer_name: 'Jane Smith',
        reviewer_title: 'Engineering Manager',
        reviewer_company: 'Google',
        reviewer_email: 'jane.smith@google.com',
        overall: 5,
        skills,
        public_text: 'John was an excellent engineer and a great team player.',
        confirm_manager: true
      })
    });
    const review = await submitRes.json();

    // 5) Approve review
    await fetch(`${API}/api/reviews/${review._id}/approve`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ approve: true }) });

    // 6) Load public profile
    const profRes = await fetch(`${API}/api/profile/${cand.slug}`);
    const prof = await profRes.json();
    setProfile(prof);
  };

  useEffect(() => {
    // auto-run demo once
    createFlow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="vericred-demo" className="space-y-4">
      <h3 className="text-white text-xl font-semibold">Live demo</h3>
      <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6">
        {!profile ? (
          <p className="text-blue-200/80">Setting up a sample profile…</p>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={profile.candidate.photo_url || 'https://api.dicebear.com/7.x/identicon/svg?seed=vericred'} alt="avatar" className="w-12 h-12 rounded-lg" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-white font-semibold">{profile.candidate.name}</h4>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                  </span>
                </div>
                <p className="text-blue-200/80 text-sm">{profile.candidate.bio}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="text-white font-medium">Work history</h5>
                {profile.jobs.map(j => (
                  <div key={j._id} className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="text-white">{j.title} • {j.company}</div>
                    <div className="text-xs text-blue-200/70">{j.start_date} – {j.end_date}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h5 className="text-white font-medium">Verified reviews</h5>
                {profile.reviews.map(r => (
                  <div key={r._id} className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-medium">{r.reviewer_name}</div>
                      <Stars value={r.overall} />
                    </div>
                    <div className="text-xs text-blue-200/70 mb-1">{r.reviewer_title} at {r.reviewer_company}</div>
                    <p className="text-blue-100/90 text-sm">“{r.public_text}”</p>
                    {r.verified_corporate_email && (
                      <div className="text-[10px] text-emerald-300/80 mt-2">Verified corporate email</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
