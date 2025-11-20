export default function CTA() {
  const scrollToSignup = () => {
    const el = document.getElementById('vericred-demo');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="text-center bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8">
      <h3 className="text-white text-2xl font-semibold mb-2">Start building verified credibility</h3>
      <p className="text-blue-200/80 mb-6">Create a profile, add your roles, and request a review from your former manager in seconds.</p>
      <div className="flex items-center justify-center gap-3">
        <button onClick={scrollToSignup} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Try the live demo
        </button>
        <a href="#" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
          Learn more
        </a>
      </div>
    </section>
  );
}
