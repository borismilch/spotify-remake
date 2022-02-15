import React from 'react'
import { ISidebarAction } from '@/models/.'

const SidebarAtion: React.FC<{action: ISidebarAction}> = ({action: { Icon, onClick, text, classes }}) => {

  return (      
    <div
      onClick={onClick.bind(null)}
      className='link_item'>
      <div className={'sidebar_action ' + (classes)}>
          <Icon className={'' + classes} />
      </div>

      <p className='font-semibold text-[#b2b2b2]'>{text}</p>
    </div>
  )
}

export default SidebarAtion