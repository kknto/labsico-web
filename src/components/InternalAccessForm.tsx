"use client";

import { useState } from "react";
import { LockKeyhole } from "lucide-react";

export function InternalAccessForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/internal-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });

    setLoading(false);

    if (!response.ok) {
      setError("Acceso no autorizado. Verifica la clave e intenta nuevamente.");
      return;
    }

    window.location.reload();
  }

  return (
    <form className="form card info-card internal-access-form" onSubmit={handleSubmit}>
      <LockKeyhole color="var(--brand-blue)" size={28} aria-hidden="true" />
      <h3>Acceso exclusivo para personal autorizado</h3>
      <p>
        Esta seccion concentra accesos a plataformas internas. No compartas la clave fuera de LABSICO.
      </p>
      <div className="field">
        <label htmlFor="internal-code">Clave de acceso</label>
        <input
          id="internal-code"
          type="password"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          autoComplete="current-password"
          maxLength={256}
          required
        />
      </div>
      {error ? <span className="error-text">{error}</span> : null}
      <button className="button button--primary" type="submit" disabled={loading}>
        {loading ? "Validando..." : "Entrar"}
      </button>
    </form>
  );
}
