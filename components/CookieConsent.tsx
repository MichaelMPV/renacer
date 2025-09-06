'use client';

import { useEffect, useState } from 'react';

type Level = 'all' | 'essential';
type Consent = { level: Level; ts: number };

const KEY = 'cookie-consent-v1';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const persist = (level: Level) => {
    const value: Consent = { level, ts: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch {}
  };

  const acceptAll = () => {
    persist('all');
    setOpen(false);
    showToast('Has aceptado todas las cookies (incluye analíticas).');
  };

  const acceptEssential = () => {
    persist('essential');
    setOpen(false);
    showToast('Solo cookies esenciales activadas. No usamos analíticas ni marketing.');
  };

  const managePrefs = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setOpen(true);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 4000);
  };

  if (!open && !toast) return null;

  return (
    <>
      {open && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
          <div className="cookie-card">
            <div className="cookie-icon" aria-hidden>🍪</div>
            <div className="cookie-content">
              <h6 className="cookie-title">Usamos cookies</h6>
              <p className="cookie-text">
                Utilizamos <strong>cookies esenciales</strong> para que el sitio funcione (seguridad,
                sesión, preferencias). Opcionalmente, podemos usar <strong>analíticas</strong> para
                mejorar la experiencia. Si eliges <em>Solo esenciales</em>, <u>no</u> recogeremos
                datos analíticos ni de marketing.{' '}
                <a className="cookie-link" href="/politica-cookies">Más información</a>
              </p>
              <p className="cookie-small">
                Puedes cambiar tu elección en cualquier momento desde{' '}
                <a href="#" onClick={managePrefs} className="cookie-link">“Gestionar cookies”</a>.
              </p>
            </div>
            <div className="cookie-actions">
              <button className="btn-ghost" onClick={acceptEssential} aria-label="Permitir solo cookies esenciales">
                Solo esenciales
              </button>
              <button className="btn-solid" onClick={acceptAll} aria-label="Aceptar todas las cookies">
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="cookie-toast" role="status" aria-live="polite">
          {toast} <a href="#" onClick={managePrefs}>Gestionar cookies</a>
        </div>
      )}
    </>
  );
}
