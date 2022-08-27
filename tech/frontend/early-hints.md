# Early Hints
## Early Hints とは?
- HTTP Status Code (103 Early Hints)
 - used to send a preliminary HTTP response ahead of a final response.
 - StylesheetとかJavaScriptとか先に返しちゃう
 - Largest Contentful Paint とか First Meaningful Paint とかの改善に使えるかも
 - 最初のHTML返すのに時間がかかるうようなケースで有効(DB アクセスが必要だったり)


## Alternatives
- link rel = preload
- link rel-preconnect

## Browser Support 
- Chrome: version 103


## Server Support
- Apache: supported via mod_http2
- H2O: supported
- Nginx: experimental module
- Node: not yet supported by core. Available as a draft plugin for Fastify
  - https://www.npmjs.com/package/fastify-early-hints



## CDN Support
- Cloudflare
- Fastly


