export default function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then(async (Response) => {
    const jsonResponse = await Response.json();
    if (Response.ok) return jsonResponse;
    throw new Error(JSON.stringify(jsonResponse));
  });
}
