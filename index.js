const app = "I don't do much.";
//28ef8af1576d871bf605bf985defd01f74b18810

// fetch('https://api.github.com/user/repos').

//     then(res => res.JSON()).
//     then(json => console.log(json))
    
const token = '28ef8af1576d871bf605bf985defd01f74b18810'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));