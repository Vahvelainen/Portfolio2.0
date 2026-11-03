import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/maintenance.tsx"),
  route("*", "routes/maintenance.tsx", { id: "routes/maintenance-fallback" }),
] satisfies RouteConfig;
