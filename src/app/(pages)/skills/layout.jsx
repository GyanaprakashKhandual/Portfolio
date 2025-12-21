
import TechSkillsSidebar from "@/app/components/assets/Skill.sidebar";

export default function SkillsLayout({ children }) {

  return (
    <div className="flex min-h-screen mt-20 bg-white border-t border-gray-200 dark:bg-slate-950">
      <TechSkillsSidebar/>
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
