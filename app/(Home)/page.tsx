import Hero from "./_components/Hero";
import Services from "./_components/servises";
import Chooses from "./_components/Chooses";
import Companies from "./_components/Companies";
import OurClient from "./_components/OurClients";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Services />
      <Chooses />
    {/* <OurTeam /> */}
      <OurClient />
      <div className="p-24 md:hidden"></div>
    </>
  );
}
