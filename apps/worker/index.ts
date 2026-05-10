import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS so your Astro app can talk to this Worker
app.use('/api/*', cors())

app.post('/api/chat', async (c) => {
  const body = await c.req.json()
  const message = body.message

  return c.json({
    reply: `You said: ${message}`
  })
})

export default app