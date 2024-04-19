(async () => {
  const setCookie = await fetch('https://loud-cod-70.deno.dev/api/cookie', {
    withCredentials: true,
    mode: 'cors'
  })

  console.log(await setCookie.text())

  const readCookie = await fetch('https://loud-cod-70.deno.dev/api/read-cookie', {
    withCredentials: true,
    mode: 'cors'
  })

  console.log(await readCookie.text())
})()