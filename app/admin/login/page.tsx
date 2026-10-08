"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Lock, Eye, EyeOff, Loader2, Globe, AlertCircle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if already authenticated on mount
  useEffect(() => {
    // Attempt a lightweight admin API call to detect existing session
    fetch("/api/admin/enquiries?pageSize=1")
      .then((res) => {
        if (res.ok) router.replace("/admin");
      })
      .catch(() => {});
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(result.error || "Authentication failed. Please check your credentials.");
        return;
      }

      // Redirect to dashboard
      router.push(from);
      router.refresh();
    } catch {
      setError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-blue-600 rounded flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">
              DORA Global Research
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            Admin Access
          </h1>
          <p className="text-slate-400 text-sm mt-1.5">
            Restricted to authorised personnel only
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Error Banner */}
            {error && (
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-red-950 border border-red-800 text-red-300 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                <p>{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label
                htmlFor="admin-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 disabled:opacity-50 transition-colors"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  disabled={isLoading}
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 disabled:opacity-50 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              id="admin-login-submit"
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating…
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <p className="text-center text-xs text-slate-600 leading-relaxed">
              This is a protected administrative area.
              <br />
              All access attempts are logged and monitored.
            </p>
          </div>
        </div>

        {/* Footer link back to public site */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            ← Return to DORA Global Research
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
