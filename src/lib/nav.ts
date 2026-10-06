export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: 'Startseite', href: '/' },
  {
    label: 'Speisekarte',
    href: '/menu',
    children: [
      { label: 'Frühstück', href: '/menu#fruehstueck' },
      { label: 'Herzhaftes', href: '/menu#herzhaftes' },
      { label: 'Süße Speisen', href: '/menu#suesses' },
      { label: 'Getränke', href: '/menu#getraenke' }
    ]
  },
  { label: 'Über uns', href: '/about' },
  { label: 'Galerie', href: '/gallery' },
  { label: 'Reservierung', href: '/reservation' },
  { label: 'Kontakt', href: '/contact' }
];

export const navFlat = nav.flatMap((item) => [item, ...(item.children ?? [])]);
