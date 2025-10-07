export const requestForTest = <T>(bodyContent?: T) => new Request("http://localhost:3000/api/submit-volunteer", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: bodyContent ? JSON.stringify(bodyContent) : null
})

