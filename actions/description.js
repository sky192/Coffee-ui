import axios from 'axios'

export default async (description) => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.get(`${API_BASE_URL}/${description}`)

  return data
}
