/**
 * "Try these features" checklist — separate from the spotlight walkthrough.
 * Each item is a hands-on task before / while chatting.
 */
export type TryTodoAction =
  | { kind: "chat"; prompt: string; /** Prefill composer only — do not auto-send. */ draft?: boolean }
  | { kind: "href"; href: string };

export type TryTodoRequires = "chat" | "inbox" | "insights" | "reminders";

export type TryTodoDef = {
  id: string;
  title: string;
  body: string;
  action: TryTodoAction;
  /** Hide when the user lacks this page / platform switch (FE + BE filter). */
  requires?: TryTodoRequires;
};

export const TRY_TODO_CATALOG: readonly TryTodoDef[] = [
  {
    id: "try.create_order",
    title: "Create an order",
    body: "Draft a new order from a short description or uploaded document.",
    requires: "chat",
    action: {
      kind: "chat",
      draft: true,
      prompt:
        "Help me create a new order. Ask me for the details you need (pickup, delivery, freight), then draft the order for my review.",
    },
  },
  {
    id: "try.connect_mail",
    title: "Connect your mailbox",
    body: "Find emails, draft replies, and extract attachments.",
    requires: "inbox",
    action: { kind: "href", href: "/inbox/connect" },
  },
  {
    id: "try.set_reminder",
    title: "Set a reminder",
    body: "Create a reminder using natural language.",
    requires: "reminders",
    action: {
      kind: "chat",
      draft: true,
      prompt: "Remind me ",
    },
  },
  {
    id: "try.ask_chat",
    title: "Ask Able a question",
    body: "Try a live ops question — tracking, volumes, or status — in chat.",
    requires: "chat",
    action: {
      kind: "chat",
      draft: true,
      prompt: "What should I check first in my operations today?",
    },
  },
  {
    id: "try.insights",
    title: "Open Insights",
    body: "Browse a report or build a quick chart from your FleetEnable data.",
    requires: "insights",
    action: { kind: "href", href: "/reporting" },
  },
];

const byId = new Map(TRY_TODO_CATALOG.map((t) => [t.id, t]));

export function isTryTodoId(id: string): boolean {
  return byId.has(id);
}

export function tryTodoById(id: string): TryTodoDef | undefined {
  return byId.get(id);
}
