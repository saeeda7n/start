import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const paragraphVariants = cva('', {
  variants: {
    size: {
      size_title_lg: 'text-size_title_lg_mb sm:text-size_title_lg_ds',
      size_title_md: 'text-size_title_md_mb sm:text-size_title_md_ds',
      size_title_sm: 'text-size_title_sm_mb sm:text-size_title_sm_ds',
      size_body_lg: 'text-size_body_lg_mb sm:text-size_body_lg_ds',
      size_body_sm: 'text-size_body_sm_mb sm:text-size_body_sm_ds',
      size_button_lg: 'text-size_button_lg_mb sm:text-size_button_lg_ds',
      size_button_sm: 'text-size_button_sm_mb sm:text-size_button_sm_ds',
      size_label: 'text-size_label',
      size_input: 'text-size_input',
      size_caption: 'text-size_caption',
    },

    textModel: {
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
      secondary700: 'text-secondary-700',
      secondary800: 'text-secondary-800',

      error: 'text-error',
      success: 'text-success',
      info: 'text-info',
    },
  },
})

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  icon?: React.JSX.Element | string
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, size, icon, textModel, content, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={clsx(paragraphVariants({ size, className, textModel }), {
          'flex w-full items-center gap-2': icon,
        })}
      >
        {icon && icon}
        {content}
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
