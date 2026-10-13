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
    id: "welcome.chat",
    title: "Chat with Able",
    body: "Ask questions, search order records, or dictate tasks with the microphone button. Able acts as your personal operational assistant to track and modify shipments on the fly.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "chat",
    href: "/chat",
    ctaLabel: "Open chat",
    mobileChrome: "drawer",
  },
  {
    id: "welcome.composer",
    title: "Ask anything here",
    body: "This is your chat input. Type a question here, then send — Able replies in the thread below.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "chat",
    href: "/chat",
    ctaLabel: "Open chat",
    mobileChrome: "page",
  },
  {
    id: "welcome.attach",
    title: "Attach a file",
    body: "Use the paperclip to upload documents, images, or PDFs with your message. Able can read attachments to draft orders, answer questions, or extract details.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "chat",
    href: "/chat",
    ctaLabel: "Open chat",
    mobileChrome: "page",
  },
  {
    id: "welcome.voice",
    title: "Dictate with your voice",
    body: "Tap the microphone to speak instead of typing. Confirm the transcript into the box, then send — useful when your hands are busy on the floor.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "chat",
    href: "/chat",
    ctaLabel: "Open chat",
    mobileChrome: "page",
  },
  {
    id: "welcome.inbox",
    title: "Streamline your inbox",
    body: "Connect your Outlook or shared mailboxes. Able monitors folder arrivals, automatically drafts replies, and extracts attachments to book orders for your review.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "inbox",
    href: "/inbox",
    ctaLabel: "Open Inbox",
    mobileChrome: "drawer",
  },
  {
    id: "welcome.insights",
    title: "Generate instant reports",
    body: "Visit Insights to build interactive dashboards, track trends, and toggle privacy controls (Private, Org View, or Org Edit) to share performance metrics.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "insights",
    href: "/reporting",
    ctaLabel: "Open Insights",
    mobileChrome: "drawer",
  },
  {
    id: "welcome.reminders",
    title: "Meet Reminders",
    body: "Stay on top of important tasks and follow-ups.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    requires: "reminders",
    href: "/reminders",
    ctaLabel: "Explore",
    mobileChrome: "drawer",
  },
  {
    id: "welcome.theme",
    title: "Personalize your view",
    body: "Adjust your workspace appearance at any time. Go to Settings → Appearance under your profile to toggle between Light, Dark, or your default System theme.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    mobileChrome: "page",
  },
  {
    id: "welcome.profile",
    title: "Manage your profile",
    body: "View your system avatar, email, and organization details at a glance. Navigate to Settings → General to view your active profile pulled from FleetEnable.",
    shippedAt: "2026-10-08T00:00:00.000Z",
    audience: "all",
    mobileChrome: "page",
  },
];

const { version: VERSION } = require("../package.json");

module.exports = { WHATS_NEW, VERSION };
