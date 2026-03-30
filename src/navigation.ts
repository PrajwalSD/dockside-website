import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Apps',
      links: [
        {
          text: 'Dockside for Mac',
          href: '/dockside-app',
        },
        {
          text: 'Resellers',
          href: '/resellers',
        },
      ],
    },
    {
      text: 'Contact',
	  href: '/contact'
    },
    {
      text: 'Blog',
	  href: getBlogPermalink()
    },
    {
      text: 'About Us',
	  href: '/about'
    }
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Resellers', href: getPermalink('/resellers') },
    { text: 'Integrations', href: getPermalink('/integrations') },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Blog', href: '/blog' },
    { text: 'Roadmap', href: '/roadmap' },
  ],
  connectLinks: [
    { text: 'Discord', href: 'https://discord.gg/vpqMjQns46', icon: 'tabler:brand-discord', ariaLabel: 'Join our Discord' },
    { text: 'hachipoo.apps@gmail.com', href: 'mailto:hachipoo.apps@gmail.com', icon: 'tabler:mail', ariaLabel: 'Email support' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/HachipooApps' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-4 float-left rounded-sm mr-1.5" src="/logo.png" alt="Hachipoo Apps" loading="lazy">
    Hachipoo Apps and Dockside · All rights reserved.
  `,
};
