import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans selection:bg-stone-100 pb-20">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <footer className="max-w-2xl mx-auto px-6 py-12 text-center text-xs text-stone-400 font-mono">
        <p>© {new Date().getFullYear()} Akash Shah. Typeset in Inter & Manrope.</p>
      </footer>
    </main>
  )
}

export default App
