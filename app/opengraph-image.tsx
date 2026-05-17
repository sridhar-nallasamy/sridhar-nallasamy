import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { META_INFO } from '@/constants';

export const alt = 'Sridhar Nallasamy — Senior Software Engineer';

export const size = { width: 1200, height: 630 };

export const contentType = 'image/png';

export default async function OgImage() {
  const jetBrains_regular = await readFile(
    join(process.cwd(), 'assets/fonts/JetBrainsMono-Regular.ttf'),
  );

  const logoData = await readFile(join(process.cwd(), 'assets/png/VGS.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
        fontFamily: 'JetBrains Mono',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        color: 'white',
      }}
    >
      <img
        alt={alt}
        src={logoBase64}
        style={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: 25,
          right: 45,
        }}
      />
      <div style={{ fontSize: 93, color: 'lightgreen' }}>
        {META_INFO.ogTitle}
      </div>
      <div style={{ fontSize: 43, color: 'lightgray' }}>
        {META_INFO.ogSubTitle}
      </div>
      <div style={{ fontSize: 27, color: '#a1a1aa', marginTop: '1rem' }}>
        {META_INFO.ogDescription}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: jetBrains_regular,
          style: 'normal',
        },
      ],
    },
  );
}
