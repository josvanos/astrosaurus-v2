import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astrosaurus } from "./astrosaurus/integration";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), ...astrosaurus({
    site: {
      title: "Astrosaurus",
      logo: "🦕",
      description: "Your website description.",
      editUrl: `https://github.com/withastro/astro/tree/main/examples/docs`,
      inviteUrl: "https://github.com/withastro/astro"
    },
    socials: {
      github: "https://github.com/josvanos/astrosaurus",
      discord: "<YOUR DISCORD LINK>",
      twitter: "<YOUR TWITTER LINK>"
    },
    menu: {
      docs: "/docs/introduction",
      blog: "/blog"
    }
  }), mdx()]
});