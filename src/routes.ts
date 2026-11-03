import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { works } from "./content/works";

const workPages = works
  .filter((work) => work.hasPage)
  .map((work) => route(`work/${work.slug}`, `routes/work/${work.slug}.tsx`));

export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  ...workPages,
  route("bio", "routes/bio.tsx"),
  route("history", "routes/history.tsx"),
] satisfies RouteConfig;
