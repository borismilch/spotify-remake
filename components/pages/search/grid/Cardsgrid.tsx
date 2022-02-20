import React from 'react'

import { categories } from '@/utils/mock/categories'

import { GridCard } from '.'
import { ICategoryItem } from '@/models/.'

const Cardsgrid = () => {
  return (
    <div className='grid_category'>

      {
        categories.map((item: ICategoryItem) => (
          <GridCard key={item.title} category={item} />
        ))
      }
      
    </div>
  )
}

export default Cardsgrid