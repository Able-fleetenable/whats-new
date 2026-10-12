/**
 * What's New — deploy-time catalog for the Able feature walkthrough.
 *
 * Add a new entry when you ship something people should acknowledge. Ids are
 * stable: once accepted they never reappear. Bump the id (e.g. `inbox.v2`) if
 * the same surface needs a fresh walkthrough.
 *
 * `audience`:
 *   - `all`      — everyone who hasn't acked it (new + existing)
 *   - `new`      — only users whose first Able login is on/after `shippedAt`
 *   - `existing` — only users who already had Able before `shippedAt`
 *
 * `requires` (agents-mode page gate):
 *   - omitted     — always shown (theme, profile, …)
 *   - `chat`      — Personal Assistant / Analyst
 *   - `inbox`     — Customer Service Agent (csr)
 *   - `insights`  — Analyst
 *   - `reminders` — platform reminders switch (typically with chat)
 *
 * Anchor in the UI with `data-able-feature="{id}"`.
 */
export type FeatureAudience = "all" | "new" | "existing";
export type FeatureRequires = "chat" | "inbox" | "insights" | "reminders";
/** Where the control lives on mobile (drawer vs main chrome). */
export type FeatureMobileChrome = "drawer" | "page";
export type WhatsNewItem = {
    id: string;
    title: string;
    body: string;
    /** ISO date — used with `audience` and for sort order. */
    shippedAt: string;
    audience: FeatureAudience;
    /** Hide when the user lacks this page / platform switch (agents mode). */
    requires?: FeatureRequires;
    /** Optional deep link shown as a secondary CTA after accept. */
    href?: string;
    ctaLabel?: string;
    /**
     * Mobile coachmark placement. `drawer` → open the nav drawer to find the
     * control; `page` (default) → keep the drawer closed.
     */
    mobileChrome?: FeatureMobileChrome;
};
/** Order = walkthrough order. */
export declare const WHATS_NEW: readonly WhatsNewItem[];
