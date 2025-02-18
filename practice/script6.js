//6. Reverse Dynamic URL Mapping
//Create a function reverseRoute that takes a route string with placeholders and a URL, returning the dynamic values as an object.

function reverseRoute(route, url) {

    const routeParts = route.split('/');
    const urlParts = url.split('/');
    const output = {};
  
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const urlPart = urlParts[i];
  
      if (routePart.startsWith(':')) {
        const name = routePart.slice(1);
        output[name] = urlPart;
      }
    }
    return output;
  }
  const result = reverseRoute("banner/:id/user/:name/", "banner/1/user/romik/");
  console.log(result); 