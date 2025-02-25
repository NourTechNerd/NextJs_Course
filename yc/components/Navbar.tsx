import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth,signIn,signOut} from '@/auth'

export default async function Navbar() {
    const session = await auth()
    console.log("session",session)
  return (
    <div>
        <header className='bg-white flex flex-row justify-between items-center p-3'>
            <nav >
                <Link href="/" >
                  <Image className='sm:w-[90px] md:w-[144px]'  src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
            </nav>
            {
                session && session?.user ?
                (
                    <div className='flex flex-row gap-3'>
                        <Link href="/startup/create" >
                            <span className='font-blinker font-bold'>Create</span>
                        </Link>

                        <form action={async () => {
                            "use server";

                            await signOut({redirectTo :"/"});
                        }}>
                        <button type="submit">
                            <span className='font-blinker font-bold'>Logout</span>
                        </button>
                       </form>
                        
                        <Link href={`/user/${session.user.email}`} >
                            <span>{session.user.name}</span>
                        </Link>

                    </div>
                ):
                (
                    <div>
                       <form action={async () => {
                            "use server";

                            await signIn("github");
                        }}>
                        <button type="submit">
                            <span className='font-blinker font-bold'>SingIn</span>
                        </button>
                       </form>
                        
                    </div>
                )
            }

        </header>
    </div>
  )
}
