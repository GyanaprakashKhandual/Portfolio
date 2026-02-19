const reactjsFileMap = {
  // Basic
  "introduction-to-react": {
    fileName: "Intro.md",
    filePath: "note/development/frontend/react/basic/Intro.md",
  },
  "jsx-fundamentals": {
    fileName: "JSX.md",
    filePath: "note/development/frontend/react/basic/JSX.md",
  },
  "components-and-props": {
    fileName: "Components.md",
    filePath: "note/development/frontend/react/basic/Components.md",
  },
  "rendering-elements": {
    fileName: "Rendering.md",
    filePath: "note/development/frontend/react/basic/Rendering.md",
  },
  "event-handling": {
    fileName: "EventHandling.md",
    filePath: "note/development/frontend/react/basic/EventHandling.md",
  },
  "conditional-rendering": {
    fileName: "ConditionalRendering.md",
    filePath: "note/development/frontend/react/basic/ConditionalRendering.md",
  },
  "lists-and-keys": {
    fileName: "ListsKeys.md",
    filePath: "note/development/frontend/react/basic/ListsKeys.md",
  },
  "forms-and-controlled-components": {
    fileName: "Forms.md",
    filePath: "note/development/frontend/react/basic/Forms.md",
  },

  // Hooks
  usestate: {
    fileName: "UseState.md",
    filePath: "note/development/frontend/react/hooks/UseState.md",
  },
  useeffect: {
    fileName: "UseEffect.md",
    filePath: "note/development/frontend/react/hooks/UseEffect.md",
  },
  usecontext: {
    fileName: "UseContext.md",
    filePath: "note/development/frontend/react/hooks/UseContext.md",
  },
  usereducer: {
    fileName: "UseReducer.md",
    filePath: "note/development/frontend/react/hooks/UseReducer.md",
  },
  useref: {
    fileName: "UseRef.md",
    filePath: "note/development/frontend/react/hooks/UseRef.md",
  },
  usememo: {
    fileName: "UseMemo.md",
    filePath: "note/development/frontend/react/hooks/UseMemo.md",
  },
  usecallback: {
    fileName: "UseCallback.md",
    filePath: "note/development/frontend/react/hooks/UseCallback.md",
  },
  uselayouteffect: {
    fileName: "UseLayoutEffect.md",
    filePath: "note/development/frontend/react/hooks/UseLayoutEffect.md",
  },
  useimperativehandle: {
    fileName: "UseImperativeHandle.md",
    filePath: "note/development/frontend/react/hooks/UseImperativeHandle.md",
  },
  useid: {
    fileName: "UseId.md",
    filePath: "note/development/frontend/react/hooks/UseId.md",
  },
  usetransition: {
    fileName: "UseTransition.md",
    filePath: "note/development/frontend/react/hooks/UseTransition.md",
  },
  usedeferredvalue: {
    fileName: "UseDeferredValue.md",
    filePath: "note/development/frontend/react/hooks/UseDeferredValue.md",
  },
  usesyncexternalstore: {
    fileName: "UseSyncExternalStore.md",
    filePath: "note/development/frontend/react/hooks/UseSyncExternalStore.md",
  },
  useinsertioneffect: {
    fileName: "UseInsertionEffect.md",
    filePath: "note/development/frontend/react/hooks/UseInsertionEffect.md",
  },

  // React 19 New Hooks
  useactionstate: {
    fileName: "UseActionState.md",
    filePath: "note/development/frontend/react/hooks/UseActionState.md",
  },
  useformstatus: {
    fileName: "UseFormStatus.md",
    filePath: "note/development/frontend/react/hooks/UseFormStatus.md",
  },
  useoptimistic: {
    fileName: "UseOptimistic.md",
    filePath: "note/development/frontend/react/hooks/UseOptimistic.md",
  },

  // Component Patterns
  "component-composition": {
    fileName: "Composition.md",
    filePath: "note/development/frontend/react/patterns/Composition.md",
  },
  "higher-order-components": {
    fileName: "HOC.md",
    filePath: "note/development/frontend/react/patterns/HOC.md",
  },
  "render-props": {
    fileName: "RenderProps.md",
    filePath: "note/development/frontend/react/patterns/RenderProps.md",
  },
  "compound-components": {
    fileName: "CompoundComponents.md",
    filePath: "note/development/frontend/react/patterns/CompoundComponents.md",
  },
  "custom-hooks": {
    fileName: "CustomHooks.md",
    filePath: "note/development/frontend/react/patterns/CustomHooks.md",
  },
  "forwarding-refs": {
    fileName: "ForwardingRefs.md",
    filePath: "note/development/frontend/react/patterns/ForwardingRefs.md",
  },

  // State Management
  "lifting-state-up": {
    fileName: "LiftingState.md",
    filePath: "note/development/frontend/react/state/LiftingState.md",
  },
  "context-api": {
    fileName: "ContextAPI.md",
    filePath: "note/development/frontend/react/state/ContextAPI.md",
  },
  "state-management-with-zustand": {
    fileName: "Zustand.md",
    filePath: "note/development/frontend/react/state/Zustand.md",
  },
  "state-management-with-redux-toolkit": {
    fileName: "ReduxToolkit.md",
    filePath: "note/development/frontend/react/state/ReduxToolkit.md",
  },

  // Performance
  "react-memo": {
    fileName: "ReactMemo.md",
    filePath: "note/development/frontend/react/performance/ReactMemo.md",
  },
  "code-splitting": {
    fileName: "CodeSplitting.md",
    filePath: "note/development/frontend/react/performance/CodeSplitting.md",
  },
  "lazy-and-suspense": {
    fileName: "LazySuspense.md",
    filePath: "note/development/frontend/react/performance/LazySuspense.md",
  },
  virtualization: {
    fileName: "Virtualization.md",
    filePath: "note/development/frontend/react/performance/Virtualization.md",
  },
  profiling: {
    fileName: "Profiling.md",
    filePath: "note/development/frontend/react/performance/Profiling.md",
  },

  // React 19 Features
  "server-components": {
    fileName: "ServerComponents.md",
    filePath: "note/development/frontend/react/react19/ServerComponents.md",
  },
  "server-actions": {
    fileName: "ServerActions.md",
    filePath: "note/development/frontend/react/react19/ServerActions.md",
  },
  "asset-loading": {
    fileName: "AssetLoading.md",
    filePath: "note/development/frontend/react/react19/AssetLoading.md",
  },
  "document-metadata": {
    fileName: "DocumentMetadata.md",
    filePath: "note/development/frontend/react/react19/DocumentMetadata.md",
  },
  "ref-as-prop": {
    fileName: "RefAsProp.md",
    filePath: "note/development/frontend/react/react19/RefAsProp.md",
  },

  // Ecosystem
  "react-router": {
    fileName: "ReactRouter.md",
    filePath: "note/development/frontend/react/ecosystem/ReactRouter.md",
  },
  "data-fetching-with-tanstack-query": {
    fileName: "TanstackQuery.md",
    filePath: "note/development/frontend/react/ecosystem/TanstackQuery.md",
  },
  "styling-approaches": {
    fileName: "Styling.md",
    filePath: "note/development/frontend/react/ecosystem/Styling.md",
  },
  "testing-with-rtl": {
    fileName: "RTL.md",
    filePath: "note/development/frontend/react/ecosystem/RTL.md",
  },

  // Best Practices
  "project-structure": {
    fileName: "ProjectStructure.md",
    filePath: "note/development/frontend/react/best-practices/ProjectStructure.md",
  },
  "error-boundaries": {
    fileName: "ErrorBoundaries.md",
    filePath: "note/development/frontend/react/best-practices/ErrorBoundaries.md",
  },
  accessibility: {
    fileName: "Accessibility.md",
    filePath: "note/development/frontend/react/best-practices/Accessibility.md",
  },
  "typescript-with-react": {
    fileName: "TypeScript.md",
    filePath: "note/development/frontend/react/best-practices/TypeScript.md",
  },
};

export default reactjsFileMap;