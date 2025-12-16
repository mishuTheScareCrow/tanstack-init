import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex gap-2">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to the App
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          This is a landing page. Please login or register to continue.
        </p>
        <div className="flex gap-4">
          <Link to="/login">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
