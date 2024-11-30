import * as React from 'react'

import { useFormField } from '@/components/ui/Form'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const { error } = useFormField()
    return (
      <textarea
        className={cn(
          'flex min-h-32 w-full rounded-100 border-[2px] border-gray-200 bg-gray-50 p-3 text-size_input text-gray-800 placeholder:text-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
          { '!border-error': error }
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
