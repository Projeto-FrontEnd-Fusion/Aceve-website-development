export async function loginRequest(data: { email: string; password: string }) {
  const res = await fetch(" ", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
