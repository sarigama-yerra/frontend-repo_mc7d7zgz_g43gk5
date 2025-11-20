import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[520px] w-full rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-blue-500/20 shadow-2xl">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-10 pointer-events-none h-full flex items-center">
          <div className="px-8 md:px-14 max-w-3xl">
            <div className="inline-flex items-center text-xs font-medium bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-blue-100 mb-4">
              VeriCred • Verified Credibility
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Trust resumes again
            </h1>
            <p className="text-blue-100/90 text-lg md:text-xl">
              Request, collect, and share verified performance reviews from real managers. Give recruiters a true picture of your talent.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
