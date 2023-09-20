'use client'
import { InputModal } from '@/components/input-modal'
import { columns, type Review } from '@/components/reviews/columns'
import { DataTable } from '@/components/reviews/data-table'
import { useReviews } from '@/state/use-reviews'
import { useState, useEffect } from 'react'

export default function Home() {
  const { reviews } = useReviews()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <main className='flex justify-center items-center h-full w-full'>
      <div className='flex flex-col items-start p-8'>
        <div className='pb-4 z-50 '>
          <InputModal />
          <div></div>
        </div>
        <DataTable columns={columns} data={reviews} />
      </div>
    </main>

  )
}