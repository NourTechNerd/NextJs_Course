import { profile } from "console"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { AUTHOR_BY_GITHUB_ID } from "./sanity/lib/queries" 
import {client} from '@/sanity/lib/client'
import { write_client } from '@/sanity/lib/write-client';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks:{
    async  signIn({user,profile}) {
      const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID,{id : profile?.id ||''})
      if(existingUser)
      {
        await write_client.create({
          _type : 'author',
          id : profile?.id ||'',
          name : user?.name ||'',
          username:profile?.login ||'',
          email:user.email,
          image:user.image,
          bio:profile?.bio || '',
        })
      }
      return true;
    }
  }
})