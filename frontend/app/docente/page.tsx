'use client'

import { DocenteDashboard } from "@/components/DocenteDashboard"

export default function DocentePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Portal del Docente</h1>
      <DocenteDashboard />
    </div>
  )
}

