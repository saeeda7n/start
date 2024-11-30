import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ReactElement, useId, useState } from 'react'
import { cn } from '@/lib/utils'
import Eye from '~icons/tabler/eye'
import EyeOff from '~icons/tabler/eye-off'

const inputContainer = cva(
  [
    'flex rounded-100 shadow-soft', //temporary
    'w-full overflow-hidden bg-gray-50',
    'relative',
    'shadow-none ring-1', //override
  ],
  {
    variants: {
      color: {
        error: [
          'text-error ring-error',
          'border-error focus-within:ring-error', //override
        ],
        success: [
          'text-success ring-success',
          'border-success text-gray-600 focus-within:ring-success', //override
        ],
        default: [
          'text-gray-600 shadow-black/5 ring-primary',
          'ring-gray-200 focus-within:ring-primary', //override
        ],
        none: [
          'text-gray-600 shadow-none ring-transparent',
          'border-transparent', //override
        ],
      },
      variant: {
        default: [
          'focus-within:ring-1',
          // 'border focus-within:ring-0', //override
        ],
      },
      size: {
        default: ['h-12 typo-desk-body-sm'],
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
      color: 'default',
    },
  }
)

const inputElement = cva(['flex-1 bg-transparent p-2 px-3', 'disabled:opacity-60'], {
  variants: {
    color: {
      error: [
        'text-error ring-error',
        'border-error',
        'text-gray-900', //override
      ],
      success: ['text-success ring-success', 'border-success'],
      default: ['text-gray-900 ring-primary', 'border-primary'],
      none: ['text-gray-900 ring-transparent', 'border-transparent'],
    },
  },
  defaultVariants: {
    color: 'none',
  },
})

const iconContainer = cva(['flex h-full w-8 flex-shrink-0 items-center'], {
  variants: {
    hasPrefixIcon: {
      true: '',
    },
    hasSuffixIcon: {
      true: 'ms-auto',
    },
  },
  defaultVariants: {},
})

type TInputProps = {
  visiblePassword?: 'prefix' | 'suffix'
  prefixIcon?: ReactElement
  suffixIcon?: ReactElement
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputContainer> &
  Pick<VariantProps<typeof inputElement>, 'color'>

export default function Input({
  type: Type,
  className,
  prefixIcon,
  suffixIcon,
  visiblePassword,
  color,
  variant,
  id,
  ...props
}: TInputProps) {
  const _id = useId()
  id = id || _id
  const [isVisible, setIsVisible] = useState(false)
  const [type] = useState(() => Type)
  const inputClassNames = inputContainer({ color, variant })
  const iconContainerClassNames = iconContainer({})

  const PasswordToggle = (
    <div onClick={() => setIsVisible((p) => !p)} className={iconContainerClassNames} role="button">
      {isVisible ? <EyeOff className="size-6" /> : <Eye className="size-6" />}
    </div>
  )
  const PrefixIcon =
    visiblePassword === 'prefix'
      ? PasswordToggle
      : prefixIcon && (
          <label htmlFor={id} className={cn('justify-end', iconContainerClassNames)}>
            {prefixIcon}
          </label>
        )

  const SuffixIcon =
    visiblePassword === 'suffix'
      ? PasswordToggle
      : suffixIcon && (
          <label htmlFor={id} className={cn('justify-start', iconContainerClassNames)}>
            {suffixIcon}
          </label>
        )

  const inputElementClassNames = inputElement({
    color,
  })

  return (
    <div className={cn(inputClassNames, className)}>
      {PrefixIcon}
      <input
        id={id}
        type={isVisible ? (type === 'password' ? 'text' : type) : type}
        className={cn(
          'w-full border-none placeholder-gray-600 outline-none typo-desk-body-sm',
          inputElementClassNames
        )}
        {...props}
      />
      {SuffixIcon}
    </div>
  )
}
