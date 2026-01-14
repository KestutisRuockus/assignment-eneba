export const getAllGames = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/list`);
    if (!response.ok) {
      throw new Error(`Response: status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
    return [];
  }
};
