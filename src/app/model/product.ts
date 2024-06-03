export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string,
    public photoUrl: string,
    public rating: number,
    public numRating: number,
    public quantityPick: number = 1
  ) {}

  static clone(product: Product): Product {
    return new Product(
      product.id,
      product.name,
      product.price,
      product.description,
      product.photoUrl,
      product.rating,
      product.numRating,
      product.quantityPick
    );
  }
}
