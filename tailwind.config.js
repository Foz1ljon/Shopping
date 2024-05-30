/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      backgroundImage: {
        hbg: "linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%)",
        blc: "linear-gradient(90deg, rgba(255,250,250,1) 0%, rgba(223,223,223,1) 100%)",
      },

      boxShadow: {
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
