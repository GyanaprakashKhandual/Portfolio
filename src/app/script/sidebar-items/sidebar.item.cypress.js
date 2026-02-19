const cypressSidebarItems = [
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
];

export default cypressSidebarItems;