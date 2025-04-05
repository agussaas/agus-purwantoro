export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
  order: number;
  isActive: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  links: Link[];
  socialLinks: SocialLink[];
}
