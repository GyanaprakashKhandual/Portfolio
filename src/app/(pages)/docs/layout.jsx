import TabBar from "@/app/components/assets/Tabbar";

export default function DocLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-black transition-colors duration-300 bg-white dark:bg-black dark:text-white">
        <TabBar
          tabs={[
            "Home",
            "C",
            "C++",
            "C#",
            "Java",
            "JavaScript",
            "TypeScript",
            "Python",
            "GO",
            "PHP",
            "NodeJS",
            "ExpressJS",
            "RestAPI",
            "GraphQL",
            "Spring Boot",
            "Security",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "ReactJS",
            "NextJS",
            "VueJS",
            "AngularJS",
            "HTML",
            "CSS",
            "Flutter",
            "Kotlin",
            "Cypress",
            "Selenium",
            "Playwright",
            "Appium",
            "Rest Assured"
          ]}
        />

        {children}
      </body>
    </html>
  );
}