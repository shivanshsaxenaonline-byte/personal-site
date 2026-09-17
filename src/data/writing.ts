export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

/**
 * Writing published somewhere else — a company blog, a newsletter, a guest
 * post. These are merged with the Markdown posts in `content/writing/` on the
 * Writing index and marked as external. Leave it empty until there is
 * something to point at.
 */
const data: WritingItem[] = [];

export default data;
