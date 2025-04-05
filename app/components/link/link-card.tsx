"use client"

import React from "react"
import { Link } from "@/app/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faWindowMaximize,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons"
import { 
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"

interface LinkCardProps {
  link: Link
  index: number
}

export function LinkCard({ link, index }: LinkCardProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "flippa":
        return <FontAwesomeIcon icon={faWindowMaximize} className="mr-2 h-4 w-4" />
      case "blog":
        return <FontAwesomeIcon icon={faWordpress} className="mr-2 h-4 w-4" />
      case "mail":
        return <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
      default:
        return <FontAwesomeIcon icon={faLink} className="mr-2 h-4 w-4" />
    }
  }

  return (
    <Card 
      className="w-full overflow-hidden transition-all hover:shadow-md hover:scale-105"
      style={{
        animation: `fadeIn 0.5s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      <CardContent className="p-0">
        <Button
          asChild
          variant="ghost"
          className="w-full rounded-md p-4 text-lg font-medium"
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            {getIcon(link.icon)}
            {link.title}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
