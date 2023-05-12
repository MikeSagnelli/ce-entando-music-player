const FREESOUND_API_KEY = process.env.REACT_APP_FREESOUND_API_KEY
const FREESOUND_BASE_URL = process.env.REACT_APP_FREESOUND_API_BASE_URL

export const fetchFreesound = async (url, search = '') => {
  const response = await fetch(
    `${FREESOUND_BASE_URL}${url}/?token=${FREESOUND_API_KEY}${search}`
  )
  const jsonResponse = await response.json()
  return jsonResponse
}

export const searchSounds = async (query) => {
  const searchParams = [{ name: 'query', value: query }]
  const parsedParams = parseSearchParams(searchParams)
  const url = '/search/text'

  const searchSoundsResponse = await fetchFreesound(url, parsedParams)
  return searchSoundsResponse
}

export const getSoundInformation = async (soundId) => {
  const url = `/sounds/${soundId}`

  const soundInformation = await fetchFreesound(url)
  return soundInformation
}

function parseSearchParams(searchParams = []) {
  return searchParams.reduce(
    (acc, param) => `${acc}&${param.name}=${encodeURIComponent(param.value)}`,
    ''
  )
}
