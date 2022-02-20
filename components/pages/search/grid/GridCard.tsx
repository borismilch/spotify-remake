import React from 'react'
import Image from 'next/image'

import { ICategoryItem } from '@/models/.'
import { useNavigation } from '@/hooks/.'

interface CategoryItemProps {
  category: ICategoryItem
}

const GridCard: React.FC<CategoryItemProps> = ({category}) => {

  const { pushRouter } = useNavigation()

  return (
    <div 
      onClick={pushRouter.bind(null, '/category/' + category.title)}
      className='category_card hover:opacity-80' 
      style={{backgroundColor: category.color}}
    >

      <h1 className='text-white text-xl font-semibold'>{category.title}</h1>

      <div className='absolute -bottom-3 -right-3 w-[80px] h-[80px] transform rotate-45'>

        <Image objectFit='contain' layout='fill' src={category.img} />

      </div>
      
    </div>
  )
}

export default GridCard