import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Image from "next/image"


const LandingPage = () => {
    return (
        <> 
        <div className="flex flex-col lg:flex-row gap-5 p-5" >
            <div className="flex justify-center">
                <Image src='/assets/logo.svg' 
                    width={400}
                    height={400}
                    alt="logo"
                    className="w-1/2 lg:w-full"
                />
            </div>

            <div className="flex flex-col itmes-center lg:items-start">
                <h1 className="font-extrabold text-light-1 text-4xl mb-5 lg:mb-7 text-center lg:text-left">Happening Now</h1>
                <p className="text-light-1 text-xl lg:text-3xl mb-5 lg:mb-10 text-center lg:text-left">Join Today</p>
                <SignInButton > 
                    <button className="lg:w-full text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-white hover:bg-slate-300 ">Log in</button> 
                </SignInButton>
                <SignUpButton>
                    <button className="lg:w-full text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-emerald-200 hover:bg-green-300  " >Register</button>
                </SignUpButton>
                
            </div>
        </div>
           
        </>
    )
}

export default LandingPage