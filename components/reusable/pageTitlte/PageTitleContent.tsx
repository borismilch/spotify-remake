import React, { ReactElement } from 'react'

interface PageTitleProps {
  picture: ReactElement<any, any>,
  type: string,
  title: string,
  subtitle: string | ReactElement<any, any>,
  overlayContent?: ReactElement<any,any>,
  changeble?: boolean
  rounded?: boolean
}

const PageTitleContent: React.FC<PageTitleProps> = React.memo((props) => {
  const {picture, subtitle, title, type, overlayContent, changeble = false, rounded = true} = props

  return (
     <div className='flex gap-7  items-end'>
        <div className={'relative overflow-hidden  shadow-2xl shadow-[#101010]' 
        + (rounded && 'rounded-full')}
          style={{width: rounded ? 218 : 230, height: rounded ? 218 : 230}}
        >
        
        { changeble && <div className='overlay_content'>
            {overlayContent}
          </div>}

         {picture}
        </div>

        <div className='flex flex-col z-10'>
          <h4 className='font-semibold transform translate-y-3 text-white text-lg'>{type}</h4>
          <h1 className='text-[80px] font-bold text-white'>{title}</h1>
          <h5 className='text-white font-semibold text-lg max-w-[400px] truncate'>{subtitle}</h5>
        </div>
      </div>
  )
})

export default PageTitleContent