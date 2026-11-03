import { Link } from "react-router";
import { Section } from "@/components/layout/Section";

export function NotFoundPage() {
  return (
    <Section innerClassName="py-40 text-center">
      <h1 className="mb-4 page-title">Page not found</h1>
      <Link to="/">Back to the front page</Link>
    </Section>
  );
}
