const mockData = ["Himanshi","Dhruv","Poonam","Sandeep"];

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

customElements.define('one-dialog', OneDialog)
customElements.define('user-list', UserList);