export default async function getData() {
  return fetch('https://gist.githubusercontent.com/soberdeer/dd322cd3d1fc4a3a41f6bdb09fca3fa2/raw/f2c4c1e93eada66f0242f87b49863501895f4122/data.json')
    .then(response => response.json())
    .catch((err) => err);
}
