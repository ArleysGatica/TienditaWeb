const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:53631";
function Services(id) {
  const baseUrl = `${apiUrl}/Arti-Categoria/${id}`;
  console.log(baseUrl);
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
}
export default Services;