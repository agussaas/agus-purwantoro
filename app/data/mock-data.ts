import { UserProfile } from "../types";

export const mockUserProfile: UserProfile = {
  name: "Agus Purwantoro",
  bio: "Purwantoro.com",
  avatar: "/images/avatar.png",
  links: [
    {
      id: "1",
      title: "Flippa",
      url: "https://flippa.com/users/3635791",
      icon: "flippa",
      order: 1,
      isActive: true,
    },
    {
      id: "2",
      title: "Blog",
      url: "https://blog.aguspurwantoro.com",
      icon: "blog",
      order: 2,
      isActive: true,
    },
    {
      id: "3",
      title: "Contact Me",
      url: "mailto:hello@aguspurwantoro.com",
      icon: "mail",
      order: 3,
      isActive: true,
    },
  ],
  socialLinks: [
    {
      id: "s1",
      platform: "X",
      url: "https://x.com/agussaas",
      icon: "x",
    },
    {
      id: "s2",
      platform: "GitHub",
      url: "https://github.com/agussaas",
      icon: "github",
    },
    {
      id: "s3",
      platform: "Threads",
      url: "https://threads.net/@saasagus",
      icon: "threads",
    },
  ],
};
