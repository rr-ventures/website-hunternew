import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        charcoal: '#0F172A',
        muted: '#1E293B',
        accent: '#F97316'
      },
      backgroundImage: {
        'noise-light': "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.03%27/%3E%3C/svg%3E')"
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15,23,42,0.12)',
        header: '0 6px 30px rgba(15,23,42,0.08)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        float: 'float 10s ease-in-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
