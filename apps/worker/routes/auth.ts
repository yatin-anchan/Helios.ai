import { Hono } from 'hono'

const auth = new Hono()

// TEMP in-memory users (we'll replace later with DB)
const users: any[] = []

// Register
auth.post('/register', async (c) => {
  const { name, email, password } = await c.req.json()

  const existing = users.find(u => u.email === email)
  if (existing) {
    return c.json({ error: 'User already exists' }, 400)
  }

  users.push({ name, email, password })

  return c.json({ message: 'User registered' })
})

// Login
auth.post('/login', async (c) => {
  const { email, password } = await c.req.json()

  const user = users.find(u => u.email === email && u.password === password)

  if (!user) {
    return c.json({ error: 'Invalid credentials' }, 401)
  }

  return c.json({
    message: 'Login successful',
    user: { name: user.name, email: user.email }
  })
})

export default auth