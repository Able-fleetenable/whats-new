/**
 * "Try these features" checklist — separate from the spotlight walkthrough.
 * Each item is a hands-on task before / while chatting.
 */
export type TryTodoAction = {
    kind: "chat";
    prompt: string; /** Prefill composer only — do not auto-send. */
    draft?: boolean;
} | {
    kind: "href";
    href: string;
};
export type TryTodoRequires = "chat" | "inbox" | "insights" | "reminders";
export type TryTodoDef = {
    id: string;
    title: string;
    body: string;
    action: TryTodoAction;
    /** Hide when the user lacks this page / platform switch (FE + BE filter). */
    requires?: TryTodoRequires;
};
export declare const TRY_TODO_CATALOG: readonly TryTodoDef[];
export declare function isTryTodoId(id: string): boolean;
export declare function tryTodoById(id: string): TryTodoDef | undefined;
