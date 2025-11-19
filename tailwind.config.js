// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1f2937",
        accent: "#4627B2"
      },
      maxWidth: {
        'page': '1150px'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // explicit sizes to match screenshots (pixels)
        'ud-hero-xl': ['56px', { lineHeight: '1.03', fontWeight: '800' }], // hero big
        'ud-hero-lg': ['40px', { lineHeight: '1.05', fontWeight: '800' }], // large headings
        'ud-h2': ['22px', { lineHeight: '1.18', fontWeight: '700' }],
        'ud-base': ['15px', { lineHeight: '1.5' }],
        'ud-small': ['13px', { lineHeight: '1.4' }]
      },
      spacing: {
        'ud-hero-vertical': '3.25rem', // 52px gap used in hero
        'ud-card-h': '140px'
      },
      borderRadius: {
        'ud-card': '12px'
      }
    },
  },
  plugins: [],
}
