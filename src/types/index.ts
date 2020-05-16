export type Open = { open: string | null };
export type TranslatableName = {
  is: string;
  en: string;
}
export interface Page {
  name: TranslatableName;
  slug: string;
}
export interface HeaderMetaData {
  site: {
    siteMetadata: {
      title: string;
      pages: Page[];
    }
  }
}