export async function fetchStrapi(path) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        }
      }
    )
  
    return res.json()
  }