import React from "react";
import { Link } from "react-router-dom";

const services = [
  { id: "smart-irrigation", title: "Smart Irrigation" },
  { id: "landscaping", title: "Landscaping" },
  { id: "koi-ponds", title: "Koi Ponds & Water Features" },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Aqua Logic</h1>
      <p className="mt-3 text-slate-700">
        Smart irrigation, landscaping, and water features.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.id}
            to={`/service/${s.id}`}
            className="rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-sm transition"
          >
            <div className="font-semibold text-slate-900">{s.title}</div>
            <div className="mt-2 text-sm text-slate-600">View details →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
