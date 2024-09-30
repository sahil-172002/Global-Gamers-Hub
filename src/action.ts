"use server"
import { databases } from "./app/appwrite"

export const getData =async (tag: string) => {
  console.log("tag", tag);
    const API_KEY = process.env.CLASH_OF_CLANS_API_KEY

if (!API_KEY) {
  throw new Error('CLASH_OF_CLANS_API_KEY is not set in environment variables')
}
try {
    const response = await fetch(
      `https://cocproxy.royaleapi.dev/v1/players/%23${tag}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching player data:', error)
    return { error: 'Failed to fetch player data' }
  }
}




