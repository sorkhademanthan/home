import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Harsh Jadhav - Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#000000',
          position: 'relative',
          padding: 0,
        }}
      >
        {/* The 4 layout lines */}
        <div style={{ position: 'absolute', left: 64, top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', right: 64, top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', top: 64, left: 0, right: 0, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', bottom: 64, left: 0, right: 0, height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        {/* Center Content Box */}
        <div
          style={{
            position: 'absolute',
            top: 65,
            bottom: 65,
            left: 65,
            right: 65,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 48,
          }}
        >
          {/* Top section */}
          <div style={{ display: 'flex' }}></div>
          
          {/* Middle section */}
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: 24, color: '#A3A3A3', lineHeight: 1.5, maxWidth: 500, fontFamily: 'sans-serif' }}>
              Building polished web interfaces and reliable systems from zero.
            </p>
          </div>

          {/* Bottom section */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginTop: 100 }}>
            <span style={{ fontSize: 16, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.25em', fontFamily: 'monospace', marginBottom: 24 }}>
              Software Engineer
            </span>
            <h1 style={{ fontSize: 110, color: '#FFFFFF', margin: 0, lineHeight: 1, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
              Harsh Jadhav
            </h1>
          </div>
        </div>

        {/* Intersection Dots */}
        <div style={{ position: 'absolute', left: 63, top: 63, width: 4, height: 4, backgroundColor: '#FFFFFF', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: 63, top: 63, width: 4, height: 4, backgroundColor: '#FFFFFF', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', left: 63, bottom: 63, width: 4, height: 4, backgroundColor: '#FFFFFF', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: 63, bottom: 63, width: 4, height: 4, backgroundColor: '#FFFFFF', borderRadius: '50%' }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
