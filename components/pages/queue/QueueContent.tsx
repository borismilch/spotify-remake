import React from 'react'

import { QueueCurrent, QueueTable } from '.'

const QueueContent = () => {
  return (
    <div className='flex flex-col p-9 gap-7'>

      <div className='flex flex-col gap-3'>

        <h3 className='text-2xl font-bold text-title'> Очередь </h3>

        <h2 className='text-desc font-bold'>Сейчас играет</h2>

        <QueueCurrent />

      </div>

      <div className='flex flex-col'>

        <h2 className='text-desc font-bold text-lg'>Далее</h2>

        <QueueTable />

      </div>

    </div>

  )
}

export default QueueContent