'use client'

import { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

interface Props {
  title: string
  description?: string
  confirmBtn?: string
  cancelBtn?: string
  triggerBtn: ReactNode
  onConfirm: () => void
}

export const ConfirmationDialog = ({
  title = '¿Estás seguro?',
  description = 'Esta acción no se puede deshacer.',
  confirmBtn = 'Confirmar',
  cancelBtn = 'Cancelar',
  triggerBtn,
  onConfirm
}: Props) => {
  const handleConfirm = () => {
    onConfirm()
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerBtn}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelBtn}</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {confirmBtn}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
