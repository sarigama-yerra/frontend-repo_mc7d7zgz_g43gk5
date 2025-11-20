import { ShieldCheck, Mail, Star, Globe2 } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Verified by real managers',
      desc: 'Corporate email verification and identity checks ensure every review is authentic.',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'One-click review requests',
      desc: 'Send secure, one-time links to former managers. No account required to respond.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Structured, consistent ratings',
      desc: 'Clear 1–5 star ratings for skills recruiters care about, plus a public testimonial.',
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Public profile you can share',
      desc: 'A clean, professional page that showcases verified reviews alongside your work history.',
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-6">
      {items.map((it, i) => (
        <div key={i} className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 text-blue-100">
          <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center mb-3">
            {it.icon}
          </div>
          <h3 className="text-white font-semibold mb-1">{it.title}</h3>
          <p className="text-sm text-blue-200/80">{it.desc}</p>
        </div>
      ))}
    </section>
  );
}
