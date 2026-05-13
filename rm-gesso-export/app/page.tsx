import { Navbar }       from "@/components/layout/Navbar";
import { Footer }       from "@/components/layout/Footer";
import { Hero }         from "@/components/sections/Hero";
import { Stats }        from "@/components/sections/Stats";
import { Services }     from "@/components/sections/Services";
import { About }        from "@/components/sections/About";
import { Process }      from "@/components/sections/Process";
import { Contact }      from "@/components/sections/Contact";
import { WhatsAppFab }  from "@/components/ui/WhatsAppFab";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
