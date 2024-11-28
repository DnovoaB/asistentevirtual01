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
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Estudiantes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Accede a recursos educativos y asistencia personalizada
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/estudiante" passHref legacyBehavior>
                  <Button className="w-full" asChild>
                    <a>Ingresar como Estudiante</a>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Docentes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gestiona contenidos y monitorea el progreso
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/docente" passHref legacyBehavior>
                  <Button className="w-full" asChild>
                    <a>Ingresar como Docente</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

