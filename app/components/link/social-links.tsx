"use client"

import React from "react"
import { SocialLink } from "@/app/types"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faGithub, faThreads } from "@fortawesome/free-brands-svg-icons"

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "twitter":
      case "x":
        return <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
      case "github":
        return <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
      case "threads":
        return <FontAwesomeIcon icon={faThreads} className="h-5 w-5" />
      default:
        return null
    }
  }

  // Filter only the platforms we want to display
  const filteredLinks = socialLinks.filter(link => 
    ["twitter", "x", "github", "threads"].includes(link.icon.toLowerCase())
  )

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {filteredLinks.map((link) => (
        <Button
          key={link.id}
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-muted-foreground/20"
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
            {getIcon(link.icon)}
          </a>
        </Button>
      ))}
    </div>
  )
}
