'use server'

import { prisma } from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createUser(formData: FormData) {
  // Получаем данные из формы
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    // Создаем пользователя с постом (как в твоем примере)
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password, // если есть поле role
      },
    })

    // Обновляем кеш после создания
    revalidatePath('/')

    return { success: true, user }
  } catch (error) {
    console.error("Error creating user:", error)
    return { success: false, error: String(error) }
  }
}