addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // ルーティングの例
  if (url.pathname === '/') {
    return new Response('こんにちは、世界!', { status: 200 })
  } else if (url.pathname === '/about') {
    return new Response('これはCloudflare Workerアプリの例です。', { status: 200 })
  } else {
    return new Response('見つかりません', { status: 404 })
  }
}
