'use client'

import Link from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, LogOut, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function DocenteDashboard() {
  const [archivos, setArchivos] = useState<File[]>([])
  const [cronograma, setCronograma] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')
  const router = useRouter()

  // Función para manejar la subida de archivos
  const subirContenido = async () => {
    if (archivos.length === 0 || !cronograma.trim()) return

    setCargando(true)
    setError('')

    const formData = new FormData()
    archivos.forEach((archivo) => formData.append('archivo', archivo))
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
      setArchivos([])
      setCronograma('')
    } catch (error) {
      console.error('Error al subir contenido:', error)
      setError('Error al subir el contenido. Por favor, intenta de nuevo.')
    } finally {
      setCargando(false)
    }
  }

  // Función para manejar la selección de archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      let validFiles: File[] = []
      let hasError = false

      Array.from(selectedFiles).forEach((file) => {
        if (file.size <= 20 * 1024 * 1024 && validFiles.length < 3) {
          validFiles.push(file)
        } else {
          hasError = true
        }
      })

      if (hasError) {
        setError('Solo se permiten archivos de hasta 20MB y un máximo de 3 archivos.')
      }
      setArchivos((prevFiles) => [...prevFiles, ...validFiles])
    }
  }

  // Función para eliminar un archivo
  const handleRemoveFile = (index: number) => {
    setArchivos(archivos.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Subir Material Educativo</h2>
          <div className="relative">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="cursor-pointer hidden"
              id="file-upload"
              disabled={archivos.length >= 3}
            />
            <label
              htmlFor="file-upload"
              className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {archivos.length >= 3 ? (
                'Límite de archivos alcanzado'
              ) : (
              'Elegir archivos')}
            </label>
          </div>
          {archivos.length > 0 && (
            <div className="mt-2">
              {archivos.map((archivo, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>Archivo {index + 1}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveFile(index)}
                    className="ml-2"
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          {error && (
            <div className="p-4 bg-destructive/10 text-destructive rounded-lg mt-2">
              {error}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Cronograma</h2>
          <Textarea
            placeholder="Descripción del cronograma del curso..."
            value={cronograma}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCronograma(e.target.value)}
            className="min-h-[150px]"
          />
        </div>

        <Button
          onClick={subirContenido}
          disabled={cargando || archivos.length === 0 || !cronograma.trim()}
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Upload className="w-4 h-4 mr-2" />
          {'Subir Sesión'}
        </Button>

        {mensaje && !error && (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg mt-4">
            {mensaje}
          </div>
        )}

        {cargando && (
          <div className="text-center text-muted-foreground animate-pulse mt-4">
            Subiendo...
          </div>
        )}
      </div>
    </div>
  )
}
