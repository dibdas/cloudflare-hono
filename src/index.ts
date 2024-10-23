import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
	// c is the context
	console.log(c);
	const body =  c.req.json()
	console.log(body);
	console.log(c.req.header("Authorization"));
	console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})

app.use(async (c, next) => {
	if (c.req.header("Authorization")) {
	  // Do validation
	  await next()
	} else {
	  return c.text("You dont have acces");
	}
  })

async function middleware(c,next){
	if(c.req.header("Authorization")){
		next()
	}
	else{
		return c.text("you dont exist")
	}
}
app.use(middleware)

app.post('/', (c) => {
	console.log(c);
	const body =  c.req.json()
	console.log(body);
	console.log(c.req.header("Authorization"));
	console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})

export default app
