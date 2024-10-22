import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';
import React from 'react';


export const metadata: Metadata = {
  title: 'Oyela',
  description: 'Discover emotional support and relationship advice with our therapy app. Connect with AI counselors and professionals worldwide for personalized guidance and personality assessments.',
  icons: {
    icon: "/favicon.ico", // Use leading slash for path
  },
};



const ageo = localFont({
  src: [
    {
      path: '../../public/font/AgeoPersonalUse.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/AgeoPersonalUse-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/font/AgeoPersonalUse-ExtraBold.otf',
      weight: '850',
      style: 'extra-bold',
    },
    {
      path: '../../public/font/AgeoPersonalUse-Medium.otf',
      weight: '500',
      style: 'medium',
    },
  ],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={ageo.className}>
        <NavBar />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
