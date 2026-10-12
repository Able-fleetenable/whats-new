/**
 * @able/onboarding-catalog
 *
 * Single source of truth for feature walkthrough + try-todo definitions.
 * Backend and frontend both depend on this package — add new entries here
 * when shipping onboarding content (then wire `data-able-feature` in the UI).
 */
export { FEATURE_CATALOG, MOBILE_DRAWER_FEATURE_IDS, featureById, featureNeedsMobileDrawer, isFeatureId, type FeatureAudience, type FeatureDef, type FeatureMobileChrome, type FeatureRequires, } from "./features";
export { TRY_TODO_CATALOG, isTryTodoId, tryTodoById, type TryTodoAction, type TryTodoDef, type TryTodoRequires, } from "./try-todos";
