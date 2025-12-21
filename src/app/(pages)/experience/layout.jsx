import ExperienceSidebar from "@/app/components/assets/Experience.sidebar";



export default function ExperienceLayout({ children }) {
    
  return (
    <div className="flex min-h-screen mt-20 bg-white border-t border-gray-200 dark:bg-slate-950">
      <ExperienceSidebar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
