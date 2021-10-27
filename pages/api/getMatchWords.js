import nc from 'next-connect'
import cors from 'cors'

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/rhymes?q=architecte`)
    res.json(response)
  })

export default handler
