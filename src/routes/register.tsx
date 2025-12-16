import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

import { Github } from 'lucide-react'

// ... imports

function RegisterPage() {
  const navigate = useNavigate()

  const handleMagicLink = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration via magic link
    navigate({ to: '/dashboard' })
  }

  const handleGoogleRegister = () => {
     // Simulate Google Register
     navigate({ to: '/dashboard' })
  }

  const handleGithubRegister = () => {
    // Simulate GitHub Register
    navigate({ to: '/dashboard' })
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Create an account using Magic Link or social providers.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col gap-2">
            <Button variant="outline" onClick={handleGoogleRegister} className="w-full">
              Register with Google
            </Button>
            <Button variant="outline" onClick={handleGithubRegister} className="w-full">
              <Github className="mr-2 h-4 w-4" /> Register with GitHub
            </Button>
          </div>
           <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <form onSubmit={handleMagicLink}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <Button type="submit" className="w-full">
                Sign up with Magic Link
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
