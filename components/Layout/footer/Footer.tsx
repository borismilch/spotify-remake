import React from 'react'

import { FooterActions, FooterPlayer, FooterSong } from '.'

const Footer = () => {

  return (
    <footer className='flex relative bg-[#181818] border-t border-[#323232]  w-full flex-shrink-0 justify-between items-center p-4'>

      <FooterSong />

      <div className='w-full absolute h-full flex items-center justify-center'>
        <FooterPlayer /> 
      </div>

      <FooterActions />

      

    </footer>
  )
}

export default Footer
