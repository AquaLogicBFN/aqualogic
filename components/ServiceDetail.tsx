import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">
        ← Back
      </Link>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        Service: {id}
      </h2>

      <p className="mt-3 text-slate-700">
        This page is a placeholder. Add your real service content here.
      </p>
    </section>
  );
}
