import { auth } from '@/auth'

export default async function Page({ params }) {
  const userId = (await params).id
  const session = await auth()
  const userRes = await fetch(`${process.env.NEXT_PUBLIC_USERS_URL}/${userId}`)
  const user = await userRes.json();

  return (
    <>
      <h1>Profile page</h1>
    </>
  )
}
