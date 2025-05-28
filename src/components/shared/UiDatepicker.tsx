'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { OriginCalendar } from './OriginCalendar'
import { useEffect, useState } from 'react'

export const UiDatepicker = ({ birthdayAt }: any) => {
  const [date, setDate] = useState<Date>(birthdayAt)

  useEffect(() => {
    setDate(date)
  }, [date])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, 'dd-MM-yyyy')
          ) : (
            <span>Selecciona una fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <OriginCalendar setDateFromPicker={setDate} initalDate={birthdayAt} />
      </PopoverContent>
    </Popover>
  )
}
