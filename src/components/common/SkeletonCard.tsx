import { Skeleton } from '@/components/ui/Skeleton'
import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function SkeletonCard({ className, ...props }: Props) {
  return (
    <div className={cn('flex w-full flex-col space-y-3', className)} {...props}>
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}
