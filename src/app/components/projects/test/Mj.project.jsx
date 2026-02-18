import { ExternalLink, Github, CheckCircle } from "lucide-react";

export const projectMeta = {
  slug: "mega-jewelers",
  title: "Mega Jewelers",
  shortDesc:
    "Comprehensive QA testing & automation for e-commerce jewelry management platform",
  description:
    "End-to-end testing solution for MegaJewelers - a complete e-commerce platform for jewelry business with inventory management, access control, and integrated sales management system.",
  category: "Testing",
  githubUrl:
    "https://github.com/GyanaprakashKhandual/Mega-Jewelers-Automation-Test.git",
  techStack: [
    "Selenium",
    "Cucumber",
    "BDD",
    "Page Object Model",
    "Artillery",
    "PyTest",
    "JSON",
    "HTML/CSS",
    "JavaScript",
    "Google Sheets",
    "Zoho Sheets",
    "Zoho Workspace",
  ],
};

export default function MegaJewelersProject() {
  const testingTypes = [
    "Manual Functional Testing",
    "Automation Functional Testing",
    "API Testing with PyTest",
    "Performance Testing with Artillery",
    "End-to-End Testing",
    "Regression Testing",
    "Data Management Testing",
    "Access Control Testing",
  ];

  const highlights = [
    "BDD with Cucumber Framework",
    "Selenium Automation",
    "Page Object Model Architecture",
    "PyTest API Testing",
    "Artillery Performance Testing",
    "Custom HTML/CSS/JS Reports",
    "Inventory Management Testing",
    "Sales Pipeline Validation",
  ];

  const ecommerceFeatures = [
    "Product Catalog Management",
    "Inventory & Stock Management",
    "Shopping Cart & Checkout",
    "Order Management System",
    "Payment Processing",
    "User Account Management",
    "Access Control & Permissions",
    "Data Storage & Security",
    "Customer Management",
    "Sales Reporting & Analytics",
    "Search & Filtering System",
    "Product Recommendations",
  ];

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          {projectMeta.title}
        </h2>
        <p className="leading-7 text-gray-700 dark:text-slate-300">
          {projectMeta.description}
        </p>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Full Description */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Overview
        </h3>
        <div className="space-y-4 leading-7 text-gray-700 dark:text-slate-300">
          <p>
            MegaJewelers is a complete e-commerce platform designed specifically
            for jewelry businesses. I led comprehensive QA testing across all
            layers of the application, ensuring reliable functionality for
            product management, inventory control, and seamless sales
            operations.
          </p>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Coverage:
            </h4>
            <ul className="ml-4 space-y-2">
              {testingTypes.map((test, i) => (
                <li key={i}>• {test}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              E-commerce Features Tested:
            </h4>
            <ul className="ml-4 space-y-2">
              {ecommerceFeatures.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Technologies & Frameworks:
            </h4>
            <ul className="ml-4 space-y-2">
              <li>• Selenium - Robust web automation framework</li>
              <li>• Cucumber & BDD - Behavior-driven testing approach</li>
              <li>
                • Page Object Model - Industry-standard automation architecture
              </li>
              <li>• PyTest - Comprehensive API testing framework</li>
              <li>• Artillery - Load and performance testing tool</li>
              <li>
                • Custom HTML/CSS/JavaScript Reports - Interactive test result
                dashboards
              </li>
              <li>• JSON - Test data and configuration management</li>
              <li>
                • Google Sheets & Zoho Sheets - Centralized test data repository
              </li>
              <li>• Zoho Workspace - Integrated testing environment</li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            The testing framework is built on enterprise-grade practices
            including BDD with Cucumber, Page Object Model architecture for
            maintainability, and comprehensive API testing with PyTest.
            Performance testing with Artillery ensures the platform can handle
            peak loads during high-traffic periods. Custom HTML/CSS/JavaScript
            reports provide stakeholders with clear, actionable insights into
            test execution and quality metrics.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Highlights */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Key Testing Features
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-slate-300">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Tech Stack */}
      <section>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {projectMeta.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Core Domains */}
      <section>
        <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
          Business Domains Tested
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Inventory Management",
              desc: "Stock levels, product variants, SKU tracking",
            },
            {
              title: "Sales Management",
              desc: "Order processing, fulfillment, sales analytics",
            },
            {
              title: "Data Management",
              desc: "Secure storage, data integrity, backups",
            },
            {
              title: "Access Control",
              desc: "User roles, permissions, security policies",
            },
            {
              title: "Payment Processing",
              desc: "Transaction validation, security compliance",
            },
            {
              title: "Performance & Load",
              desc: "Scalability, response times, concurrent users",
            },
          ].map((domain) => (
            <div
              key={domain.title}
              className="p-4 bg-white border border-gray-200 rounded-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                {domain.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {domain.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 dark:border-slate-800" />

      {/* Links */}
      <section className="flex flex-wrap gap-3">
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Automation Tests
        </a>
        <a
          href={projectMeta.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          Test Repository
        </a>
      </section>
    </div>
  );
}
