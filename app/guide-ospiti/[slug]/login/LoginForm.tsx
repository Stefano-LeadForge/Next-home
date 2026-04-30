'use client';

import { useActionState } from 'react';
import { loginAction } from './actions';

export default function LoginForm({ slug, label }: { slug: string; label: string }) {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <main className="guide-login-page">
      <div className="guide-login-card">
        <p className="guide-login-eyebrow">Accesso riservato</p>
        <h1 className="guide-login-title">{label}</h1>
        <form action={formAction} className="guide-login-form">
          <input type="hidden" name="slug" value={slug} />
          <input
            type="password"
            name="password"
            className="guide-login-input"
            placeholder="Password"
            maxLength={4}
            autoComplete="current-password"
            autoFocus
          />
          {state?.error && (
            <p className="guide-login-error" role="alert">{state.error}</p>
          )}
          <button type="submit" className="guide-login-btn" disabled={pending}>
            {pending ? '—' : 'Accedi'}
          </button>
        </form>
      </div>
    </main>
  );
}
