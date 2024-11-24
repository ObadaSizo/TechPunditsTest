import authors from '../../data/authors.json'

export async function getAuthors() {
  return authors.authors
}

export async function getAuthorByName(name: string) {
  const authors = await getAuthors()
  return authors.find(author => author.name === name)
} 