export type Work = {
  slug: string;
  title: string;
  media: string;
  /** First is the one-line pitch, last is the credit line (year and place). */
  paragraphs: string[];
  hasPage?: boolean;
  hidden?: boolean;
};

export type HistoryEntry = {
  title: string;
  years: string;
  paragraphs: string[];
};
