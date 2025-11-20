import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Demo from './components/Demo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="container mx-auto px-6 py-10 space-y-8">
        <Hero />
        <Features />
        <CTA />
        <Demo />
        <footer className="text-center text-xs text-blue-300/60 py-8">© {new Date().getFullYear()} VeriCred — Verified Credibility</footer>
      </div>
    </div>
  );
}

export default App
