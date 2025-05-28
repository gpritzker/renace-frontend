'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { IBreadcrumb } from '@/interface/IBreadcrumb'

interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumb[]
  className?: string
}

export const UiBreadcrumbs = ({
  breadcrumbs,
  className
}: IBreadcrumbsProps) => {
  const breadcrumbItems = breadcrumbs.filter(
    (breadcrumb) => breadcrumb?.href?.length
  )

  return (
    <Breadcrumb className={`${className}`}>
      <BreadcrumbList>
        {breadcrumbItems?.map((breadcrumb, i) => (
          <div key={i} className='flex items-center space-x-1'>
            <BreadcrumbItem>
              <BreadcrumbLink
                className='font-normal text-xs hover:foreground'
                href={breadcrumb.href!}
              >
                {breadcrumb.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {i < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
