'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { sendQuestion, uploadImage } from '@/lib/api'
import { Calculator, ImageIcon, Loader2 } from 'lucide-react'

export function EstudianteDashboard() {
  const [pregunta, setPregunta] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [imagen, setImagen] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePregunta = async () => {
    if (!pregunta.trim()) {
      setError('Por favor, escribe una pregunta matemática.')
      return
    }

    setIsLoading(true)
    setError('')
    setRespuesta('')

    try {
      const response = await sendQuestion(pregunta)
      if (response.error) {
        throw new Error(response.error)
      }
      setRespuesta(response.respuesta.trim())
    } catch (error) {
      console.error('Error:', error)
      setError('Error al procesar la pregunta. Por favor, intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImagen(e.target.files[0])
      setError('')
    }
  }

  const handleImagenSubmit = async () => {
    if (!imagen) {
      setError('Por favor, selecciona una imagen con una fórmula matemática.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await uploadImage(imagen)
      setRespuesta(response.resultado)
    } catch (error) {
      console.error('Error:', error)
      setError('Error al procesar la imagen. Por favor, intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Asistente Matemático</h2>
          <p className="text-sm text-muted-foreground">
            Escribe una operación matemática o pregunta relacionada con matemáticas
          </p>
          <Textarea
            placeholder="Ejemplo: ¿Cuál es la raíz cuadrada de 16? o 12 * 4 = 48"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            className="min-h-[100px]"
            disabled={isLoading}
          />
          <Button 
            onClick={handlePregunta} 
            disabled={isLoading || !pregunta.trim()}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Calculando...
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4 mr-2" />
                Resolver
              </>
            )}
          </Button>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Procesar Imagen</h2>
          <p className="text-sm text-muted-foreground">
            Sube una imagen clara de una fórmula o problema matemático
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImagenChange}
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              onClick={handleImagenSubmit}
              disabled={isLoading || !imagen}
              variant="secondary"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Analizar
                </>
              )}
            </Button>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
            {error}
          </div>
        )}

        {respuesta && !error && (
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Respuesta:</h3>
            <p className="whitespace-pre-wrap">{respuesta}</p>
          </div>
        )}
      </div>
    </div>
  )
}

