export function getConfig() {
  if (!globalThis.astrosaurus) {
    console.error("[🦕] Astrosaurus Config has not been initialized correctly");
  }

  return globalThis.astrosaurus || {};
}

/** Define the astrosaurus config
 *  @param {import("./index.d.ts").Config} config
 */
export function defineConfig(config) {
  globalThis.astrosaurus = config;
  return config;
}
