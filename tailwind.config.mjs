/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rescue: {
          bg: '#0A0F1D',
          'bg-card': '#111827',
          'bg-elevated': '#161F36',
          surface: '#1E293B',
          border: '#334155',
          'border-light': '#475569',
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          'amber-glow': 'rgba(245, 158, 11, 0.15)',
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-glow': 'rgba(37, 99, 235, 0.15)',
          whatsapp: '#22C55E',
          'whatsapp-hover': '#16A34A',
          'whatsapp-glow': 'rgba(34, 197, 94, 0.25)',
          danger: '#EF4444',
          text: '#F8FAFC',
          'text-muted': '#94A3B8',
          'text-dim': '#64748B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      keyframes: {
        pulseFast: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(34, 197, 94, 0.8)' },
        },
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s ease-in-out infinite',
        'glow-whatsapp': 'glowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
