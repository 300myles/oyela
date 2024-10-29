const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY; // Set your Unsplash access key in .env

export const generateImage = async (title: string) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(title)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return data.results[0]?.urls?.regular || null;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
