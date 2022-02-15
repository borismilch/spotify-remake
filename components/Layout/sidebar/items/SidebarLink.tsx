import React from 'react'
import { ISidebarLink } from '@/models/.'
import { useNavigation } from '@/hooks/.'

const SidebarLink: React.FC<{sidebarItem: ISidebarLink}> = ({sidebarItem: { Icon, text, to }}) => {

  const { pushRouter, router } = useNavigation()

  return (
    <div
      onClick={pushRouter.bind(null, to)}
      className={'link_item opacity-80 group ' + (router.pathname === to && 'opacity-100')}
    >

      <Icon className={" text-2xl " } />

      <p className='font-semibold'>{text}</p>
    </div>
  )
}

export default SidebarLink