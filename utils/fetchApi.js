import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '33ace65ae7msha24fe40ed06d6b1p16f146jsn9cf7a51fb1ac'
  },
  });
    
  return data;
}