
export function addLocalStorage(item, key) {
  localStorage.setItem(key, JSON.stringify(item))
}

export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);

  if (!data || JSON.parse(data).length <= 0) {
    localStorage.removeItem(key)
    return [];
  } else {
      return JSON.parse(data);
  }
}

export function deleteFromLocalStorage(key) {
  localStorage.removeItem(key);
}

