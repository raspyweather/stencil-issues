import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "webcomponents",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  sourceMap: true,
  testing: {
    transform: {
      "^.+\\.(ts|tsx|js|jsx|css)$": "@stencil/core/testing/jest-preprocessor"
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!swiper)/"],
  },
  devServer: {
    startupTimeout: 50000
  }
};
