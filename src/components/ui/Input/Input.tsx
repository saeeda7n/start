import { useFormField } from '@/components/ui/Form'
import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'
import type { ControllerRenderProps } from 'react-hook-form'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'relative flex w-full items-center gap-1.5 shadow-soft shadow-black/5 focus-within:shadow-none focus-within:ring-primary',
  {
    variants: {
      variant: {
        default: 'overflow-hidden bg-gray-50 ring-transparent',
        filled: 'bg-gray-100 text-gray-800',
      },
      pad: {
        default: 'w-full rounded-100',
      },
    },
    defaultVariants: {
      variant: 'default',
      pad: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.ElementType
  field?: ControllerRenderProps
  button?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, pad, type, children, button, icon: Icon, ...props }, ref) => {
    const { error } = useFormField()

    return (
      <div
        className={cn(
          inputVariants({ variant, pad, className }),
          {
            'border-error shadow-error/15 focus-within:border-transparent': error,
            '!ps-3': Icon,
          },
          [
            'border-[1.5px] shadow-none', //overrides
          ]
        )}
      >
        {Icon ? <Icon className="iconify-normal -my-2 text-2xl text-gray-600" /> : null}

        <input
          className={clsx(
            'h-12 w-full px-3 text-size_input text-gray-800 transition-colors placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed disabled:!opacity-50',
            {
              '!ps-0': Icon,
              '!pe-0': children,
            }
          )}
          type={type}
          ref={ref}
          {...props}
        />

        {children ? (
          <Paragraph size="size_input" className="-my-2 w-fit flex-none pe-3 ps-1 text-gray-600">
            {children}
          </Paragraph>
        ) : null}

        {button ? button : null}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
