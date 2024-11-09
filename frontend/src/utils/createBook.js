import { v4 as uuidv4 } from 'uuid'

export const createBook = ({ title, author }, source) => {
  return {
    title,
    author,
    id: uuidv4(),
    source,
  }
}
