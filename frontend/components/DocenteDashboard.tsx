'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from 'lucide-react'

export function DocenteDashboard() {
  const [archivo, setArchivo] = useState<File | null>(null)
  const [cronograma, setCronograma] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  const subirContenido = async () => {
    if (!archivo || !cronograma.trim()) return
    
    setCargando(true)
    setError('')
    const formData = new FormData()
    formData.append('archivo', archivo)
    formData.append('cronograma', cronograma)

    try {
      const res = await fetch('http://localhost:3001/api/docente/subir', {
        method: 'POST',
        body: formData,
      })
      
      if (!res.ok) throw new Error('Error en la respuesta del servidor')
      
      const data = await res.json()
      setMensaje(data.message)
      // Limpiar el formulario
      setArchivo(null)
      setCronograma('')
    } catch (error) {
      console.error('Error al subir contenido:', error)
      setError('Error al subir el contenido. Por favor, intenta de nuevo.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Subir Material Educativo</h2>
          <Input
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArchivo(e.target.files?.[0] || null)}
            className="flex-1"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Cronograma</h2>
          <Textarea
            placeholder="Describe el cronograma del curso..."
            value={cronograma}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCronograma(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        <Button 
          onClick={subirContenido}
          disabled={cargando || !archivo || !cronograma.trim()}
          className="w-full sm:w-auto"
        >
          <Upload className="w-4 h-4 mr-2" />
          Subir Contenido
        </Button>

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
            {error}
          </div>
        )}

        {mensaje && !error && (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg">
            {mensaje}
          </div>
        )}

        {cargando && (
          <div className="text-center text-muted-foreground animate-pulse">
            Subiendo...
          </div>
        )}
      </div>
    </div>
  )
}

