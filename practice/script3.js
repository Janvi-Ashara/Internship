
//3.URL Builder
function buildURL(baseurl, options) {
  const { path, params } = options;
  let url = baseurl;
  if (path) {
    url += `/${path}`;
  }
  if (params) {
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    url += `?${queryString}`;
  }
  
  return url;
}

const url = buildURL("https://example.com", {
  path: "products",
  params: { category: "books", sort: "price"},
  
});
console.log(url);
