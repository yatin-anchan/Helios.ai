import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Backend working 🚀' })
})

app.get('/api/hello', (c) => {
  return c.json({ reply: 'Hello from backend 👋' })
})

export default app