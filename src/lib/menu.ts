export type Dish = { name: string; note: string; price: string; img: number };

export type MenuTab = { id: string; label: string; items: Dish[] };

export const menuTabs: MenuTab[] = [
  {
    id: 'fruehstueck',
    label: 'Frühstück',
    items: [
      { name: 'Lindenhof-Brett', note: 'Brioche, Rührei, Käse, Aufstriche', price: '12,50 €', img: 0 },
      { name: 'Pancakes & Beeren', note: 'Buttermilch, hausgemachte Marmelade', price: '9,80 €', img: 1 },
      { name: 'Shakshuka', note: 'Ei in Tomaten-Paprika-Sugo, Feta', price: '11,90 €', img: 2 },
      { name: 'Bircher Müsli', note: 'Apfel, Haselnuss, Joghurt', price: '7,50 €', img: 3 },
      { name: 'Croissant Natur', note: 'Ofenfrisch, Buttergebäck', price: '3,20 €', img: 4 },
      { name: 'Eier nach Art', note: 'Pochiert oder gebraten, Sauerteigbrot', price: '8,90 €', img: 5 }
    ]
  },
  {
    id: 'herzhaftes',
    label: 'Herzhaftes',
    items: [
      { name: 'Kassler mit Linsen', note: 'Räucherschinken, grüne Linsen', price: '16,50 €', img: 6 },
      { name: 'Zucchinisuppe', note: 'Kartoffel, Minzöl, Sauerteig', price: '8,90 €', img: 7 },
      { name: 'Ofenlachs', note: 'Dill, Kartoffelstampf, Zitrone', price: '19,80 €', img: 8 },
      { name: 'Pilz-Risotto', note: 'Waldpilze, Parmesan, Thymian', price: '15,40 €', img: 9 },
      { name: 'Lindenhof-Burger', note: 'Rind, Bergkäse, eingelegte Gurke', price: '16,90 €', img: 10 },
      { name: 'Ofengemüse', note: 'Saisongemüse, Tahini, Kräuter', price: '13,50 €', img: 11 }
    ]
  },
  {
    id: 'suesses',
    label: 'Süßes',
    items: [
      { name: 'Streuselkuchen', note: 'Quark, Blaubeeren, täglich frisch', price: '4,80 €', img: 12 },
      { name: 'Schokoladen-Tarte', note: 'Ganache, Meersalz', price: '6,50 €', img: 13 },
      { name: 'Apfelstrudel', note: 'Hausgemacht, Vanillesauce', price: '5,90 €', img: 14 },
      { name: 'Cheesecake', note: 'Zitrone, Biskuitboden', price: '6,20 €', img: 15 },
      { name: 'Mohnrollen', note: 'Hefeteig, warm aus dem Ofen', price: '3,90 €', img: 16 },
      { name: 'Fruchtigeis', note: 'Hausgemacht, zwei Kugeln', price: '4,40 €', img: 17 }
    ]
  },
  {
    id: 'getraenke',
    label: 'Getränke',
    items: [
      { name: 'Filterkaffee', note: 'Röstung Kassel, 0,3 l', price: '3,40 €', img: 18 },
      { name: 'Cappuccino', note: 'Doppelter Espresso, 0,25 l', price: '3,90 €', img: 19 },
      { name: 'Matcha Latte', note: 'Ceremonial Grade, Haferdrink', price: '4,60 €', img: 20 },
      { name: 'Hausgemachte Limonade', note: 'Zitrone-Minze, 0,4 l', price: '4,20 €', img: 21 },
      { name: 'Glühwein', note: 'Saisonal, Rotwein, Orange', price: '5,50 €', img: 22 },
      { name: 'Glas Wein', note: 'Weiß oder Rot, 0,15 l', price: '5,20 €', img: 23 }
    ]
  }
];

export type MenuListBlock = {
  id: string;
  title: string;
  icon: 'croissant' | 'cooking' | 'cake';
  imageIndex: number;
  side: 'left' | 'right';
  groups: { category: string; items: { name: string; note: string; price: string }[] }[];
};

export const menuListBlocks: MenuListBlock[] = [
  {
    id: 'fruehstueck',
    title: 'Frühstück & Gebäck',
    icon: 'croissant',
    imageIndex: 9,
    side: 'right',
    groups: [
      {
        category: 'Aus dem Ofen',
        items: [
          { name: 'Buttercroissant', note: 'täglich frisch', price: '3,20 €' },
          { name: 'Schnecken', note: 'Zimt-Nuss', price: '3,80 €' },
          { name: 'Laugenbrezel', note: 'mit Sesam', price: '3,40 €' },
          { name: 'Sauerteigbrot', note: 'halbe Scheibe', price: '2,20 €' },
          { name: 'Mürbeteig', note: 'Aprikose', price: '3,60 €' },
          { name: 'Brioche', note: 'Zitrone', price: '3,90 €' }
        ]
      }
    ]
  },
  {
    id: 'herzhaftes',
    title: 'Herzhaft vom Herd',
    icon: 'cooking',
    imageIndex: 6,
    side: 'left',
    groups: [
      {
        category: 'Mittagstisch',
        items: [
          { name: 'Tagesuppe', note: 'wechselnd', price: '7,50 €' },
          { name: 'Kasseler Eintopf', note: 'Linsen, Kraut', price: '14,90 €' },
          { name: 'Schmoren', note: 'Rind, Rotwein', price: '18,50 €' },
          { name: 'Pfannengericht', note: 'Gemüse der Woche', price: '13,90 €' },
          { name: 'Käsespätzle', note: 'Röstzwiebeln', price: '12,50 €' },
          { name: 'Salat Lindenhof', note: 'Hausdressing', price: '11,90 €' }
        ]
      }
    ]
  },
  {
    id: 'suesses',
    title: 'Kuchen & Süßes',
    icon: 'cake',
    imageIndex: 12,
    side: 'right',
    groups: [
      {
        category: 'Vitrine',
        items: [
          { name: 'Streuselkuchen', note: 'Blaubeere', price: '4,80 €' },
          { name: 'Käsekuchen', note: 'Klassik', price: '4,60 €' },
          { name: 'Zitronentarte', note: 'Baiser', price: '4,80 €' },
          { name: 'Schokoladenkuchen', note: 'hausgemacht', price: '5,40 €' },
          { name: 'Obstteller', note: 'saisonal', price: '5,90 €' },
          { name: 'Panna Cotta', note: 'Vanille', price: '5,50 €' }
        ]
      }
    ]
  }
];

export const priceColumns: { title: string; items: { name: string; price: string }[] }[] = [
  {
    title: 'Kaffee',
    items: [
      { name: 'Espresso', price: '2,40 €' },
      { name: 'Caffè Crema', price: '3,20 €' },
      { name: 'Flat White', price: '3,90 €' },
      { name: 'Cold Brew', price: '4,40 €' },
      { name: 'Kaffee Sahne', price: '4,60 €' }
    ]
  },
  {
    title: 'Tee',
    items: [
      { name: 'Darjeeling', price: '3,40 €' },
      { name: 'Kamillenblüte', price: '3,20 €' },
      { name: 'Pfefferminze', price: '3,20 €' },
      { name: 'Grüner Sencha', price: '3,60 €' },
      { name: 'Rooibos Vanille', price: '3,40 €' }
    ]
  },
  {
    title: 'Kuchen',
    items: [
      { name: 'Marmorkuchen', price: '4,20 €' },
      { name: 'Zitronentarte', price: '4,80 €' },
      { name: 'Käsekuchen', price: '4,60 €' },
      { name: 'Birnenkuchen', price: '4,80 €' },
      { name: 'Tageskuchen', price: '4,50 €' }
    ]
  }
];
