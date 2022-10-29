import { ScullyConfig } from "@scullyio/scully";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "sean-chen",
  distFolder: "./dist/sean-chen", // output directory of your Angular build artifacts
  outDir: "./vercel/output", // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
  puppeteerLaunchOptions: {
    args: ["--no-sandbox"],
  },
};
