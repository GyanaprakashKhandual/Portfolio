import { ExternalLink, Github, CheckCircle } from "lucide-react";

export const projectMeta = {
  slug: "resolution-pro",
  title: "Resolution Pro",
  shortDesc:
    "Comprehensive QA testing & automation for document sharing & meeting tracking app",
  description:
    "Multi-layered testing solution for Resolution Pro - a document sharing and meeting tracking application with AI integration, user management, and access control.",
  category: "Testing",
  githubUrl:
    "https://github.com/GyanaprakashKhandual/Resolution-Pro-Automation-Test.git",
  techStack: [
    "Playwright",
    "Cucumber",
    "BDD",
    "Rest Assured",
    "Page Object Model",
    "Google Sheets",
    "Zoho Sheets",
    "Custom HTML Report",
    "JSON",
    "Cafetest",
    "Bug Tracker",
    "Ledge Meter",
  ],
};

export default function ResolutionProProject() {
  const testingTypes = [
    "Manual Testing",
    "Automation Functional Testing",
    "Manual Functional Testing",
    "Automation API Testing",
    "Automation Performance Testing",
    "Regression Testing",
    "Sanity Testing",
    "End-to-End Testing",
    "User Acceptance Testing (UAT)",
  ];

  const highlights = [
    "BDD with Cucumber Framework",
    "Page Object Model Architecture",
    "Playwright Automation",
    "Rest Assured API Testing",
    "Custom HTML Reports",
    "User Management & Access Control",
    "Real-time Collaboration Testing",
    "AI Integration Testing",
  ];

  const features = [
    "Document Sharing & Tracking",
    "Multi-client Member Integration",
    "Board & Shareholder Access",
    "Meeting Tracking & Management",
    "User Workspace Integration",
    "AI-Powered Features",
    "Advanced Reporting Dashboard",
    "Ledger & Audit Tracking",
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
            Resolution Pro is a comprehensive document sharing and meeting
            tracking application integrated with AI capabilities, designed for
            seamless collaboration across organizational hierarchies. I led the
            complete QA strategy and automation testing framework, performing
            manual and automated testing across all layers of the application.
          </p>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Scope:
            </h4>
            <ul className="ml-4 space-y-2">
              {testingTypes.map((test, i) => (
                <li key={i}>• {test}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Core Features Tested:
            </h4>
            <ul className="ml-4 space-y-2">
              {features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white">
              Testing Technologies & Frameworks:
            </h4>
            <ul className="ml-4 space-y-2">
              <li>• Playwright - Modern web automation framework</li>
              <li>• Cucumber & BDD - Behavior-driven testing approach</li>
              <li>
                • Page Object Model - Maintainable automation architecture
              </li>
              <li>• Rest Assured - API testing and validation</li>
              <li>
                • Custom HTML Reports - Comprehensive test result visualization
              </li>
              <li>• Google Sheets & Zoho Sheets - Test data management</li>
              <li>• Zoho Workspace - Test environment integration</li>
              <li>• JSON - Test configuration and data persistence</li>
              <li>• Cafetest & Bug Tracker - Defect management</li>
              <li>• Ledge Meter - Performance and audit tracking</li>
            </ul>
          </div>

          <p className="mt-4 font-semibold text-black dark:text-white">
            Additionally, I contributed to the product design process, ensuring
            the frontend user interface is intuitive, accessible, and seamlessly
            integrates with the complex backend systems. The testing framework
            is built on industry-standard BDD practices with Page Object Model
            architecture for maximum maintainability and scalability.
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
          {highlights.map((highlight, i) => (
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
          href="https://github.com/GyanaprakashKhandual/Resolution-Pro-Automation-Test.git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-opacity bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          Test Reports
        </a>
      </section>
    </div>
  );
}
