(async () => {
  const setCookie = await fetch('http://localhost:8000/api/cookie', {
    withCredentials: true,
    mode: 'cors'
  })

  console.log(await setCookie.text())

  const readCookie = await fetch('http://localhost:8000/api/read-cookie', {
    withCredentials: true,
    mode: 'cors'
  })

  console.log(await readCookie.text())
})()