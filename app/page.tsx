import { Sidebar } from '@/components/sidebar/Sidebar'
import { Feed } from '@/components/feed/Feed'

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen px-4 py-6 lg:px-20 lg:py-12 lg:ml-[var(--sidebar-width)]">
        <Feed />
      </main>
    </>
  )
}
