import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const headingVariants = cva('', {
  variants: {
    variant: {
      default: '',
      primary: 'text-primary',
      primary100: 'text-primary-100',
      primary200: 'text-primary-200',
      primary300: 'text-primary-300',
      primary400: 'text-primary-400',
      primary500: 'text-primary-500',
      primary600: 'text-primary-600',
      primary700: 'text-primary-700',
      primary800: 'text-primary-800',
      primary900: 'text-primary-900',

      gray50: 'text-gray-50',
      gray100: 'text-gray-100',
      gray200: 'text-gray-200',
      gray300: 'text-gray-300',
      gray400: 'text-gray-400',
      gray500: 'text-gray-500',
      gray600: 'text-gray-600',
      gray700: 'text-gray-700',
      gray800: 'text-gray-800',
      gray900: 'text-gray-900',

      secondary: 'text-secondary',
      secondary100: 'text-secondary-100',
      secondary200: 'text-secondary-200',
      secondary300: 'text-secondary-300',
      secondary400: 'text-secondary-400',
      secondary500: 'text-secondary-500',
      secondary600: 'text-secondary-600',
    },
  },
})

interface Incoming {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
}

export interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof Incoming
}

const LargeHeading: React.FC<LargeHeadingProps> = ({
  className,
  as,
  children,
  variant,
  ...props
}) => {
  switch (as as string) {
    case 'h1':
      return (
        <h1
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'sm:text-size_heading_1_ds text-size_heading_1_mb'
          )}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'text-size_heading_2_mb sm:text-size_heading_2_ds'
          )}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'text-size_heading_3_mb sm:text-size_heading_3_ds'
          )}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'text-size_heading_4_mb sm:text-size_heading_4_ds'
          )}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'text-size_heading_5_mb sm:text-size_heading_5_ds'
          )}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'text-size_heading_6_mb sm:text-size_heading_6_ds'
          )}
        >
          {children}
        </h6>
      )
    default:
      return (
        <h1
          {...props}
          className={clsx(
            headingVariants({ className, variant }),
            'sm:text-size_heading_1_ds text-size_heading_1_mb'
          )}
        >
          {children}
        </h1>
      )
  }
}

export default LargeHeading
