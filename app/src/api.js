export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : '/api/vans'
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('Failed to fetch vans')
    error.status = res.status
    error.statusText = res.statusText
    throw error
  }
  const data = await res.json()
  if (!data.vans || !Array.isArray(data.vans)) {
    throw new Error('Failed to fetch vans')
  }

  return data.vans
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('Failed to fetch vans')
    error.status = res.status
    error.statusText = res.statusText
    throw error
  }
  const data = await res.json()
  if (!data.vans || !Array.isArray(data.vans)) {
    throw new Error('Failed to fetch vans')
  }

  return data.vans
}
