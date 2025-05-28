'use client'

import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import { DropdownNavProps, DropdownProps } from 'react-day-picker'
import { es } from 'date-fns/locale'
import { formatISO } from 'date-fns'
import { useAccountStore } from '@/store/accountStore'

export const OriginCalendar = ({setDateFromPicker, initalDate} :any) => {
  const [date, setDate] = useState<Date | undefined>(initalDate ? initalDate :  new Date())
  const { setSelectedProfileDate } = useAccountStore()

  useEffect(() => {
    if (date) {
      setSelectedProfileDate(date) // este va para el ProfileForm
      setDateFromPicker(formatISO(date)) // este va para UiDatePicker
    }
  }, [date])

  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value)
      }
    } as React.ChangeEvent<HTMLSelectElement>
    _e(_event)
  }

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border p-2'
        captionLayout='dropdown-years'
        defaultMonth={date}
        startMonth={new Date(1920, 6)}
        disabled={{ after: new Date() }}
        locale={es}
        components={{
          DropdownNav: (props: DropdownNavProps) => {
            return (
              <div className='flex w-full items-center justify-center gap-3 [&>span]:text-sm [&>span]:font-medium'>
                {props.children}
              </div>
            )
          },
          YearsDropdown: (props: DropdownProps) => {
            return (
              <Select
                value={String(props.value)}
                onValueChange={(value) => {
                  if (props.onChange) {
                    handleCalendarChange(value, props.onChange)
                  }
                }}
              >
                <SelectTrigger className='h-8 w-fit font-medium'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className='max-h-[min(26rem,var(--radix-select-content-available-height))]'>
                  {props.options?.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={String(option.value)}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )
          }
        }}
      />
    </div>
  )
}
