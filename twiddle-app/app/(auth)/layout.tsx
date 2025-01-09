import {Inter} from 'next/font/google'
import {Metadata} from 'next'
import {ClerkProvider} from '@clerk/nextjs'
import '../globals.css'

export const metadata : Metadata = {
    title: 'Twiddle',
    description: 'A social media App',
}

const inter = Inter({
    subsets: ['latin'],
})

export default function RootLayout({children}:
     Readonly<{children: React.ReactNode}>
    
    ) {
    return (
       <>
         <html lang='en'>  
                <ClerkProvider>
                          <body>
                            <main className={`${inter.className} bg-dark-1`}>
                                <div className='w-full flex justify-center items-center min-h-screen'>
                                    {children}
                                </div>
                            </main>
                        </body>
                </ClerkProvider>         
                
         </html>
       </>
    )
}