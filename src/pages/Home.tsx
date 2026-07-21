import Hero from "@/components/sections/Hero";
import LogoWall from "@/components/sections/LogoWall";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import CartDemo from "@/components/sections/CartDemo";
import Comparison from "@/components/sections/Comparison";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Architecture from "@/components/sections/Architecture";
import ExtensionDemo from "@/components/sections/ExtensionDemo";
import BusinessVision from "@/components/sections/BusinessVision";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import ChatAssistant from "@/components/sections/ChatAssistant";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-zinc-950 relative">
      
      {/* Premium Particles / Floating background effect */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 80%), radial-gradient(circle at 100% 0%, rgba(6, 95, 70, 0.08) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 w-full">
        <Hero />
        <LogoWall />
        <Features />
        <HowItWorks />
        <CartDemo />
        <Comparison />
        <Architecture />
        <DashboardPreview />
        <ExtensionDemo />
        <BusinessVision />
        <Contact />
        <CTA />
      </div>

      <ChatAssistant />
    </div>
  );
}
