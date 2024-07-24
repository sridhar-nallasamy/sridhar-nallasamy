/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Sridhar Nallasamy 😊';

export const size = { width: 1200, height: 627 };

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src="https://raw.githubusercontent.com/sridhar-nallasamy/sridhar-nallasamy/og-update/assets/png/VgsOgImg.png"
          alt="OgImage"
        />
      </div>
    ),
  );
}
