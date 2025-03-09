const baseUrl = "http://localhost:8000/api";

const getFetch = async (url) => {
  const res = await fetch(baseUrl + url, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();
  if (res.ok) {
    return data.data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات کد : ${res.status}`);
  }
};

const postFetch = async (url, body) => {
  const res = await fetch(baseUrl + url, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export { getFetch, postFetch };
