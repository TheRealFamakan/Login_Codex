import React from "react";

export default function Badge({ children, variant = "neutral" }) {
  const cls =
    variant === "primary"
      ? "bg-brand-700 text-white"
      : "bg-white/85 text-brand-700 border border-white/60";
  return <span className={`pill ${cls}`}>{children}</span>;
}