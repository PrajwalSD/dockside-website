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
  ],
  actions: [
    {
      variant: 'primary' as const,
      text: 'Download',
      href: 'https://hachipoo.com/distributions/Dockside.dmg',
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Resellers', href: getPermalink('/resellers') },
    { text: 'Integrations', href: getPermalink('/integrations') },
    { text: 'All Features', href: getPermalink('/features') },
    { text: 'About', href: '/about' },
    { text: 'Press kit', href: getPermalink('/press') },
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
  footNote: `Hachipoo Apps and Dockside App · © ${new Date().getFullYear()} · All rights reserved.`,
};
