'use client';

import { track } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { cn } from 'tailwind-merge';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  eventName?: Parameters<typeof track>[0];
  as?: 'button' | 'link';
  href?: string;
}

export function CTAButton({
  children = 'Book a Free Strategy Consult',
  className,
  eventName = 'click_cta_bottom',
  as = 'button',
  href,
  ...props
}: CTAButtonProps) {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-white shadow-soft transition-transform duration-200 ease-out btn-shimmer animate-shimmer',
    'hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-offset-2',
    className
  );

  if (as === 'link' && href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileTap={{ scale: 0.97 }}
        onClick={() => track(eventName)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      {...props}
      className={baseClasses}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        props.onClick?.(e);
        track(eventName);
      }}
    >
      {children}
    </motion.button>
  );
}
