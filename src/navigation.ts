import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Apps',
      links: [
        {
          text: 'Dockside for Mac',
          href: '/dockside-app',
        }
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
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
	{ text: 'About', href: '/about' },
	{ text: 'Contact', href: '/contact' },
	{ text: 'Blog', href: '/blog' }
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }
  ],
  footNote: `
    <img class="w-5 h-4  float-left rounded-sm" src="/logo.png" alt="onWidget logo" loading="lazy"></img>
     &nbspHachipoo Apps and Dockside · All rights reserved.
  `,
};
