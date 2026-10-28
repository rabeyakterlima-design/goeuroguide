"use client";

import React, { useState } from "react";
import { Lock, Mail, User, Eye, EyeOff, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Logo from "@/components/common/Logo";
import { loginWithEmail, registerWithEmail, resetUserPassword } from "@/lib/firebase/auth";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (isRegister) {
        await registerWithEmail(email, password, name);
        setSuccessMessage(`Account created successfully for ${email}! You are now signed in.`);
      } else {
        await loginWithEmail(email, password);
        setSuccessMessage(`Welcome back! Successfully signed in as ${email}.`);
      }
    } catch (err: unknown) {
      console.error("Auth error:", err);
      const authErr = err as { code?: string; message?: string };
      // Map Firebase error codes to friendly messages
      let msg = authErr.message || "Authentication failed. Please check your details.";
      if (authErr.code === "auth/invalid-credential" || authErr.code === "auth/user-not-found" || authErr.code === "auth/wrong-password") {
        msg = "Invalid email or password. If you don't have an account yet, please sign up.";
      } else if (authErr.code === "auth/email-already-in-use") {
        msg = "An account with this email address already exists. Please sign in instead.";
      } else if (authErr.code === "auth/weak-password") {
        msg = "Password should be at least 6 characters.";
      } else if (authErr.code === "auth/operation-not-allowed") {
        msg = "Email/Password sign-in is not yet enabled in Firebase Console. Please enable it in Firebase -> Authentication -> Sign-in method.";
      }
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrorMessage("Please enter your email address first to reset password.");
      return;
    }
    setLoading(true);
    setErrorMessage(null);
    try {
      await resetUserPassword(email);
      setSuccessMessage(`Password reset link sent to ${email}. Please check your inbox.`);
    } catch (err: unknown) {
      const resetErr = err as { message?: string };
      setErrorMessage(resetErr.message || "Failed to send password reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <Logo size="lg" />
        </div>
        <h1 className="text-2xl font-bold text-[#17324D] tracking-tight">
          {isRegister ? "Create your GoEuroGuide Account" : "Sign in to GoEuroGuide"}
        </h1>
        <p className="text-xs text-slate-500">
          Save custom itineraries, track travel budgets, and bookmark your favourite European destinations.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        {successMessage && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Rossi"
                  required={isRegister}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#3478A8]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="traveler@example.com"
                required
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#3478A8]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Password
              </label>
              {!isRegister && (
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[11px] text-[#3478A8] hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#3478A8]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-[#17324D] hover:bg-[#23476c] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{isRegister ? "Create Account" : "Sign In"}</span>
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
          {isRegister ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsRegister(false);
                  setErrorMessage(null);
                  setSuccessMessage(null);
                }}
                className="text-[#3478A8] font-bold hover:underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsRegister(true);
                  setErrorMessage(null);
                  setSuccessMessage(null);
                }}
                className="text-[#3478A8] font-bold hover:underline"
              >
                Sign Up for Free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
