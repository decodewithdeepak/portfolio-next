import Image from "next/image";
import GridPattern from "@/components/ui/grid-pattern";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans min-h-screen relative bg-background text-foreground">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />

      {/* Theme Toggle Button - Fixed Position */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content - Twitter-like narrow column */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Deepak Modi</h1>
          <p className="text-lg text-foreground/80 mb-4">Full Stack Developer</p>
          <p className="text-foreground/70 mb-6">
            Hey there! 👋 I'm a final-year CS student who somehow turned a 'Hello World' tutorial into a full-blown coding obsession. I build web apps, solve algorithmic puzzles, and help fellow developers grow.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="https://github.com/decodewithdeepak" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/deepakmodi1" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/deepakmodi" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="mailto:deepakmodi8676@gmail.com" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="https://resume.deepakmodi.tech/?portfolio" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <FileText className="w-5 h-5" />
            </Link>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <div className="space-y-3 text-foreground/70">
            <p>A guy who fell in love with code and can't stop building stuff. I get excited when I solve tricky bugs (yeah, I'm that weird 😅) and I'm always learning something new.</p>
            <p>I turn coffee into web apps ☕ → 💻 and love cracking algorithmic puzzles - like sudoku but with rewards.</p>
            <p>My goal is to build products people actually need, not just GitHub flexes.</p>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-lg mb-1">NotesNeo</h3>
              <p className="text-foreground/70 mb-2">A platform where students can find and share quality notes by subject. No more "does anyone have notes?" in group chats 😄</p>
              <div className="flex space-x-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">Firebase</span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-lg mb-1">NeoCode</h3>
              <p className="text-foreground/70 mb-2">An interactive coding platform where learning DSA doesn't feel like torture. Clean UI, proper explanations, and a progress tracker.</p>
              <div className="flex space-x-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">MongoDB</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">Prisma</span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-lg mb-1">NeoCompiler</h3>
              <p className="text-foreground/70 mb-2">Online compiler with multiple languages, themes, and AI suggestions when you're stuck.</p>
              <div className="flex space-x-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">shadcn/ui</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded">Prisma</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              View all projects →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Deepak Modi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}