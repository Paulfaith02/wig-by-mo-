import { products } from '../data/products'

// This contract can later call Django REST without changing UI components.
export const catalogService = {
  async getProducts() { return products },
  async getProduct(id) { return products.find((item) => item.id === Number(id)) },
  async getFeatured() { return products.filter((item) => item.featured) },
}
