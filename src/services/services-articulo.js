import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "https://localhost:44376/Api";

export const GetArticulo = () => {
  const baseUrl = `${apiUrl}/Articulo`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response]);
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function request(Articulo, method) {
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Articulo),
  };
  return requestOptions;
}

export async function PostArticulo(Articulo) {
  const baseUrl = `${apiUrl}/Articulo`;
  console.log(Articulo);
  await axios
    .post(baseUrl, Articulo)
    .then((response) => console.log("success full" + response))
    .catch((error) => console.log(error));

  /* const response = await fetch(baseUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(Articulo), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects*/
}

export async function PutArticulo(Articulo = {}, ID) {
  const baseUrl = `${apiUrl}/Articulo/ ${ID}`;
  const response = await fetch(baseUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(Articulo), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function DeleteArticulo(ID) {
  const baseUrl = `${apiUrl}/Articulo/${ID}`;
  const response = await fetch(baseUrl, {
    method: "Delete",
  });
  return response.json();
}

export const fetchArticulo = {
  GetArticulo,
  PostArticulo,
  PutArticulo,
  DeleteArticulo,
};
