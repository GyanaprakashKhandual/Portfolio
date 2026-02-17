/**
 * fileMap.js
 *
 * Maps  stack → sidebarItemSlug → { fileName, filePath }
 *
 * filePath is relative to src/app/ — used as query param for /api/docs?path=...
 * e.g. "note/test/cypress/basic/Intro.md"
 *      → GET /api/docs?path=note/test/cypress/basic/Intro.md
 *      → reads  src/app/note/test/cypress/basic/Intro.md
 */

const fileMap = {
  // ─── CYPRESS ────────────────────────────────────────────────────────────────
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

  // ─── REST ASSURED ────────────────────────────────────────────────────────────
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

  // ─── Add more stacks below ───────────────────────────────────────────────────
  // selenium: { ... },
  // playwright: { ... },
};

export default fileMap;