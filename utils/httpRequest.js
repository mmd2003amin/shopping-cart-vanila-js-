const baseURL = "https://fakestoreapi.com";

const fetchData = async (path) => {
  try {
    const fetching = await fetch(`${baseURL}/${path}`);
    const toJson = await fetching.json();
    return toJson;
  } catch {
    alert("An error occurred!");
  }
};

export { fetchData };
