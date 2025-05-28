import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  subtitle?: string
  titleClass?: string
  subtitleClass?: string
  separatorClass?: string
}

export const UiTitleWithSeparator = ({
  title,
  subtitle,
  titleClass,
  subtitleClass,
  separatorClass
}: Props) => (
  <div className='flex flex-col'>
    <h3 className={cn('font-semibold text-black text-lg', titleClass)}>
      {title}
    </h3>
    {subtitle && (
      <p className={cn('text-muted-foreground text-xs', subtitleClass)}>
        {subtitle}
      </p>
    )}
    <Separator className={cn('mt-1', separatorClass)} />
  </div>
)
