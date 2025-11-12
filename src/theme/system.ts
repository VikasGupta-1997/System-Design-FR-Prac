import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Chakra UI v3 system setup: customize tokens here
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e3f2f9" },
          100: { value: "#c5e4f3" },
          200: { value: "#a2d4ec" },
          300: { value: "#7ac1e4" },
          400: { value: "#47a9da" },
          500: { value: "#3182ce" },
          600: { value: "#2a69ac" },
          700: { value: "#2b6cb0" },
          800: { value: "#2c5282" },
          900: { value: "#2a4365" }
        }
      },
      fonts: {
        heading: { value: "'Poppins', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" }
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" }
      }
    }
  }
});

export const system = createSystem(defaultConfig, config);
export default system;
