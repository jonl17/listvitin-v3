import { FluidObject } from "gatsby-image";

export type ExhibitionFilterType = "opna bráðum" | "opnar" | "afstaðnar";
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
export type Mynd = {
  fluid: FluidObject;
}
export interface StadurShort {
  id: string;
  title: string;
  slug: string;
  mynd: Mynd;
}
export interface Artist {
  id: string;
  nafn: string;
}
export interface Syning {
  id: string;
  title: string;
  opnun: string;
  lokun: string;
  slug: string;
  mynd: Mynd;
  stadur: StadurShort;
  artist: Artist[];
}
export interface Artist {
  nafn: string;
  exhibition: Syning[];
}