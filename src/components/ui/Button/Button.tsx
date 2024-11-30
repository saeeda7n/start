import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import clsx from 'clsx'
import SvgSpinners3DotsFade from '~icons/svg-spinners/3-dots-fade.jsx'

const buttonVariants = cva(
  'inline-flex h-12 select-none items-center justify-center gap-2 whitespace-nowrap rounded-100 px-4 outline-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none',
  {
    variants: {
      loading: {
        true: '',
        false: '',
      },
      variant: {
        chart: '!h-12 !px-4 !py-0 text-gray-800 ring-1 ring-gray-200 !typo-desk-body-sm',
        default:
          'bg-gradient-to-b from-gradientPrimaryFrom to-gradientPrimaryTo text-primary-900 hover:from-primary hover:to-primary focus:from-primary-600 focus:to-primary-600 disabled:bg-gradient-to-b disabled:from-gradientPrimaryDisabledFrom disabled:to-gradientPrimaryDisabledTo disabled:text-gray-500',
        secondary:
          'border-2 border-primary-700 bg-transparent text-primary-700 hover:bg-primary-50 focus:border-primary-800 focus:bg-primary-100 focus:text-primary-800 disabled:border-gray-400 disabled:text-gray-400',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: '!p-0 text-size_button_sm text-secondary underline-offset-4 hover:underline',
        outlined:
          '!rounded-100 border-2 border-primary text-gray-800 hover:bg-primary-50 focus:bg-primary-100',
        chip: 'h-[30px] rounded-full bg-gray-200 !px-3 text-gray-800 !typo-mob-body-sm md:h-[42px] md:!px-4 md:!typo-desk-body-sm',
        chipActive:
          'from h-[30px] rounded-full bg-gradient-to-b from-[#5C96E6] to-[#3577D4] !px-3 text-gray-50 !typo-mob-body-sm md:h-[42px] md:!px-4 md:!typo-desk-body-sm',
        fileAction:
          'flex !size-10 items-center justify-center rounded-100 bg-transparent !p-0 ring-1 ring-gray-300',
      },
      size: {
        default: 'px-6 py-3 typo-desk-button-sm md:typo-desk-button-lg',
        md: 'px-6 py-3.5 text-size_button_lg_mb sm:text-size_button_lg_ds',
        baner: 'px-6 py-4 text-size_button_lg_mb sm:text-size_button_lg_ds',
        sm: 'h-10 py-2 text-button-sm-ds',
        icon: 'h-9 w-9 text-xl',
        link: 'sm:size_button_lg_ds size_button_lg_mb',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      loading: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={clsx(buttonVariants({ variant, size }), className)} ref={ref} {...props}>
        {loading ? <SvgSpinners3DotsFade className="my-0.5 text-lg" /> : children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
