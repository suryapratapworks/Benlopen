import { ThemeProvider } from 'next-themes';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Details } from './components/Details';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
          <Hero />
          <Features />
          <Process />
          <Details />
          <ContactUs />
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}