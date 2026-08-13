"use client";

export function InternalLogoutButton() {
  async function handleClick() {
    await fetch("/api/internal-access", { method: "DELETE" });
    window.location.reload();
  }

  return (
    <button className="button button--ghost" type="button" onClick={handleClick}>
      Cerrar acceso
    </button>
  );
}
