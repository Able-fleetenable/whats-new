/**
 * What's New — feature announcement catalog.
 * Order = display order. Ids are stable once seen.
 *
 * audience: "all" | "new" | "existing"
 * requires (optional): "chat" | "inbox" | "insights" | "reminders"
 * mobileChrome (optional): "drawer" | "page" (default page)
 */
const WHATS_NEW = [
  {
    id: "welcome.reminders",
    title: "Meet Reminders",
    body: "Stay on top of important tasks and follow-ups.",
    shippedAt: "2026-10-13T00:00:00.000Z",
    audience: "all",
    requires: "reminders",
    href: "/reminders",
    ctaLabel: "Explore",
    mobileChrome: "drawer",
  },
];

const { version: VERSION } = require("../package.json");

module.exports = { WHATS_NEW, VERSION };
