import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import MyApproach from "@/components/MyApproach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="mx-w-7xl w-full">
        <FloatingNav navItems={navItems}/>

        <Hero />
        
        <Grid />

        <Projects />

        <Clients />

        <Experience />

        <MyApproach />

        <Footer />
        
      </div>
    </main>
  );
}
