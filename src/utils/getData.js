import { gistLink } from './constants';

export default async function getData() {
  return fetch(gistLink)
    .then(response => response.json())
    .catch((err) => err);
}
