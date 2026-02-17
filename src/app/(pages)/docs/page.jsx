import TabBar from "@/app/components/assets/Tabbar";
import DocPage from "@/app/pages/Doc.page";

export default function DocsPage() {
  const tabs = [
  { label: "Home", value: "home" },
  { label: "C", value: "c" },
  { label: "C++", value: "c++" },
  { label: "C#", value: "c#" },
  { label: "Java", value: "java" },
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "GO", value: "go" },
  { label: "PHP", value: "php" },
  { label: "NodeJS", value: "nodejs" },
  { label: "ExpressJS", value: "expressjs" },
  { label: "RestAPI", value: "restapi" },
  { label: "GraphQL", value: "graphql" },
  { label: "Spring Boot", value: "spring-boot" },
  { label: "Security", value: "security" },
  { label: "MongoDB", value: "mongodb" },
  { label: "MySQL", value: "mysql" },
  { label: "PostgreSQL", value: "postgresql" },
  { label: "Redis", value: "redis" },
  { label: "ReactJS", value: "reactjs" },
  { label: "NextJS", value: "nextjs" },
  { label: "VueJS", value: "vuejs" },
  { label: "AngularJS", value: "angularjs" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "Flutter", value: "flutter" },
  { label: "Kotlin", value: "kotlin" },
  { label: "Cypress", value: "cypress" },
  { label: "Selenium", value: "selenium" },
  { label: "Playwright", value: "playwright" },
  { label: "Appium", value: "appium" },
  { label: "Rest Assured", value: "rest-assured" },
];
  return (
    <div>
       <TabBar tabs={tabs} useQueryParams={false} />
      <DocPage/>
    </div>
  );
}