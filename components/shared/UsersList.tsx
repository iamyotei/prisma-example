// import { User } from '@prisma/client'
import { BtnDeleteUser } from './BtnDeleteUser'

interface User {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
}

interface UserTableProps {
    users: User[]  // принимаем массив users
}

export function UsersList({ users }: UserTableProps) {

    return (

        <div>
            <h2 className="font-bold mb-2">Users table:</h2>

            <table className="mb-8 w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b border-gray-200">

                            <td className="py-1 px-2">{user.id}</td>
                            <td className="py-1 px-2">{user.name}</td>
                            <td className="py-1 px-2">{user.email}</td>
                            <td className="py-1 px-2 ">{user.password}</td>
                            <td className="py-1 px-2">{new Date(user.createdAt).toLocaleDateString('ru-RU')}</td>
                            <td className="py-1 px-2">
                                <BtnDeleteUser userId={user.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}