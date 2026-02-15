import HomePage from "./pages/Home.page";
export const metadata = {
  title: 'Gyan | Full Stack Developer',
  description: 'Welcome to my portfolio! I am a passionate full stack developer with expertise in React, Next.js, Node.js, and more. Explore my projects, skills, and experience.',
}

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}