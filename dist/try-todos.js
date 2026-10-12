"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRY_TODO_CATALOG = void 0;
exports.isTryTodoId = isTryTodoId;
exports.tryTodoById = tryTodoById;
exports.TRY_TODO_CATALOG = [
    {
        id: "try.create_order",
        title: "Create an order",
        body: "Draft a new order from a short description or uploaded document.",
        requires: "chat",
        action: {
            kind: "chat",
            draft: true,
            prompt: "Help me create a new order. Ask me for the details you need (pickup, delivery, freight), then draft the order for my review.",
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
const byId = new Map(exports.TRY_TODO_CATALOG.map((t) => [t.id, t]));
function isTryTodoId(id) {
    return byId.has(id);
}
function tryTodoById(id) {
    return byId.get(id);
}
