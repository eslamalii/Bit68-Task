export async function getSliders() {
  const res = await fetch("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
  const data = await res.json()
  return data
}

export async function getProducts(id = "") {
  const res = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products/${id}`
  )
  const data = await res.json()
  return data
}
