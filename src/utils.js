export const getImageUrl = (path) => {
    const url = `/assets/${path}`;
    console.log("Generated Image URL:", url); // Log the generated URL
    return url;
  };