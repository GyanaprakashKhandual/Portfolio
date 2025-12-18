import Sidebar from "@/app/components/assets/Sidebar";

export const metadata = {
    title: "Gyan | Skills",
    description: "This is the Portfolio Skills Section",
};

export default function SkillsLayout({ children }) {
    return (
        <div className="flex w-full min-h-screen max-h-15">
            {/* Sidebar - fixed width */}
            <div className="flex-shrink-0">
                <Sidebar />
            </div>

            {/* Main content - takes remaining space */}
            <main className="flex-1 w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}