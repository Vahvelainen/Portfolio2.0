import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  prerender: ["/", "/work", "/bio", "/history"],
} satisfies Config;
