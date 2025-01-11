import {Inter} from 'next/font/google'
import {Metadata} from 'next'
import {ClerkProvider} from '@clerk/nextjs'
import '../globals.css'
import { currentUser } from '@clerk/nextjs/server'
import RightSidebar from '@/components/shared/RightSideBar'
import TopBar from '@/components/shared/TopBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import BottomBar from '@/components/shared/BottomBar'

export const metadata : Metadata = {
    title: 'Twiddle',
    description: 'A social media App',
}

const inter = Inter({
    subsets: ['latin'],
})

export default async function RootLayout({children}:
     Readonly<{children: React.ReactNode}>
    
    ) {
    const user = await currentUser()
    if(!user){
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

    return (
        <>
             return (
        <>
            <html lang='en'>  
                    <ClerkProvider>
                            <body>
                                <main className={`${inter.className}`}>
                                    <TopBar/>
                                    <main className='flex flex-row'>
                                        <LeftSideBar/>
                                        <section className='main-container'>
                                            <div className='w-full flex justify-center items-center min-h-screen'>
                                                {children}
                                             </div>
                                        </section>
                                        <RightSidebar/>
                                    </main>  
                                    <BottomBar/>
                                    
                                </main>
                            </body>
                    </ClerkProvider>         
                    
            </html>
        </>
        )

        </>
    )
   
}