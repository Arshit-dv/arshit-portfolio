import ChapterCover from '@/components/ChapterCover';
import ChapterAbout from '@/components/ChapterAbout';
import ChapterProjects from '@/components/ChapterProjects';
import ChapterSkills from '@/components/ChapterSkills';
import ChapterDirectory from '@/components/ChapterDirectory';
import ChapterContact from '@/components/ChapterContact';
import ChapterNav from '@/components/ChapterNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink relative">
      <ChapterNav />
      <ChapterCover />
      <ChapterAbout />
      <ChapterProjects />
      <ChapterSkills />
      <ChapterDirectory />
      <ChapterContact />
    </main>
  );
}
