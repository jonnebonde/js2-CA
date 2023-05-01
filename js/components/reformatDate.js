export function newDateFormat(e) {
  let date = new Date(e).toLocaleDateString("utc", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return date;
}