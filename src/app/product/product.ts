export class Product {
 constructor(
  public name : string = 'Gummy',
  public price : number = 10,
  public description : string = 'sleep',
  public photoUrl: string = './assets/gummy.png',
  public rating: number = 4,
  public quantityInStock : number = 4,
  public quantityPick : number = 0,
  public code : string = '1') {}

  
}
