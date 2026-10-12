"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryTodoById = exports.isTryTodoId = exports.TRY_TODO_CATALOG = exports.isFeatureId = exports.featureNeedsMobileDrawer = exports.featureById = exports.MOBILE_DRAWER_FEATURE_IDS = exports.FEATURE_CATALOG = void 0;
/**
 * @able/onboarding-catalog
 *
 * Single source of truth for feature walkthrough + try-todo definitions.
 * Backend and frontend both depend on this package — add new entries here
 * when shipping onboarding content (then wire `data-able-feature` in the UI).
 */
var features_1 = require("./features");
Object.defineProperty(exports, "FEATURE_CATALOG", { enumerable: true, get: function () { return features_1.FEATURE_CATALOG; } });
Object.defineProperty(exports, "MOBILE_DRAWER_FEATURE_IDS", { enumerable: true, get: function () { return features_1.MOBILE_DRAWER_FEATURE_IDS; } });
Object.defineProperty(exports, "featureById", { enumerable: true, get: function () { return features_1.featureById; } });
Object.defineProperty(exports, "featureNeedsMobileDrawer", { enumerable: true, get: function () { return features_1.featureNeedsMobileDrawer; } });
Object.defineProperty(exports, "isFeatureId", { enumerable: true, get: function () { return features_1.isFeatureId; } });
var try_todos_1 = require("./try-todos");
Object.defineProperty(exports, "TRY_TODO_CATALOG", { enumerable: true, get: function () { return try_todos_1.TRY_TODO_CATALOG; } });
Object.defineProperty(exports, "isTryTodoId", { enumerable: true, get: function () { return try_todos_1.isTryTodoId; } });
Object.defineProperty(exports, "tryTodoById", { enumerable: true, get: function () { return try_todos_1.tryTodoById; } });
