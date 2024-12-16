import { Navbar } from '@/components/Navbar'

export default function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Search Results</h1>
        <p className="mb-4">You searched for: &quot;{query}&quot;</p>
        <p>This is where you would display your search results.</p>
      </main>
    </div>
  )
}

