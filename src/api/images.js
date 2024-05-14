import axios from "axios";

const fetchImages = async (query, pageNumber) => {
  const apiKey = "7-zRRvo0pOdCKtI8G3RKr20ltF-NpPuC4e8ly9PWA3c";
  const params = {
    client_id: apiKey,
    query,
    orientation: "landscape",
    page: pageNumber,
    per_page: 15,
  };

  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params,
  });

  return data;
};

export { fetchImages };
