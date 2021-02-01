import axios from 'axios'

export default async (id) => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.get(`${API_BASE_URL}/coffee/${id}`)

  return data
}
