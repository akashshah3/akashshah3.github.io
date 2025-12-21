import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Research } from "./components/Research";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";

function App() {
  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans selection:bg-stone-100 pb-20">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Research />
      <footer className="max-w-2xl mx-auto px-6 py-12 text-center text-xs text-stone-400 font-mono">
        <p>© {new Date().getFullYear()} Akash Shah. Typeset in Inter & Manrope.</p>
      </footer>
    </main>
  )
}

export default App
