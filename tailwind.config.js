/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hexagon: "url('/hexogen/hexogen7.webp')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      clipPath: {
        diagonal: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        curved: "ellipse(100% 50% at 50%",
        zigzag: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
        wave: "path('M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z')",
        triangle: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        hexagon: "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
        asymmetric: "polygon(0 0, 100% 0, 100% 60%, 70% 100%, 0 100%))",
      },
      colors: {
        background: "hsl(var(--hsl(30.1,100%,50%)))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary, 24, 100%, 50%))",
          foreground: "hsl(var(--primary-foreground, 24, 100%, 95%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 0, 0%, 87%))",
          foreground: "hsl(var(--secondary-foreground, 0, 0%, 10%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 0, 0%, 70%))",
          foreground: "hsl(var(--muted-foreground, 0, 0%, 30%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 24, 100%, 70%))",
          foreground: "hsl(var(--accent-foreground, 24, 100%, 10%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 100%, 50%))",
          foreground: "hsl(var(--destructive-foreground, 0, 100%, 90%))",
        },
        border: "hsl(var(--border, 0, 0%, 80%))",
        input: "hsl(var(--input, 0, 0%, 90%))",
        ring: "hsl(var(--ring, 24, 100%, 50%))",
        chart: {
          1: "hsl(var(--chart-1, 24, 100%, 50%))",
          2: "hsl(var(--chart-2, 24, 100%, 70%))",
          3: "hsl(var(--chart-3, 0, 0%, 87%))",
          4: "hsl(var(--chart-4, 0, 0%, 70%))",
          5: "hsl(var(--chart-5, 0, 0%, 50%))",
        },
      },
      keyframes: {
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        rotateScale: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        moveY: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-10px)" /* Move the icon up */,
          },
          end: {
            transform: "translateY(0)" /* Return to the original position */,
          },
        },
        rotate3dX: {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(360deg)" },
        },
        rotate3dY: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        rotate3dX: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(360deg)" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "hexagon-pulse": {
          // This is your animation name
          "0%, 100%": {
            // This combines 0% and 100%
            opacity: "0.2",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(1.2)",
          },
        },
        dnaRotate: {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(360deg)" },
        },
        dnaRotateReverse: {
          "0%": { transform: "perspective(1000px) rotateY(360deg)" },
          "100%": { transform: "perspective(1000px) rotateY(0deg)" },
        },
        dnaFade: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.3" },
        },
        float: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-10px) translateX(5px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        moleculeFloat: {
          "0%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "33%": {
            transform: "translateY(-15px) translateX(10px) rotate(120deg)",
          },
          "66%": {
            transform: "translateY(5px) translateX(-10px) rotate(240deg)",
          },
          "100%": { transform: "translateY(0) translateX(0) rotate(360deg)" },
        },
        // Add your hexagon-pulse here if you want to use it as a utility
        "hexagon-pulse": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
      },
      animation: {
        "rotate-scale": "rotateScale 3s infinite linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-blob": "pop-blob 5s infinite",
        spin: "spin 1s linear infinite",
        icon: "moveY 2s infinite",
        "rotate-z": "rotate3dZ 2s linear infinite",
        "rotate-y": "rotate3dY 2s linear infinite",
        "rotate-x": "rotate3dX 4s linear infinite",
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "hexagon-pulse": "hexagon-pulse 1.5s infinite alternate", // Define the animation utility class
        "dna-rotate": "dnaRotate 20s linear infinite",
        "dna-rotate-reverse": "dnaRotateReverse 25s linear infinite",
        "dna-fade": "dnaFade 3s ease-in-out infinite alternate",
        float: "float 5s ease-in-out infinite alternate",
        "molecule-float": "moleculeFloat 8s ease-in-out infinite alternate",
        "hexagon-pulse": "hexagon-pulse 1.5s infinite alternate",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#010507",
      rich_black: "#000a0e",
      crimson: {
        50: "#fff4e5",
        100: "#ffe6cc",
        200: "#ffcc99",
        300: "#ffb366",
        400: "#ff9933",
        500: "#ff8000",
        600: "#ff5600",
        700: "#e64d00",
        800: "#cc4400",
        900: "#b33b00",
        950: "#993300",
      },
      platinum: {
        50: "#f9f9f9",
        100: "#f2f2f2",
        200: "#e5e6e6",
        300: "#dddede",
        400: "#c2c3c3",
        500: "#a8a9a9",
        600: "#8e8f8f",
        700: "#757777",
        800: "#5d5f5f",
        900: "#464848",
        950: "#2e3030",
      },
      lightBlue: {
        50: "#f4fbff",
        100: "#eaf7ff",
        200: "#ccefff",
        300: "#b0e7ff",
        400: "#80d8ff",
        500: "#4fc8ff",
        600: "#2db4e6",
        700: "#2291b3",
        800: "#196e8a",
        900: "#114c61",
        950: "#092a3a",
      },

      filter: {
        "blur-20": "blur(20px)",
        "blur-25": "blur(25px)",
      },
      background: "hsl(var(--background, 30.1, 100%, 50%))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary, 24, 100%, 50%))",
        foreground: "hsl(var(--primary-foreground, 24, 100%, 95%))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary, 0, 0%, 87%))",
        foreground: "hsl(var(--secondary-foreground, 0, 0%, 10%))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted, 0, 0%, 70%))",
        foreground: "hsl(var(--muted-foreground, 0, 0%, 30%))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent, 24, 100%, 70%))",
        foreground: "hsl(var(--accent-foreground, 24, 100%, 10%))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive, 0, 100%, 50%))",
        foreground: "hsl(var(--destructive-foreground, 0, 100%, 90%))",
      },
      border: "hsl(var(--border, 0, 0%, 80%))",
      input: "hsl(var(--input, 0, 0%, 90%))",
      ring: "hsl(var(--ring, 24, 100%, 50%))",
      chart: {
        1: "hsl(var(--chart-1, 24, 100%, 50%))",
        2: "hsl(var(--chart-2, 24, 100%, 70%))",
        3: "hsl(var(--chart-3, 0, 0%, 87%))",
        4: "hsl(var(--chart-4, 0, 0%, 70%))",
        5: "hsl(var(--chart-5, 0, 0%, 50%))",
      },
    },
    plugins: [],
  },
  plugins: [require("tailwindcss-animate")],
};
