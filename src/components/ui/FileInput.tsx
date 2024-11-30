import { useFormField } from '@/components/ui/Form'
import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import * as React from 'react'
import { type ControllerRenderProps } from 'react-hook-form'

const fileInputVariants = cva(
  'flex text-size_input text-gray-800 transition-colors file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'flex w-full cursor-pointer flex-col items-center justify-center rounded-100 border border-dashed border-gray-300',
        filled: 'bg-gray-100',
        input:
          'flex w-full cursor-pointer flex-col items-center justify-center rounded-100 border-2 border-gray-200 bg-gray-50',
      },
      pad: {
        default: 'w-full rounded-md px-3 py-4',
        larg: 'w-full rounded-md px-3 py-16',
        input: 'w-full rounded-150 px-3 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      pad: 'default',
    },
  }
)

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>,
    VariantProps<typeof fileInputVariants> {
  field?: ControllerRenderProps
  value?: File | null | false
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ value, className, variant, name, pad, ...props }, ref) => {
    const t = useTranslations('FileInput')
    const { setValue, error } = useFormField()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (name) {
        setValue(name, file)
      }
    }

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
      const files = event.dataTransfer.files
      if (files.length > 0) {
        const file = files[0]
        if (name) {
          setValue(name, file)
        }
      }
    }

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
    }

    return (
      <label
        className={clsx(fileInputVariants({ variant, pad, className }), {
          '!border-error': error,
        })}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDrop={handleDrop}
      >
        <Paragraph textModel="primary" size="size_input">
          {!value ? (
            <>
              <span className="text-size_body_lg_ds text-gray-500">{t('first_text')}</span>
              <span className="text-size_body_lg_ds text-primary">{t('second_text')}</span>
              <span className="text-size_body_lg_ds text-gray-500">{t('third_text')}</span>
            </>
          ) : (
            <>
              <span className="text-size_body_lg_ds text-gray-500">{value.name}</span>
            </>
          )}
        </Paragraph>
        <input
          {...props}
          onChange={handleChange}
          className="hidden"
          type="file"
          name={name}
          ref={ref}
        />
      </label>
    )
  }
)
FileInput.displayName = 'FileInput'

export { FileInput }
