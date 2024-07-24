import { ImageResponse } from 'next/server';

import OgImage from '@/components/ogImage';

export const runtime = 'edge';

export const alt = 'Sridhar Nallasamy 😊';

export const size = { width: 1200, height: 627 };

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(<OgImage />);
}
