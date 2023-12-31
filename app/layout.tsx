
import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { StateContext } from '@/hooks/use-state'


export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

interface RootLayoutProps {
  children: React.ReactNode;
 
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
   <ClerkProvider>
       <StateContext>
    <html lang="en">
      <body >
  
      <Navbar />
        <main className='relative overflow-hidden'>
               {children}
        </main>
   
        <Footer/>
       
        </body>
    </html>
    </StateContext>
    </ClerkProvider>
  )
}
