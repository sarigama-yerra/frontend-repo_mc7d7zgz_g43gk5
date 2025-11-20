import React from 'react'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md p-8 shadow-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Test Page</h1>
        <p className="mt-3 text-slate-300">
          This is a simple route to verify navigation is working. You can safely keep this page
          for diagnostics or remove it later.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors px-4 py-2 text-sm font-medium text-white"
          >
            ← Back to Home
          </Link>
          <a
            href="/test"
            className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
          >
            Refresh
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs text-slate-400">Router</p>
            <p className="text-sm font-medium">react-router-dom</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs text-slate-400">Framework</p>
            <p className="text-sm font-medium">Vite + React</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs text-slate-400">Styling</p>
            <p className="text-sm font-medium">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
