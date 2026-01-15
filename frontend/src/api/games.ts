export const getGames = async (search?: string) => {
  try {
    const baseUrl = `${import.meta.env.VITE_API_URL}/list`;

    const query = search?.trim();
    const url = query
      ? `${baseUrl}?search=${encodeURIComponent(query)}`
      : baseUrl;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response: status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
    return [];
  }
};
