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
const userData = [{name:"A1", age:10},{name:"B1", age:19},{name:"C1", age: 20}];

const searchData = () => {
  const searchedData = document.getElementById("search").value; 
  
  const d = userData.filter(x => x.age>18);

  //Use filter method to implement search
  //Search can be done using startsWith or includes function
  const searchDataList = userData.filter(postDetails => postDetails.name.toLowerCase().includes(searchedData.toLowerCase()));
  
  return searchDataList;
}

customElements.define('one-dialog', OneDialog)
customElements.define('user-list', UserList);
