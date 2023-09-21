import { TUser } from "../../interfaces/user";
import { usersEndpoint } from "../../lib/constants";

export default async function Home() {
  const users: TUser[] | undefined = await fetch(usersEndpoint)
    .then((value) => value.json())
    .then((res) => {
      console.log(res);
      
      return res.data});

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-24 p-24">
      <h1 className="text-3xl font-semibold">This is the wall of people</h1>
      <div className="flex flex-col gap-2 rounded-2xl border p-3 border-zinc-300">
        <p>These are from the API</p>
        {users && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {users.map((user, i) => {
              const name = user.name || `${user.firstName} ${user.lastName}`;
              return (
                <div key={i} className="p-3 bg-zinc-100 border rounded-lg">
                  <p className="text-xs text-zinc-400">{user.id}</p>
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        )}

        {!users && (
          <div>
            <p>There is no users</p>
          </div>
        )}
      </div>
    </main>
  );
}
