const apiFetch = async (req) => {
  try {
    const response = await fetch(req.url, req.params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });
    return await response.json();
  } catch (err) {
    throw new Error(`error fetch ${req.url}`);
  }
};

export default apiFetch;
