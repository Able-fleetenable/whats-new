/**
 * What's New — feature announcement catalog for all signed-in users.
 * Order = display order. Ids are stable once seen.
 */
const WHATS_NEW = [
  {
    id: "welcome.reminders",
    title: "Meet Reminders",
    body: "Stay on top of important tasks and follow-ups.",
    shippedAt: "2026-10-13T00:00:00.000Z",
    audience: "all",
    href: "/reminders",
    ctaLabel: "Explore",
    mobileChrome: "drawer",
  },
];

const { version: VERSION } = require("../package.json");

module.exports = { WHATS_NEW, VERSION };
