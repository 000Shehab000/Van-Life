export async function getVans() {
  const res = await fetch('/api/vans')
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
