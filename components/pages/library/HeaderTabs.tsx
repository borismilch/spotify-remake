import React from 'react'
import Link from 'next/link'

import { useNavigation } from '@/hooks/.'

interface ILink {
  text: string, 
  href: string
}


const HeaderTabs = () => {

  const { router } = useNavigation()

  const links: ILink[] = [
    {
      text: "Playlists",
      href: "/library/playlists"
    },
    {
      text: "Your albums",
      href: '/library'
    },
    {
      text: "Create Album",
      href: '/library/create'
    }
  ]
  
  return (
    <div className='flex items-center gap-3'>

     { links.map(link => (
       <Link key={link.text} href={link.href}>
         <button className={'tab_button ' + 
         (router.pathname === link.href &&  'bg-cardHover text-white')}>{link.text}</button>
       </Link>
     ))}

    </div>
  )
}

export default HeaderTabs