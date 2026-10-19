/**
 * Photo sources. Base URLs come from the user's own Bergblick project
 * (Unsplash License) – i.e. freely accessible open sources. They are
 * placeholders for this recreation, not final assets.
 */
const PHOTOS = [
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777',
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
  'https://images.unsplash.com/photo-1529042410759-befb1204b468',
  'https://images.unsplash.com/photo-1544025162-d76694265947',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd',
  'https://images.unsplash.com/photo-1547592180-85f173990554',
  'https://images.unsplash.com/photo-1551029506-0807df4e2031',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
  'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
  'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
  'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2',
  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252',
  'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5',
  'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
] as const;

export const photo = (index: number, width = 1200): string => {
  const base = PHOTOS[((index % PHOTOS.length) + PHOTOS.length) % PHOTOS.length];
  return `${base}?auto=format&fit=crop&w=${width}&q=80`;
};

export const heroPhotos = [photo(2, 1800), photo(6, 1800), photo(11, 1800)];
export const bandPhoto = photo(4, 1800);
export const parallaxPhoto = photo(7, 1800);
export const pageTitlePhoto = photo(15, 1800);
