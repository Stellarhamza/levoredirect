/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Fortnite Cheats | Aimbot, ESP & Wallhack',
    description:
      'Fortnite cheats for PC with aimbot, ESP, wallhack, radar, loot ESP and skin changer. Updated after Easy Anti-Cheat patches.',
  },
  '/products/fortnite-cheats/': {
    title: 'Fortnite Cheats Products | Elite, HWID & Skin Changer',
    description:
      'Fortnite Elite cheats, HWID spoofer, UGC recovery and Skin Changer for Battle Royale, Zero Build and Ranked on PC.',
  },
  '/products/fortnite-cheats/elite/': {
    title: 'Fortnite Elite Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Fortnite Elite with aimbot, ESP wallhack, loot assist, Auto Finish, Skin Changer and priority patch updates.',
  },
  '/products/fortnite-cheats/utilities/': {
    title: 'Fortnite Utilities | HWID Spoofer, UGC & Skin Changer',
    description:
      'HWID Spoofer after hardware bans, UGC for Epic and EAC appeals, and local Skin Changer / Unlock All.',
  },
  '/blog/': {
    title: 'Fortnite Cheats Guides | Aimbot, ESP & EAC',
    description:
      'Guides on Fortnite aimbot, ESP wallhack, Lite vs Pro, Creative practice and Easy Anti-Cheat patch checks.',
  },
  '/forum/': {
    title: 'Fortnite Cheats Forum',
    description:
      'Talk Fortnite cheat setup, aimbot and ESP configs, EAC status and product questions.',
  },
  '/faq/': {
    title: 'FAQ | Fortnite Aimbot, ESP & Setup',
    description:
      'Answers on Fortnite cheat tiers, aimbot, ESP wallhack, radar, HWID spoofer, Skin Changer and loader setup.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Fortnite Cheats',
    description:
      'Purchase terms, license use and refund policy for Fortnite cheat products on fortnite-cheats.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Fortnite Cheats',
    description:
      'How fortnite-cheats.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Fortnite Cheats',
    description:
      'Fortnite Cheats sells PC Fortnite cheat tiers, guides and utilities at fortnite-cheats.com.',
  },
  '/support/': {
    title: 'Support | Fortnite Cheats',
    description:
      'Help with Fortnite cheat loader setup, configs, HWID spoofing and checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
