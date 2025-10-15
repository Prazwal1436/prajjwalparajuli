import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prajjwal Parajuli - Full Stack Developer & Digital Marketing Expert',
    short_name: 'Prajjwal Parajuli',
    description: 'Portfolio of Prajjwal Parajuli - Full Stack Developer and Digital Marketing Expert based in Nepal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['technology', 'portfolio', 'developer'],
    lang: 'en',
    scope: '/',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '640x1136',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ],
    related_applications: [
      {
        platform: 'web',
        url: 'https://prajjwalparajuli.com'
      }
    ],
    prefer_related_applications: false
  }
}