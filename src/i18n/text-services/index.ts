import type { BrandingSeoContent } from "@/i18n/branding-seo";
import { locales, type Locale } from "@/i18n/config";
import type { ServicePageContent } from "@/i18n/logo";
import { brandAudit } from "./brand-audit";
import { brandVoice } from "./brand-voice";
import { fontDesign } from "./font-design";
import { marketingResearch } from "./marketing-research";
import { motionDesign } from "./motion-design";

/** Service pages built on the brand-character layout. Only languages with copy get a page. */
export type TextServiceContent = {
  heroImage: string;
  page: Partial<Record<Locale, ServicePageContent>>;
  seo: Partial<Record<Locale, BrandingSeoContent>>;
};

export const textServices: Record<string, TextServiceContent> = {
  "marketing-research": marketingResearch,
  "motion-design": motionDesign,
  "brand-audit": brandAudit,
  "brand-voice": brandVoice,
  "font-design": fontDesign,
};

export function hasServiceLocale(slug: string, locale: Locale): boolean {
  const service = textServices[slug];
  return !service || Boolean(service.page[locale]);
}

/** Drop hreflang entries for languages where the service page does not exist. */
export function withServiceLanguages(
  languages: Record<string, string>,
  slug: string,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languages).filter(([key]) => {
      if (key === "x-default") return hasServiceLocale(slug, "uk");
      return !(locales as readonly string[]).includes(key) || hasServiceLocale(slug, key as Locale);
    }),
  );
}
