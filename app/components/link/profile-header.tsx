"use client"

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileHeaderProps {
  name: string
  bio: string
  avatar: string
}

export function ProfileHeader({ name, bio, avatar }: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="flex flex-col items-center text-center mb-8">
      <Avatar className="h-24 w-24 mb-4">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-muted-foreground mt-2 max-w-md">{bio}</p>
    </div>
  )
}
