const sidebarItems = {
  cypress: [
    {
      id: "cy-1",
      label: "Getting Started",
      children: [
        { id: "cy-1-1", label: "Introduction to Cypress" },
        { id: "cy-1-2", label: "Installation & Setup" },
        { id: "cy-1-3", label: "Your First Test" },
        { id: "cy-1-4", label: "Project Structure" },
      ],
    },
    {
      id: "cy-2",
      label: "Core Concepts",
      children: [
        { id: "cy-2-1", label: "Test Runner" },
        { id: "cy-2-2", label: "Commands & Queries" },
        { id: "cy-2-3", label: "Assertions" },
        { id: "cy-2-4", label: "Aliases" },
        { id: "cy-2-5", label: "Retry-ability" },
      ],
    },
    {
      id: "cy-3",
      label: "Writing Tests",
      children: [
        { id: "cy-3-1", label: "Describing Test Suites" },
        { id: "cy-3-2", label: "Hooks: before / after" },
        { id: "cy-3-3", label: "Interacting with Elements" },
        { id: "cy-3-4", label: "Form Handling" },
        { id: "cy-3-5", label: "File Uploads" },
        {
          id: "cy-3-6",
          label: "Network Requests",
          children: [
            { id: "cy-3-6-1", label: "Intercept & Stub" },
            { id: "cy-3-6-2", label: "Waiting for Requests" },
            { id: "cy-3-6-3", label: "Fixtures" },
          ],
        },
      ],
    },
    {
      id: "cy-4",
      label: "Configuration",
      children: [
        { id: "cy-4-1", label: "cypress.config.js" },
        { id: "cy-4-2", label: "Environment Variables" },
        { id: "cy-4-3", label: "Viewport & Browser Options" },
        { id: "cy-4-4", label: "Timeouts" },
      ],
    },
    {
      id: "cy-5",
      label: "Advanced Topics",
      children: [
        { id: "cy-5-1", label: "Custom Commands" },
        { id: "cy-5-2", label: "Page Object Model" },
        { id: "cy-5-3", label: "Component Testing" },
        { id: "cy-5-4", label: "API Testing with Cypress" },
        { id: "cy-5-5", label: "Visual Testing" },
        { id: "cy-5-6", label: "Plugins & Extensions" },
      ],
    },
    {
      id: "cy-6",
      label: "CI/CD Integration",
      children: [
        { id: "cy-6-1", label: "GitHub Actions" },
        { id: "cy-6-2", label: "GitLab CI" },
        { id: "cy-6-3", label: "Jenkins" },
        { id: "cy-6-4", label: "Cypress Cloud (Dashboard)" },
        { id: "cy-6-5", label: "Parallelization" },
      ],
    },
    {
      id: "cy-7",
      label: "Best Practices",
      children: [
        { id: "cy-7-1", label: "Selecting Elements" },
        { id: "cy-7-2", label: "Avoiding Anti-patterns" },
        { id: "cy-7-3", label: "Test Isolation" },
        { id: "cy-7-4", label: "Organizing Large Test Suites" },
      ],
    },
    {
      id: "cy-8",
      label: "API Reference",
      children: [
        { id: "cy-8-1", label: "cy.visit()" },
        { id: "cy-8-2", label: "cy.get()" },
        { id: "cy-8-3", label: "cy.intercept()" },
        { id: "cy-8-4", label: "cy.request()" },
        { id: "cy-8-5", label: "cy.fixture()" },
        { id: "cy-8-6", label: "cy.wrap()" },
      ],
    },
  ],

  "rest-assured": [
    {
      id: "ra-1",
      label: "Getting Started",
      children: [
        { id: "ra-1-1", label: "Introduction to REST Assured" },
        { id: "ra-1-2", label: "Maven & Gradle Setup" },
        { id: "ra-1-3", label: "Your First API Test" },
        { id: "ra-1-4", label: "Project Structure" },
      ],
    },
    {
      id: "ra-2",
      label: "Core Concepts",
      children: [
        { id: "ra-2-1", label: "Given / When / Then" },
        { id: "ra-2-2", label: "Request Specification" },
        { id: "ra-2-3", label: "Response Validation" },
        { id: "ra-2-4", label: "Base URI & Base Path" },
        { id: "ra-2-5", label: "Logging Requests & Responses" },
      ],
    },
    {
      id: "ra-3",
      label: "Making Requests",
      children: [
        { id: "ra-3-1", label: "GET Requests" },
        { id: "ra-3-2", label: "POST Requests" },
        { id: "ra-3-3", label: "PUT & PATCH Requests" },
        { id: "ra-3-4", label: "DELETE Requests" },
        { id: "ra-3-5", label: "Query & Path Parameters" },
        { id: "ra-3-6", label: "Headers & Cookies" },
        {
          id: "ra-3-7",
          label: "Request Body",
          children: [
            { id: "ra-3-7-1", label: "JSON Body" },
            { id: "ra-3-7-2", label: "XML Body" },
            { id: "ra-3-7-3", label: "Form Parameters" },
            { id: "ra-3-7-4", label: "Multipart / File Upload" },
          ],
        },
      ],
    },
    {
      id: "ra-4",
      label: "Response Handling",
      children: [
        { id: "ra-4-1", label: "Status Code Assertion" },
        { id: "ra-4-2", label: "JSON Path Extraction" },
        { id: "ra-4-3", label: "XML Path Extraction" },
        { id: "ra-4-4", label: "Hamcrest Matchers" },
        { id: "ra-4-5", label: "Deserialization with POJO" },
      ],
    },
    {
      id: "ra-5",
      label: "Authentication",
      children: [
        { id: "ra-5-1", label: "Basic Auth" },
        { id: "ra-5-2", label: "Bearer Token / JWT" },
        { id: "ra-5-3", label: "OAuth 2.0" },
        { id: "ra-5-4", label: "API Key Auth" },
        { id: "ra-5-5", label: "Digest Auth" },
      ],
    },
    {
      id: "ra-6",
      label: "Advanced Topics",
      children: [
        { id: "ra-6-1", label: "Request & Response Specification" },
        { id: "ra-6-2", label: "Filters & Interceptors" },
        { id: "ra-6-3", label: "Schema Validation (JSON / XML)" },
        { id: "ra-6-4", label: "SSL & HTTPS" },
        { id: "ra-6-5", label: "Proxy Configuration" },
        { id: "ra-6-6", label: "Async & Polling" },
      ],
    },
    {
      id: "ra-7",
      label: "Framework Integration",
      children: [
        { id: "ra-7-1", label: "TestNG Integration" },
        { id: "ra-7-2", label: "JUnit 5 Integration" },
        { id: "ra-7-3", label: "Allure Reports" },
        { id: "ra-7-4", label: "Extent Reports" },
        {
          id: "ra-7-5",
          label: "Data Driven Testing",
          children: [
            { id: "ra-7-5-1", label: "Excel Data Provider" },
            { id: "ra-7-5-2", label: "JSON Data Provider" },
            { id: "ra-7-5-3", label: "CSV Data Provider" },
          ],
        },
      ],
    },
    {
      id: "ra-8",
      label: "CI/CD Integration",
      children: [
        { id: "ra-8-1", label: "GitHub Actions" },
        { id: "ra-8-2", label: "Jenkins Pipeline" },
        { id: "ra-8-3", label: "Maven Surefire Plugin" },
        { id: "ra-8-4", label: "Docker Setup" },
      ],
    },
    {
      id: "ra-9",
      label: "Best Practices",
      children: [
        { id: "ra-9-1", label: "Reusable Specifications" },
        { id: "ra-9-2", label: "Environment Configuration" },
        { id: "ra-9-3", label: "Test Isolation" },
        { id: "ra-9-4", label: "Error Handling & Debugging" },
      ],
    },
  ],
};

export default sidebarItems;