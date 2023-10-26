import { type Express } from 'express'

export default (app: Express): void => {
  app.get('', (req, res) => {
    res.status(200).send({ message: 'Template criado por @Luiz1nn' })
  })
}
