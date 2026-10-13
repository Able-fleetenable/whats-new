export type WhatsNewAudience = "all" | "new" | "existing";
export type WhatsNewRequires = "chat" | "inbox" | "insights" | "reminders";
export type WhatsNewMobileChrome = "drawer" | "page";

export type WhatsNewItem = {
  id: string;
  title: string;
  body: string;
  shippedAt: string;
  audience: WhatsNewAudience;
  requires?: WhatsNewRequires;
  href?: string;
  ctaLabel?: string;
  mobileChrome?: WhatsNewMobileChrome;
};

/** Order = announcement order. */
export const WHATS_NEW: readonly WhatsNewItem[];

/** Same as package.json version / published git tag. */
export const VERSION: string;
