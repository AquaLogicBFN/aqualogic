import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-slate-900 text-lg">
          Aqua Logic
        </Link>

        <nav className="flex items-center gap-4 text-slate-700">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
