import type { NextApiHandler } from 'next'

const handler: NextApiHandler = (_req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({ message: 'OK' })
}

export default handler
