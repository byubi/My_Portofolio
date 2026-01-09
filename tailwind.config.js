// assets/js/tailwind-config.js
document.addEventListener("DOMContentLoaded", function () {
  if (typeof tailwind !== "undefined") {
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            overcast: "#F1F1F2",
            "warm-gray": "#BCBABE",
            ice: "#A1D6E2",
            "glacier-blue": "#1995AD",
          },
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
          },
        },
      },
    };
  }
});
