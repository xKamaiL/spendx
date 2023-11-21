import { cookies } from 'next/headers'

export async function GET(
  request: Request,
  { params: { action } }: { params: { action: string } }
) {
  const { searchParams } = new URL(request.url)

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  fetch('https://api.github.com/users/vercel', {
    headers: {
      Authroization: `token ${token!.value}`,
    },
  })

  return new Response('Hello, Next.js! ' + action, {
    status: 200,
    headers: { 'Set-Cookie': `token=${token!.value}` },
  })
}
