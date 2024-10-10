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
    }
  ]
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' }
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }
  ],
  footNote: `
    <img class="w-5 h-4  float-left rounded-sm" src="/logo.png" alt="onWidget logo" loading="lazy"></img>
     Hachipoo Apps and Dockside · All rights reserved.
  `,
};
