const SITE = "Vahvelainen.com";

export function pageMeta(title: string, description: string) {
  return [{ title: `${title} | ${SITE}` }, { name: "description", content: description }];
}
