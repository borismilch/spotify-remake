import React, { ChangeEvent } from 'react'

import { IoMdClose } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'

import { useDebounce } from '@/hooks/.'
import AppIcon from '@/icons/.'

interface SearchFormProps {
  query: string,
  onChange: (val: string) => void
  clean: () => void,
  open: boolean, 
  changeOpen: ( val: boolean ) => void
}

const SearchForm: React.FC<SearchFormProps> = (props) => {

  const { onChange, query, open, changeOpen } = props

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const [changeHandler, val] = useDebounce(changeSearch)

  
  return (

    <div className='flex justify-between items-center my-4 py-5 mx-3 border-t border-desc'>

      {open && <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-bold pb-2 text-title'>Давай добавим что-нибудь в твой плейлист</h2>

        <div className='flex items-center gap-2 py-1 bg-cardHover px-3 rounded-md focus-within:shadow-lg text-gray-300'>

          <FiSearch />

          <input 
            type="text" 
            className={'cleanInput h-[30px] text-title font-semibold flex-grow'} 
            value={val}
            placeholder="Search of tracks and albums"
            onChange={changeHandler}
          />

         {query && 
            <AppIcon 
              onclick={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
              Icon={<IoMdClose className='app_icon text-gray-300' />}
            />
           
         }
        </div>
      </div>}

      {open && <AppIcon 
        onclick={changeOpen.bind(null, false)}
        Icon={<IoMdClose className='app_icon text-2xl text-gray-300' />}
      />}

      {!open && (
        <div className='ml-auto'>
          <h2
            onClick={changeOpen.bind(null, true)}
            className='more'>MORE</h2>
        </div>
      )}

    </div>
  )
}

export default SearchForm