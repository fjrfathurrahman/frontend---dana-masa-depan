'use client'

import { Calendar as CalendarHero } from '@heroui/react';
import { useState } from 'react';
import { getLocalTimeZone, today } from '@internationalized/date';

const Calendar = () => {
  let [date, setDate] = useState(today(getLocalTimeZone()));
  
  return (
    <div className='col-span-3 flex justify-center h-max'>
       <CalendarHero
        aria-label="Date Picker (Invalid on weekends)"
        value={date}
      />
    </div>
  )
}

export default Calendar