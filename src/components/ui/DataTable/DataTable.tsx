'use client'

import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table/Table'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  fixed?: boolean
  className?: string
  parentClassName?: string
  border?: boolean
  bgNew?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  bgNew = false,
  fixed,
  border = true,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const t = useTranslations('Table')

  return (
    <div
      className={clsx('w-full rounded-200 p-4', {
        'border border-gray-200': border,
        'bg-new': bgNew,
      })}
    >
      <Table
        className={clsx(
          className,
          'border-separate border-spacing-y-2 overflow-hidden rounded-150 bg-gray-50 md:w-full',
          {
            'md:table-fixed': fixed,
          },
          {
            'bg-new': bgNew,
          }
        )}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="border-b border-b-gray-200 py-2 pb-4 text-size_body_sm_mb text-gray-600 first:rounded-tl-100 last:rounded-tr-100 sm:text-size_body_sm_ds"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={clsx('hover:bg-new border-none', {
                  'bg-new': index % 2 === 0 && !bgNew,
                  'bg-gray-50': index % 2 !== 0 && bgNew,
                })}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="py-4 text-size_body_lg_mb text-gray-800 first:rounded-s-100 last:rounded-e-100 sm:text-size_body_lg_mb"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 py-4 text-center text-size_body_lg_mb text-gray-600 sm:text-size_body_lg_mb"
              >
                {t('nodata')}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
