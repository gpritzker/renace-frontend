import { generatePaginationNumbers } from '@/lib/generatePaginationNumbers'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

interface Props {
  totalPages: number
  currentPage: number
  keyParam?: string // nombre de la keyParam de la query => ?page | ?p
  className?: string
}

export const UiPagination = ({
  totalPages = 1,
  currentPage = 1,
  keyParam = 'page',
  className
}: Props) => {
  const allPages = generatePaginationNumbers(totalPages, currentPage)

  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`?${keyParam}=${currentPage - 1}`}
              className={
                'rounded-full h-9 w-9 text-base hover:bg-paginator hover:border hover:border-paginator-border cursor-pointer font-normal'
              }
            />
          </PaginationItem>
        )}
        {allPages.map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === 'string' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={cn('rounded-full h-9 w-9 text-base', {
                  'bg-secondary cursor-default hover:bg-secondary hover:text-white text-white font-bold':
                    currentPage === page,
                  'hover:bg-paginator hover:border hover:border-paginator-border cursor-pointer font-normal':
                    currentPage !== page
                })}
                href={`?${keyParam}=${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`?${keyParam}=${currentPage + 1}`}
              className={
                'rounded-full h-9 w-9 text-base hover:bg-paginator hover:border hover:border-paginator-border cursor-pointer font-normal'
              }
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
