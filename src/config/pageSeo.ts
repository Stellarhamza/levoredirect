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
    title: 'Buy Undetected Fortnite Cheats | Aimbot, ESP & Wallhack',
    description:
      'Buy undetected Fortnite cheats for PC — aimbot, ESP, wallhack, radar, loot ESP and skin changer. Updated after every Easy Anti-Cheat patch.',
  },
  '/products/fortnite-cheats/': {
    title: 'Buy Fortnite Cheats | Elite, HWID Spoofer & Skin Changer',
    description:
      'Shop Fortnite cheats for PC: Elite aimbot & ESP wallhack, HWID spoofer, UGC recovery and Skin Changer. Instant delivery after checkout.',
  },
  '/products/fortnite-cheats/elite/': {
    title: 'Buy Fortnite Elite Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Buy Fortnite Elite cheats with aimbot, ESP wallhack, loot assist, Auto Finish, Skin Changer and priority EAC patch updates.',
  },
  '/products/fortnite-cheats/hwid-spoofer/': {
    title: 'Buy Fortnite HWID Spoofer | Hardware Ban Bypass',
    description:
      'Buy a Fortnite HWID spoofer for PC hardware bans — disk/MAC tools, compatibility scan and post-spoof checks before you launch cheats again.',
  },
  '/products/fortnite-cheats/ugc/': {
    title: 'Buy Fortnite UGC | EAC & Epic Ban Appeal Tools',
    description:
      'Buy Fortnite UGC (Unban & Governance Control) to organize Epic and EAC ban appeals, dispute workflows and case tracking.',
  },
  '/products/fortnite-cheats/unlock-all/': {
    title: 'Buy Fortnite Skin Changer | Unlock All Cosmetics',
    description:
      'Buy Fortnite Skin Changer / Unlock All — local outfit, wrap and pickaxe previews with your Fortnite cheats loadout.',
  },
  '/products/fortnite-cheats/utilities/': {
    title: 'Buy Fortnite Cheat Utilities | HWID, UGC & Skin Changer',
    description:
      'Buy Fortnite cheat utilities: HWID spoofer after hardware bans, UGC for Epic/EAC appeals, and local Skin Changer / Unlock All.',
  },
  '/blog/': {
    title: 'Fortnite Cheat Guides | Aimbot, ESP Wallhack & EAC',
    description:
      'Read Fortnite cheat guides on aimbot setup, ESP wallhack, Lite vs Pro, Creative practice and Easy Anti-Cheat patch-day checks.',
  },
  '/forum/': {
    title: 'Fortnite Cheats Forum | Aimbot, ESP & Setup Help',
    description:
      'Fortnite cheats forum for aimbot configs, ESP wallhack setup, EAC status and product questions before you buy.',
  },
  '/faq/': {
    title: 'Fortnite Cheats FAQ | Aimbot, ESP, Bans & Setup',
    description:
      'Fortnite cheats FAQ — tiers, aimbot, ESP wallhack, radar, HWID spoofer, Skin Changer, bans and loader setup before checkout.',
  },
  '/terms/': {
    title: 'Terms for Fortnite Cheats | License & Refunds',
    description:
      'Terms for buying Fortnite cheats on fortnite-cheats.com — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Fortnite Cheats Shop',
    description:
      'How the Fortnite cheats shop at fortnite-cheats.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Fortnite Cheats | Buy PC Aimbot & ESP',
    description:
      'About Fortnite Cheats — we sell PC Fortnite cheats (aimbot, ESP, wallhack), guides and utilities at fortnite-cheats.com.',
  },
  '/support/': {
    title: 'Fortnite Cheats Support | Loader, HWID & Checkout',
    description:
      'Fortnite cheats support for loader setup, aimbot/ESP configs, HWID spoofing and checkout help — 24/7 Discord.',
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
