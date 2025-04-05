import { ProfileHeader } from "@/app/components/link/profile-header"
import { LinkCard } from "@/app/components/link/link-card"
import { SocialLinks } from "@/app/components/link/social-links"
import { ThemeToggle } from "@/app/components/theme-toggle"
import { mockUserProfile } from "@/app/data/mock-data"

export default function Home() {
  const { name, bio, avatar, links, socialLinks } = mockUserProfile

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-end p-4">
        <ThemeToggle />
      </header>
      
      <main className="flex flex-col items-center justify-center flex-1 px-4 pb-12 max-w-md mx-auto w-full">
        <ProfileHeader name={name} bio={bio} avatar={avatar} />
        
        <div className="w-full space-y-4">
          {links
            .filter(link => link.isActive)
            .sort((a, b) => a.order - b.order)
            .map((link, index) => (
              <LinkCard key={link.id} link={link} index={index} />
            ))}
        </div>
        
        <SocialLinks socialLinks={socialLinks} />
      </main>
      
      <footer className="w-full text-center py-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Agus Purwantoro</p>
      </footer>
    </div>
  )
}
