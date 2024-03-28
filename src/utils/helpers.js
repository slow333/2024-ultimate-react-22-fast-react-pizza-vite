export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
export function formatCurrencyKr(value, rate) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "krw",
  }).format(Number(value) * rate);
}
export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function formatNumber(num) {
  num.toLocaleString("ko-KR")
}