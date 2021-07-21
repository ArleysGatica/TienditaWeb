const apiUrl = process.env.REACT_APP_API_URL || "https://localhost:44376/Api";
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
