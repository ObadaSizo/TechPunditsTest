import postsData from '../../data/posts.json'

export async function getPosts() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return postsData.posts
}