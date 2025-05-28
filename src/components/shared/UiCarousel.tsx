'use client'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

type UiCarouselProps = {
  children: React.ReactNode
  align?: 'start' | 'center' | 'end'
  loop?: boolean
  orientation?: 'horizontal' | 'vertical'
  autoplay?: boolean
  delay?: number
  customClass?: string
  customClassBtn?: string
}

export const UiCarousel = ({
  children,
  align = 'start',
  loop = true,
  orientation = 'horizontal',
  autoplay = false,
  delay = 1000,
  customClass = '',
  customClassBtn = ''
}: UiCarouselProps) => {
  const autoPlayPlugin = useRef(Autoplay({ delay, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={autoplay ? [autoPlayPlugin.current as never] : undefined}
      opts={{
        align,
        loop
      }}
      orientation={orientation}
      className={cn('relative w-full animate-fade', customClass)}
    >
      <CarouselContent>
        {/*children debe ser un CarouselItem*/}
        {children}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          `absolute left-0 h-11 w-6 rounded-r-2xl rounded-l-none bg-gray-700 text-white hover:bg-gray-800 hover:text-white`,
          customClassBtn
        )}
        aria-label='Anterior'
      />
      <CarouselNext
        className={cn(
          `absolute right-0 h-11 w-6 rounded-l-2xl rounded-r-none bg-gray-700 text-white hover:bg-gray-800 hover:text-white`,
          customClassBtn
        )}
        aria-label='Siguiente'
      />
    </Carousel>
  )
}
