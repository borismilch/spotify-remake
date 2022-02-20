import React from 'react'
import dynamic from 'next/dynamic'

import { categories } from '@/utils/mock/categories'

const MostPopular = () => {
  const CategoryCard = dynamic(() => import('./GridCard'))
  return (
    <div className='grid_category grid-cols-3 max-h-[250px]'>

      {
        categories.slice(0, 3).map(card => (
          <CategoryCard key={card.title} category={card} />
        ))
      }
      
    </div>
  )
}

export default MostPopular