export class Product {
  constructor(
    public sku: string,
    public name: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public isActive: boolean,
    public unitsInStock: number,
    public dateCreated: Date,
    public lastUpdated: Date,
  ) {}
}
