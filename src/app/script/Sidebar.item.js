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

  // ── ADDED: reactjs ──
  reactjs: [
    {
      id: "rj-1",
      label: "Getting Started",
      children: [
        { id: "rj-1-1", label: "Introduction to React" },
        { id: "rj-1-2", label: "JSX Fundamentals" },
        { id: "rj-1-3", label: "Components and Props" },
        { id: "rj-1-4", label: "Rendering Elements" },
        { id: "rj-1-5", label: "Event Handling" },
        { id: "rj-1-6", label: "Conditional Rendering" },
        { id: "rj-1-7", label: "Lists and Keys" },
        { id: "rj-1-8", label: "Forms and Controlled Components" },
      ],
    },
    {
      id: "rj-2",
      label: "Hooks",
      children: [
        { id: "rj-2-1", label: "useState" },
        { id: "rj-2-2", label: "useEffect" },
        { id: "rj-2-3", label: "useContext" },
        { id: "rj-2-4", label: "useReducer" },
        { id: "rj-2-5", label: "useRef" },
        { id: "rj-2-6", label: "useMemo" },
        { id: "rj-2-7", label: "useCallback" },
        { id: "rj-2-8", label: "useLayoutEffect" },
        { id: "rj-2-9", label: "useImperativeHandle" },
        { id: "rj-2-10", label: "useId" },
        { id: "rj-2-11", label: "useTransition" },
        { id: "rj-2-12", label: "useDeferredValue" },
        { id: "rj-2-13", label: "useSyncExternalStore" },
        { id: "rj-2-14", label: "useInsertionEffect" },
        {
          id: "rj-2-15",
          label: "React 19 New Hooks",
          children: [
            { id: "rj-2-15-1", label: "useActionState" },
            { id: "rj-2-15-2", label: "useFormStatus" },
            { id: "rj-2-15-3", label: "useOptimistic" },
          ],
        },
      ],
    },
    {
      id: "rj-3",
      label: "Component Patterns",
      children: [
        { id: "rj-3-1", label: "Component Composition" },
        { id: "rj-3-2", label: "Higher Order Components" },
        { id: "rj-3-3", label: "Render Props" },
        { id: "rj-3-4", label: "Compound Components" },
        { id: "rj-3-5", label: "Custom Hooks" },
        { id: "rj-3-6", label: "Forwarding Refs" },
      ],
    },
    {
      id: "rj-4",
      label: "State Management",
      children: [
        { id: "rj-4-1", label: "Lifting State Up" },
        { id: "rj-4-2", label: "Context API" },
        { id: "rj-4-3", label: "State Management with Zustand" },
        { id: "rj-4-4", label: "State Management with Redux Toolkit" },
      ],
    },
    {
      id: "rj-5",
      label: "Performance",
      children: [
        { id: "rj-5-1", label: "React Memo" },
        { id: "rj-5-2", label: "Code Splitting" },
        { id: "rj-5-3", label: "Lazy and Suspense" },
        { id: "rj-5-4", label: "Virtualization" },
        { id: "rj-5-5", label: "Profiling" },
      ],
    },
    {
      id: "rj-6",
      label: "React 19 Features",
      children: [
        { id: "rj-6-1", label: "Server Components" },
        { id: "rj-6-2", label: "Server Actions" },
        { id: "rj-6-3", label: "Asset Loading" },
        { id: "rj-6-4", label: "Document Metadata" },
        { id: "rj-6-5", label: "Ref as Prop" },
      ],
    },
    {
      id: "rj-7",
      label: "Ecosystem",
      children: [
        { id: "rj-7-1", label: "React Router" },
        { id: "rj-7-2", label: "Data Fetching with TanStack Query" },
        { id: "rj-7-3", label: "Styling Approaches" },
        { id: "rj-7-4", label: "Testing with RTL" },
      ],
    },
    {
      id: "rj-8",
      label: "Best Practices",
      children: [
        { id: "rj-8-1", label: "Project Structure" },
        { id: "rj-8-2", label: "Error Boundaries" },
        { id: "rj-8-3", label: "Accessibility" },
        { id: "rj-8-4", label: "TypeScript with React" },
      ],
    },
  ],
};

export default sidebarItems;