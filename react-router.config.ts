import { rename, rm } from "node:fs/promises";
import path from "node:path";
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [...getStaticPaths(), "/404"];
  },
  async buildEnd({ reactRouterConfig }) {
    // Firebase Hosting serves /404.html, with a 404 status, for any unknown path.
    const client = path.join(reactRouterConfig.buildDirectory, "client");
    await rename(path.join(client, "404/index.html"), path.join(client, "404.html"));
    await rm(path.join(client, "404"), { recursive: true });
  },
} satisfies Config;
