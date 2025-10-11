import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getData<T>(endpoint: string): Promise<T> {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
}
