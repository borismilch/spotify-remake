import React, { ChangeEvent } from 'react'

import { useAppDispatch } from '@/hooks/redux'
import { setSearch } from '@/store/actions'
import useDebounce from '@/hooks/useDebounce'

import { RiSearchLine } from 'react-icons/ri'

const SearchField = () => {

  const dispatch = useAppDispatch()

  const sendToSStore = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  const [changeVal, value] = useDebounce(sendToSStore)

  return (
    <div className='flex items-center gap-1 focus-within:shadow-xl bg-white rounded-full p-2  '>

    <RiSearchLine className='text-2xl' />

    <input 
      onChange={(e: ChangeEvent<HTMLInputElement>) => changeVal(e)}
      type="text" 
      value={value}
      placeholder='Search for tracks...'  
      className='cleanInput font-semibold text-sm w-[312px] h-[25px]'
    />

    </div>
  )
}

export default SearchField