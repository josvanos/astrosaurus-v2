import { asideAutoImport, astroAsides } from "./integrations/admonitions.mjs";
import AutoImport from "astro-auto-import";
/**
 * The astrosaurus integration
 * @param {Astrosaurus.Config} config
 * @returns {import("astro").AstroIntegration[]}
 */
export function astrosaurus(config) {
  globalThis.astrosaurus = config;

  return [
    AutoImport({ imports: [asideAutoImport, {   }] }),
    astroAsides({ variants: ["tip", "note", "caution", "danger"] }),
  ];
  return {
    name: "astrosaurus",
    hooks: {},
  };
}
