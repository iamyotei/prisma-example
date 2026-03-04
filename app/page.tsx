import { UserAddForm } from "@/components/shared/UsersForm";
import { prisma } from "./lib/prisma";
import { UsersList } from "@/components/shared/UsersList";

export default async function Home() {
  const users = await prisma.user.findMany()

  return (
    <main className="grid grid-cols-12 gap-8 my-8 mx-8">

      <div className="col-span-3">
        <UserAddForm />
      </div>

      <div className="col-span-9">
        <UsersList users={users} />
      </div>

    </main>
  );
}
