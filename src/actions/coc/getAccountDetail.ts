"use server";
export const getData = async (tag: string) => {
  const API_KEY = process.env.CLASH_OF_CLANS_API_KEY;

  if (!API_KEY) {
    throw new Error(
      "CLASH_OF_CLANS_API_KEY is not set in environment variables"
    );
  }

  try {
    const response = await fetch(
      `https://cocproxy.royaleapi.dev/v1/players/%23${tag}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Check for 404 response before parsing JSON
    if (response.status === 404) {
      return { error: "Invalid tag" };
    }

    // Assuming response is OK, parse JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching player data:", error);
    return { error: "Failed to fetch player data" };
  }
};
