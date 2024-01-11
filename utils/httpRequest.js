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

const loginUser = async (path, data) => {
  try {
    const fetching = await fetch(`${baseURL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const toJson = await fetching.json();
    return toJson;
  } catch {
    alert("An error occurred!");
  }
};

export { fetchData, loginUser };
