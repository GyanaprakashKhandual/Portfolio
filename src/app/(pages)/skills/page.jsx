import SkillPage from "@/app/pages/Skill.page";

export const metadata = {
  title: "Gyan | Skills",
  description: "This page is all about my skill showing",
};

function page() {
  return (
    <div className="mt-15">
      <SkillPage />
    </div>
  );
}

export default page;
