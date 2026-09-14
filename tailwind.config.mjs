/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rescue: {
          bg: '#080C14',
          'bg-card': '#0F1523',
          'bg-elevated': '#151D2F',
          surface: '#1C263B',
          border: '#2B384E',
          'border-light': '#3F4F6B',
          // Cores Oficiais da Marca Chaveiro Rodrigues (Extraídas da Logomarca)
          red: '#DA1907',
          'red-hover': '#B91C1C',
          'red-light': '#EF4444',
          'red-glow': 'rgba(218, 25, 7, 0.25)',
          // Cromo e Prata Metálico do Medalhão
          chrome: '#CBD5E1',
          'chrome-light': '#F1F5F9',
          'chrome-dark': '#64748B',
          // Azul técnico e WhatsApp
          blue: '#3B82F6',
          'blue-hover': '#2563EB',
          whatsapp: '#22C55E',
          'whatsapp-hover': '#16A34A',
          'whatsapp-glow': 'rgba(34, 197, 94, 0.25)',
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
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(34, 197, 94, 0.8)' },
        },
        glowRed: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(218, 25, 7, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(218, 25, 7, 0.7)' },
        },
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s ease-in-out infinite',
        'glow-whatsapp': 'glowPulse 2s ease-in-out infinite',
        'glow-red': 'glowRed 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
