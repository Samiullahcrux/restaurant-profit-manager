export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#e2e8f0',
          500: '#64748B',
          600: '#475569',
          700: '#0F172A',
          800: '#172554',
          900: '#0C1533',
        },
        accent: {
          50: '#f0fdf4',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
        },
        warning: {
          50: '#fffbeb',
          500: '#D97706',
          600: '#b45309',
        },
        danger: {
          50: '#fef2f2',
          500: '#DC2626',
          600: '#b91c1c',
        },
      },
      fontSize: {
        'kpi': ['24px', '32px'],
        'heading': ['20px', '28px'],
        'subheading': ['16px', '24px'],
      },
      spacing: {
        '8xs': '0.5rem',
        '4xs': '1rem',
        '2xs': '1.5rem',
        'xs': '2rem',
        'sm': '2.5rem',
        'md': '3rem',
        'lg': '4rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
