const getApiData = async() => {
  var fetchHeaders = new Headers({
    Accept: 'application/json'
  });

  var fetchOptions = {
    cache: 'default',
    headers: fetchHeaders,
    method: 'GET',
    mode: 'cors'
  };

  return await fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions).then(
    (resp) =>  resp.json()).then(data=> data).catch(
    (err) => {
      console.error(err);
    }
  );
}

class OneDialog extends HTMLElement {
    connectedCallback() {
      const username = this.attributes.username.value;
      this.innerHTML = `<h1>Hello, World! Hello ${username}</h1>`;
    }
}
  
class UserList extends HTMLElement {
  async connectedCallback() {
    const data = await getApiData();   
    const user = this.attributes.user.value;
      this.innerHTML = `<h2>Hey! ${user}</h2>`
    }
}
const userData = [{name:"D1", age:30},{name:"B1", age:19},{name:"C1", age: 20}];

const searchData = () => {
  const searchedData = document.getElementById("search").value; 
  
  sortData();

  const d = userData.filter(x => x.age>18);

  //Use filter method to implement search
  //Search can be done using startsWith or includes function
  const searchDataList = userData.filter(postDetails => postDetails.name.toLowerCase().includes(searchedData.toLowerCase()));
  
  return searchDataList;
}

const sortData = () => {
  //Sorting numbers in ascending order
  const sortedData = userData.sort(function(a,b){
    if(a.age>b.age) return 1;
    if(a.age<b.age) return -1;
    return 0;
  });

  //Sorting string
  const sortedStringData = userData.sort(function(a,b){
    let x= a.name.toUpperCase(),
        y=b.name.toUpperCase();
        return x>y? 1: x<y? -1: 0;
  })
  console.log("Sorted array", sortedStringData)
  return sortedData;
}

customElements.define('one-dialog', OneDialog)
customElements.define('user-list', UserList);
