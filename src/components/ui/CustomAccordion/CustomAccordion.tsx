'use client'

import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { cn } from '@/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import * as React from 'react'
import LucideChevronDown from '~icons/lucide/chevron-down'

interface AccordionTriggerProps {
  title: string
  secondTitle?: string
  icon?: React.ElementType
}

const CustomAccordion = AccordionPrimitive.Root

const accordionItemVariants = cva('flex flex-col items-center rounded-150 bg-primary-75 p-4', {
  variants: {
    variant: {
      default: 'gap-6 bg-primary-75',
      secondary: 'gap-4 bg-gray-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CustomAccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  CustomAccordionItemProps
>(({ variant, className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
))
CustomAccordionItem.displayName = 'CustomAccordionItem'

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & AccordionTriggerProps
>(({ icon: Icon, title, secondTitle, className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between transition-all [&[data-state=open]>.trigger-icon-container>.trigger-icon]:rotate-180',
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      {Icon && <Icon className="iconify-normal text-xl text-primary-900" />}

      <Paragraph
        content={title}
        textModel="gray900"
        size={Icon ? 'size_body_lg' : 'size_title_md'}
      />
    </div>

    <div className="trigger-icon-container flex items-center gap-2">
      <Paragraph content={secondTitle} textModel="gray800" size="size_body_lg" />
      <LucideChevronDown className="trigger-icon shrink-0 text-xl text-gray-800 transition-transform duration-200" />
    </div>
  </AccordionPrimitive.Trigger>
))
CustomAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="w-full overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('space-y-6', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
CustomAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { CustomAccordion, CustomAccordionContent, CustomAccordionItem, CustomAccordionTrigger }
