import allCategory from 'db/category.json';
import allProduct from 'db/products.json';

export function insertUrlParam(key, value) {
  if (history.pushState) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({ path: newurl }, '', newurl);
  }
}

export function getCategory() {
  return allCategory;
}

export function getProduct() {
  return allProduct;
}
