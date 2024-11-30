'use client'

import { Button } from '@/components/ui/Button/Button'
import { useFormField } from '@/components/ui/Form'
import type { InputProps } from '@/components/ui/Input/Input'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, useState } from 'react'
import type { ControllerRenderProps } from 'react-hook-form'
import TablerEye from '~icons/tabler/eye'
import TablerEyeOff from '~icons/tabler/eye-off'
import { cn } from '@/lib/utils'

const inputVariants = cva(
  'relative flex w-full items-center focus-within:border-primary disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'overflow-hidden border-2 border-transparent bg-gray-50',
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

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  field?: ControllerRenderProps
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, pad, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const disabled = props.value === '' || props.value === undefined || props.disabled

    const { error } = useFormField()

    return (
      <div
        className={cn(
          inputVariants({ variant, pad, className }),
          {
            'border-error shadow-error/15 focus-within:border-error focus-within:ring-transparent':
              error,
          },
          [
            'border-[1.5px] shadow-none', //overrides
          ]
        )}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          className="w-full bg-transparent py-4 pe-1 ps-3 text-size_input text-gray-800 transition-colors placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed"
          ref={ref}
          {...props}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="-my-2 h-full w-fit flex-none p-3 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <TablerEye className="text-lg" />
          ) : (
            <TablerEyeOff className="text-lg" />
          )}

          <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
