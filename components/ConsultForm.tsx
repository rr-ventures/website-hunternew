'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@/lib/analytics';

interface ConsultFormProps {
  compact?: boolean;
}

export function ConsultForm({ compact = false }: ConsultFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (formData: FormData) => {
    setStatus('submitting');
    const payload = {
      firstName: formData.get('firstName') as string,
      mobile: formData.get('mobile') as string,
      email: formData.get('email') as string,
      stage: formData.get('stage') as string,
      timeframe: (formData.get('timeframe') as string) || undefined,
      challenge: (formData.get('challenge') as string) || undefined
    };

    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Unable to send right now');
      setStatus('success');
      setMessage('Thanks — we’ll reach out shortly to confirm next steps.');
      track('submit_consult_form', { location: compact ? 'cta' : 'main' });
    } catch (error) {
      setStatus('error');
      setMessage((error as Error).message);
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-4"
      action={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          First name*
          <input
            required
            name="firstName"
            placeholder="Alex"
            className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          Mobile*
          <input
            required
            name="mobile"
            type="tel"
            placeholder="0466 911 617"
            className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        Email*
        <input
          required
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        Where are you at?*
        <select
          required
          name="stage"
          className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
        >
          <option value="">Choose an option</option>
          <option>First home buyer</option>
          <option>Want to invest</option>
          <option>Already own a home</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          Timeframe
          <select
            name="timeframe"
            className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
          >
            <option value="">Select</option>
            <option>0–3 months</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
            <option>12+ months</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          What’s the biggest thing you’re stuck on?
          <textarea
            name="challenge"
            rows={compact ? 2 : 3}
            placeholder="Financing, timing, confidence..."
            className="w-full rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>
      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        className="relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white btn-shimmer animate-shimmer shadow-soft hover:scale-[1.01] active:scale-[0.98] transition-transform disabled:opacity-70"
        whileTap={{ scale: 0.97 }}
      >
        {status === 'submitting' ? 'Sending...' : 'Book My Free Strategy Consult'}
      </motion.button>

      <AnimatePresence>
        {status !== 'idle' && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={
              status === 'success'
                ? 'text-emerald-700 font-semibold'
                : 'text-red-600 font-semibold'
            }
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
