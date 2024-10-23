import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
	console.log(c);
	const body =  c.req.json()
	console.log(body);
	console.log(c.req.header("Authorization"));
	console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})

app.post('/', (c) => {
	console.log(c);
	const body =  c.req.json()
	console.log(body);
	console.log(c.req.header("Authorization"));
	console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})

export default app
