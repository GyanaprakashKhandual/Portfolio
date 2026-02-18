const fileMap = {
  cypress: {
    "introduction-to-cypress": {
      fileName: "Intro.md",
      filePath: "note/test/cypress/basic/Intro.md",
    },
    "installation-setup": {
      fileName: "Installation.md",
      filePath: "note/test/cypress/basic/Installation.md",
    },
    "your-first-test": {
      fileName: "FirstTest.md",
      filePath: "note/test/cypress/basic/FirstTest.md",
    },
    "project-structure": {
      fileName: "ProjectStructure.md",
      filePath: "note/test/cypress/basic/ProjectStructure.md",
    },
    "test-runner": {
      fileName: "TestRunner.md",
      filePath: "note/test/cypress/core/TestRunner.md",
    },
    "commands-queries": {
      fileName: "Commands.md",
      filePath: "note/test/cypress/core/Commands.md",
    },
    assertions: {
      fileName: "Assertions.md",
      filePath: "note/test/cypress/core/Assertions.md",
    },
    aliases: {
      fileName: "Aliases.md",
      filePath: "note/test/cypress/core/Aliases.md",
    },
    "retry-ability": {
      fileName: "Retry.md",
      filePath: "note/test/cypress/core/Retry.md",
    },
    "describing-test-suites": {
      fileName: "TestSuites.md",
      filePath: "note/test/cypress/writing/TestSuites.md",
    },
    "hooks-before-after": {
      fileName: "Hooks.md",
      filePath: "note/test/cypress/writing/Hooks.md",
    },
    "interacting-with-elements": {
      fileName: "Elements.md",
      filePath: "note/test/cypress/writing/Elements.md",
    },
    "form-handling": {
      fileName: "Forms.md",
      filePath: "note/test/cypress/writing/Forms.md",
    },
    "file-uploads": {
      fileName: "FileUploads.md",
      filePath: "note/test/cypress/writing/FileUploads.md",
    },
    "intercept-stub": {
      fileName: "Intercept.md",
      filePath: "note/test/cypress/network/Intercept.md",
    },
    "waiting-for-requests": {
      fileName: "Waiting.md",
      filePath: "note/test/cypress/network/Waiting.md",
    },
    fixtures: {
      fileName: "Fixtures.md",
      filePath: "note/test/cypress/network/Fixtures.md",
    },
    "cypressconfigjs": {
      fileName: "Config.md",
      filePath: "note/test/cypress/config/Config.md",
    },
    "environment-variables": {
      fileName: "EnvVars.md",
      filePath: "note/test/cypress/config/EnvVars.md",
    },
    "viewport-browser-options": {
      fileName: "Viewport.md",
      filePath: "note/test/cypress/config/Viewport.md",
    },
    timeouts: {
      fileName: "Timeouts.md",
      filePath: "note/test/cypress/config/Timeouts.md",
    },
    "custom-commands": {
      fileName: "CustomCommands.md",
      filePath: "note/test/cypress/advanced/CustomCommands.md",
    },
    "page-object-model": {
      fileName: "POM.md",
      filePath: "note/test/cypress/advanced/POM.md",
    },
    "component-testing": {
      fileName: "ComponentTesting.md",
      filePath: "note/test/cypress/advanced/ComponentTesting.md",
    },
    "api-testing-with-cypress": {
      fileName: "ApiTesting.md",
      filePath: "note/test/cypress/advanced/ApiTesting.md",
    },
    "visual-testing": {
      fileName: "VisualTesting.md",
      filePath: "note/test/cypress/advanced/VisualTesting.md",
    },
    "plugins-extensions": {
      fileName: "Plugins.md",
      filePath: "note/test/cypress/advanced/Plugins.md",
    },
    "github-actions": {
      fileName: "GitHubActions.md",
      filePath: "note/test/cypress/ci/GitHubActions.md",
    },
    "gitlab-ci": {
      fileName: "GitLabCI.md",
      filePath: "note/test/cypress/ci/GitLabCI.md",
    },
    jenkins: {
      fileName: "Jenkins.md",
      filePath: "note/test/cypress/ci/Jenkins.md",
    },
    "cypress-cloud-dashboard": {
      fileName: "CypressCloud.md",
      filePath: "note/test/cypress/ci/CypressCloud.md",
    },
    parallelization: {
      fileName: "Parallelization.md",
      filePath: "note/test/cypress/ci/Parallelization.md",
    },
    "selecting-elements": {
      fileName: "SelectingElements.md",
      filePath: "note/test/cypress/best-practices/SelectingElements.md",
    },
    "avoiding-anti-patterns": {
      fileName: "AntiPatterns.md",
      filePath: "note/test/cypress/best-practices/AntiPatterns.md",
    },
    "test-isolation": {
      fileName: "TestIsolation.md",
      filePath: "note/test/cypress/best-practices/TestIsolation.md",
    },
    "organizing-large-test-suites": {
      fileName: "LargeSuites.md",
      filePath: "note/test/cypress/best-practices/LargeSuites.md",
    },
  },

  "rest-assured": {
    "introduction-to-rest-assured": {
      fileName: "Intro.md",
      filePath: "note/test/rest-assured/basic/Intro.md",
    },
    "maven-gradle-setup": {
      fileName: "Setup.md",
      filePath: "note/test/rest-assured/basic/Setup.md",
    },
    "your-first-api-test": {
      fileName: "FirstTest.md",
      filePath: "note/test/rest-assured/basic/FirstTest.md",
    },
    "project-structure": {
      fileName: "ProjectStructure.md",
      filePath: "note/test/rest-assured/basic/ProjectStructure.md",
    },
    "given-when-then": {
      fileName: "GivenWhenThen.md",
      filePath: "note/test/rest-assured/core/GivenWhenThen.md",
    },
    "request-specification": {
      fileName: "RequestSpec.md",
      filePath: "note/test/rest-assured/core/RequestSpec.md",
    },
    "response-validation": {
      fileName: "ResponseValidation.md",
      filePath: "note/test/rest-assured/core/ResponseValidation.md",
    },
    "base-uri-base-path": {
      fileName: "BaseUri.md",
      filePath: "note/test/rest-assured/core/BaseUri.md",
    },
    "logging-requests-responses": {
      fileName: "Logging.md",
      filePath: "note/test/rest-assured/core/Logging.md",
    },
    "get-requests": {
      fileName: "GetRequests.md",
      filePath: "note/test/rest-assured/requests/GetRequests.md",
    },
    "post-requests": {
      fileName: "PostRequests.md",
      filePath: "note/test/rest-assured/requests/PostRequests.md",
    },
    "put-patch-requests": {
      fileName: "PutPatch.md",
      filePath: "note/test/rest-assured/requests/PutPatch.md",
    },
    "delete-requests": {
      fileName: "DeleteRequests.md",
      filePath: "note/test/rest-assured/requests/DeleteRequests.md",
    },
    "query-path-parameters": {
      fileName: "Parameters.md",
      filePath: "note/test/rest-assured/requests/Parameters.md",
    },
    "headers-cookies": {
      fileName: "HeadersCookies.md",
      filePath: "note/test/rest-assured/requests/HeadersCookies.md",
    },
    "json-body": {
      fileName: "JsonBody.md",
      filePath: "note/test/rest-assured/body/JsonBody.md",
    },
    "xml-body": {
      fileName: "XmlBody.md",
      filePath: "note/test/rest-assured/body/XmlBody.md",
    },
    "form-parameters": {
      fileName: "FormParams.md",
      filePath: "note/test/rest-assured/body/FormParams.md",
    },
    "multipart-file-upload": {
      fileName: "FileUpload.md",
      filePath: "note/test/rest-assured/body/FileUpload.md",
    },
    "status-code-assertion": {
      fileName: "StatusCode.md",
      filePath: "note/test/rest-assured/response/StatusCode.md",
    },
    "json-path-extraction": {
      fileName: "JsonPath.md",
      filePath: "note/test/rest-assured/response/JsonPath.md",
    },
    "xml-path-extraction": {
      fileName: "XmlPath.md",
      filePath: "note/test/rest-assured/response/XmlPath.md",
    },
    "hamcrest-matchers": {
      fileName: "Hamcrest.md",
      filePath: "note/test/rest-assured/response/Hamcrest.md",
    },
    "deserialization-with-pojo": {
      fileName: "POJO.md",
      filePath: "note/test/rest-assured/response/POJO.md",
    },
    "basic-auth": {
      fileName: "BasicAuth.md",
      filePath: "note/test/rest-assured/auth/BasicAuth.md",
    },
    "bearer-token-jwt": {
      fileName: "BearerToken.md",
      filePath: "note/test/rest-assured/auth/BearerToken.md",
    },
    "oauth-20": {
      fileName: "OAuth2.md",
      filePath: "note/test/rest-assured/auth/OAuth2.md",
    },
    "api-key-auth": {
      fileName: "ApiKey.md",
      filePath: "note/test/rest-assured/auth/ApiKey.md",
    },
    "digest-auth": {
      fileName: "DigestAuth.md",
      filePath: "note/test/rest-assured/auth/DigestAuth.md",
    },
  },
  reactjs: {
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
    "usestate": {
      fileName: "UseState.md",
      filePath: "note/development/frontend/react/hooks/UseState.md",
    },
    "useeffect": {
      fileName: "UseEffect.md",
      filePath: "note/development/frontend/react/hooks/UseEffect.md",
    },
    "usecontext": {
      fileName: "UseContext.md",
      filePath: "note/development/frontend/react/hooks/UseContext.md",
    },
    "usereducer": {
      fileName: "UseReducer.md",
      filePath: "note/development/frontend/react/hooks/UseReducer.md",
    },
    "useref": {
      fileName: "UseRef.md",
      filePath: "note/development/frontend/react/hooks/UseRef.md",
    },
    "usememo": {
      fileName: "UseMemo.md",
      filePath: "note/development/frontend/react/hooks/UseMemo.md",
    },
    "usecallback": {
      fileName: "UseCallback.md",
      filePath: "note/development/frontend/react/hooks/UseCallback.md",
    },
    "uselayouteffect": {
      fileName: "UseLayoutEffect.md",
      filePath: "note/development/frontend/react/hooks/UseLayoutEffect.md",
    },
    "useimperativehandle": {
      fileName: "UseImperativeHandle.md",
      filePath: "note/development/frontend/react/hooks/UseImperativeHandle.md",
    },
    "useid": {
      fileName: "UseId.md",
      filePath: "note/development/frontend/react/hooks/UseId.md",
    },
    "usetransition": {
      fileName: "UseTransition.md",
      filePath: "note/development/frontend/react/hooks/UseTransition.md",
    },
    "usedeferredvalue": {
      fileName: "UseDeferredValue.md",
      filePath: "note/development/frontend/react/hooks/UseDeferredValue.md",
    },
    "usesyncexternalstore": {
      fileName: "UseSyncExternalStore.md",
      filePath: "note/development/frontend/react/hooks/UseSyncExternalStore.md",
    },
    "useinsertioneffect": {
      fileName: "UseInsertionEffect.md",
      filePath: "note/development/frontend/react/hooks/UseInsertionEffect.md",
    },
    // React 19 New Hooks
    "useactionstate": {
      fileName: "UseActionState.md",
      filePath: "note/development/frontend/react/hooks/UseActionState.md",
    },
    "useformstatus": {
      fileName: "UseFormStatus.md",
      filePath: "note/development/frontend/react/hooks/UseFormStatus.md",
    },
    "useoptimistic": {
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
    "virtualization": {
      fileName: "Virtualization.md",
      filePath: "note/development/frontend/react/performance/Virtualization.md",
    },
    "profiling": {
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
    "accessibility": {
      fileName: "Accessibility.md",
      filePath: "note/development/frontend/react/best-practices/Accessibility.md",
    },
    "typescript-with-react": {
      fileName: "TypeScript.md",
      filePath: "note/development/frontend/react/best-practices/TypeScript.md",
    },
  },
};

export default fileMap;