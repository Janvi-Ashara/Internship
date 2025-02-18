// 2. Generate Query String from Object

function parseQueryString(queryString){
  let query = queryString.split('&');
  let obj = {'search': '', 'page': '', 'sort': '', 'hello': ''};
  for (let i=0; i<query.length;i++){
        let key = query[i].split('=')[0];
        let value = query[i].split('=')[1];
        obj[key]=value;
      }
  console.log(obj);
}
parseQueryString("search=programming&page=2&sort=asc&hello=hii");