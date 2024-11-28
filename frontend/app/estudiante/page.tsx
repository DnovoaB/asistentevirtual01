'use client'

import { EstudianteDashboard } from "@/components/ui/EstudianteDashboard"

export default function EstudiantePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Portal del Estudiante</h1>
      <EstudianteDashboard />
    </div>
  )
}

