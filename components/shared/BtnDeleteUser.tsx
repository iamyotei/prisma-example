'use client'

import { deleteUsers } from '@/app/actions/DeleteUsers'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

interface DeleteUserProps {
  userId: string
}

export function BtnDeleteUser({ userId }: DeleteUserProps) {
  const handleDelete = async () => {

    const result = await deleteUsers(userId)

    if (result.success && result.user) {
      toast.success("Пользователь успешно удален")
      // formRef.current?.reset()
    } else {
      toast.warning("Ошибка удаления пользователя")
    }
  }

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleDelete}
      type="button"  
    >
      <Trash className="h-4 w-4" />
    </Button>
  )
}