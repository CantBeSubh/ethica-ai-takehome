import { InputModal } from '@/components/input-modal'
import { columns, type Review } from '@/components/reviews/columns'
import { DataTable } from '@/components/reviews/data-table'

const data: Review[] = [
  {
    input: "This film stands out in today's cinema landscape. Every scene is thoughtfully crafted, and the characters have depth and nuance. The story flows naturally, keeping viewers engaged. It's a high point in recent movie releases.",
    sentiment: "positive",
    iat: new Date(),
    up: 0,
    down: 0
  },
  {
    input: "This film stands out in today's cinema landscape. Every scene is thoughtfully crafted, and the characters have depth and nuance. The story flows naturally, keeping viewers engaged. It's a high point in recent movie releases.",
    sentiment: "positive",
    iat: new Date(),
    up: 1,
    down: 0
  },
  {
    input: "This film stands out in today's cinema landscape. Every scene is thoughtfully crafted, and the characters have depth and nuance. The story flows naturally, keeping viewers engaged. It's a high point in recent movie releases.",
    sentiment: "positive",
    iat: new Date(),
    up: 2,
    down: 0
  }
]

export default function Home() {
  return (
    <main className='justify-start flex flex-col items-start p-8'>
      <div className='pb-4 z-50'>
        <InputModal />
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  )
}