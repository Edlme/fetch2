const api_endpoint = 'https://bible-api.com/john%203:16'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);

