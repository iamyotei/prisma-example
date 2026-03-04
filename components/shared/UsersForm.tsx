'use client'

import { createUser } from '@/app/actions/CreateUsers'
import { toast } from "sonner"

export function UserAddForm() {

  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData)

    if (result.success && result.user) {
      toast.success("Пользователь успешно создан")
    } else {
      toast.warning("Ошибка создания пользователя")
    }
  }

  return (
    <div className="mb-8 p-4 border">
      <h3 className="font-bold mb-2">Create user:</h3>

      <form action={handleSubmit} className="space-y-4">

        {/* Данные пользователя */}
        <div className="mb-2">
          <label className="text-sm">
            Username:
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-1 py-1 mb-3"
              placeholder="Введите имя..."
            />
          </label>

          <label className="text-sm">
            E-mail:
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-1 py-1 mb-3"
              placeholder="mail@example.com"
            />
          </label>

          <label className="text-sm">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-md border border-gray-300 px-1 py-1 mb-3"
              placeholder="x8an?fapg!"
            />
          </label>
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          className="text-sm bg-orange-600 text-white px-1 py-1 hover:bg-orange-700 transition-colors">
          Отправить
        </button>
      </form>
    </div>
  )
}