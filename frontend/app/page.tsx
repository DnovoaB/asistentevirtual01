import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Asistente Virtual
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Plataforma educativa inteligente para estudiantes y docentes
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 text-muted-foreground" />
                <h2 className="mt-4 text-lg font-semibold">Estudiante</h2>
                <p className="text-muted-foreground">Accede a herramientas y recursos de aprendizaje</p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/estudiante">Acceder</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center p-6">
                <GraduationCap className="h-12 w-12 text-muted-foreground" />
                <h2 className="mt-4 text-lg font-semibold">Docente</h2>
                <p className="text-muted-foreground">Gestiona tus clases y comparte material</p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/docente">Acceder</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
