import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100 selection:bg-zinc-700/40 selection:text-white relative">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
