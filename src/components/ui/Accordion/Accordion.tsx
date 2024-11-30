'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'
import LucideChevronDown from '~icons/lucide/chevron-down'

import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { AccordionStatusEnum } from '@/data/enums/ui'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  title?: string
  status?: AccordionStatusEnum
}

interface AccordionTriggerProps {
  title: string
  icon: React.ElementType
  status?: AccordionStatusEnum
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & AccordionItemProps
>(({ status = AccordionStatusEnum.SUCCESS, className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'mt-6 flex flex-col items-center gap-2 rounded-150 border-2 border-gray-200 bg-gray-50 p-6 data-[state=open]:border-2 data-[state=open]:bg-gray-50',
      className,
      {
        'data-[state=open]:border-primary data-[state=open]:shadow-success':
          status === AccordionStatusEnum.SUCCESS,
      },
      {
        'data-[state=open]:!border-secondary data-[state=open]:!shadow-error':
          status === AccordionStatusEnum.ERROR,
      }
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & AccordionTriggerProps
>(({ status = AccordionStatusEnum.SUCCESS, icon: Icon, title, className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between transition-all [&[data-state=open]>.trigger-icon]:rotate-180',
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-5">
      <div
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-3600 text-xl text-gray-50',
          {
            'bg-primary-700': status === AccordionStatusEnum.SUCCESS,
          },
          {
            'bg-secondary-700': status === AccordionStatusEnum.ERROR,
          }
        )}
      >
        <Icon />
      </div>

      <Paragraph
        content={title}
        className={cn(
          {
            'text-primary-700': status === AccordionStatusEnum.SUCCESS,
          },
          {
            'text-secondary-700': status === AccordionStatusEnum.ERROR,
          }
        )}
        size="size_title_md"
      />
    </div>

    <LucideChevronDown className="trigger-icon shrink-0 text-xl text-gray-800 transition-transform duration-200" />
  </AccordionPrimitive.Trigger>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="w-full overflow-hidden pl-[60px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('text-body_sm_mb sm:text-body_sm_ds w-full text-gray-700', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
