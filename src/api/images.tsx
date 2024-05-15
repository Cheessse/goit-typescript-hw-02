import axios, { AxiosResponse } from "axios";

export type FetchImagesParams = {
  query: string;
  pageNumber: number;
};

export type ImageData = {
  id: string;
  urls: {
    small: string;
    alt_description: string;
  };
};

export type FetchImagesResponse = {
  results: ImageData[];
  total: number;
};

const fetchImages = async ({ query, pageNumber }: FetchImagesParams): Promise<FetchImagesResponse> => {
  const apiKey = "7-zRRvo0pOdCKtI8G3RKr20ltF-NpPuC4e8ly9PWA3c";
  const params = {
    client_id: apiKey,
    query,
    orientation: "landscape",
    page: pageNumber,
    per_page: 10,
  };

  try {
    const response: AxiosResponse<FetchImagesResponse> = await axios.get("https://api.unsplash.com/search/photos", {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching images. Please try again.");
  }
};

export { fetchImages };
