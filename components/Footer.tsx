import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} Aqua Logic
      </div>
    </footer>
  );
}
