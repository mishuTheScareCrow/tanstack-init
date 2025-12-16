import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
       <nav className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex gap-2">
           <Link to="/">
             <Button variant="ghost">Logout</Button>
           </Link>
        </div>
      </nav>
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-4 text-muted-foreground">Welcome to your dashboard.</p>
      </div>
    </div>
  )
}
