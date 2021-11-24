import { NextApiRequest, NextApiResponse } from 'next'

export default function handlexr(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' })
}