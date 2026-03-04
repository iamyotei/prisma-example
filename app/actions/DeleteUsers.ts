'use server'

import { prisma } from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteUsers(userId: string) {

    try {
        // Проверяем, существует ли пользователь
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        })

        if (!existingUser) {
            return {
                success: false,
                error: 'Пользователь не найден'
            }
        }

        const user = await prisma.user.delete({
            where: { id: userId }
        })

        // Обновляем кеш после создания
        revalidatePath('/')

        return { success: true, user }
    } catch (error) {
        console.error("Error deletion user:", error)
        return { success: false, error: String(error) }
    }
}