import { Product } from 'src/app/models/product';
import { Token } from 'src/app/models/token';
import { User } from 'src/app/models/user';

const mockEmail = 'abc@gmail.com';
const mockPassword = '123';

export const mockLoginInfo = {
  email: mockEmail,
  password: mockPassword,
};

export const mockUser: User = {
  firstName: 'firstName',
  lastName: 'lastName',
  sex: 'M',
  dob: '1/1/1999',
  email: mockEmail,
  password: mockPassword,
};

export const mockProduct: Product = {
  id: '1',
  name: 'name',
  price: 20,
  description: 'description',
  photoUrl: 'photoUrl',
  rating: 3,
  numRating: 20,
};

export const mockProduct2: Product = {
  id: '2',
  name: 'name',
  price: 40,
  description: 'description',
  photoUrl: 'photoUrl',
  rating: 3,
  numRating: 20,
};

export const mockToken: Token = {
  token: 'abc',
  expireBy: '1/1/2999',
};

export const mockToken2: Token = {
  token: 'abc',
  expireBy: '2/1/2000',
};
