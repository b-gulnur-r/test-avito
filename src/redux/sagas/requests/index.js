import axios from "axios"

export const requestFetchNews = async () => {
  const { data } = await axios.get( 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100')
  const result = await Promise.all(
    data.map(async (id) => {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )

      return { ...response.data }
    })
  )
  return result
}