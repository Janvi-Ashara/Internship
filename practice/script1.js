  // const buildQueryString = new URLSearchParams({
  //   search:"programming",
  //   page:2,
  //   sort:"asc",
  // });
  // console.log(buildQueryString.toString());

  function buildQueryString(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let queryString = "?";
    for(let i=0; i<keys.length; i++){
      queryString += `${keys[i]}=${values[i]}&`;      
    }
    console.log(queryString.slice(0, -1));  
  }
  buildQueryString({search: "programming", page: 2, sort: "asc"});
