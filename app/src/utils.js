import { redirect } from 'react-router-dom'

export async function requireAuth() {
  const isLoggedIn = false

  const response = redirect('/login')
  response.body = true // It's silly, but it works using mirage JS

  if (!isLoggedIn) {
    throw response
  }
}

// it should work while not using mirage JS

// export async function requireAuth() {
//   const isLoggedIn = false

//   if (!isLoggedIn) {
//     throw redirect('/login')
//   }
// }
