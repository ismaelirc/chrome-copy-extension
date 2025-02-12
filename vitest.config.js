import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Simula o DOM no Node.js
  },
});
