export interface Tour {
  id: ID;

  country: Country;
  city: City;
  description: string;
  images: Image[];
  hotel: Hotel;
  startDate: TourDate;
  endDate: TourDate;
  price: number;
  duration: number;
}

export interface Message {
  id: ID;

  name: string;
  email: string;
  theme: string;
  message: string;
}

export type ID = number;
export type Country = string;
export type City = string;
export type Image = string;
export type LeavingRoom = string;
export type TourDate = string;

export interface Hotel {
  rating: number;
  name: string;
  // rooms: Room[];
}

export type Room = {}

export interface Operator {
  name: string;
  phone: string;
  company: string;
  email: string;
}
