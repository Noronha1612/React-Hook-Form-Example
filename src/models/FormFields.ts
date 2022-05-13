export enum Genre {
  Male = 'm',
  Female = 'f',
}

export type FormFields = {
  name: string;
  nickname: string;
  amount: string;

  persons: {
    name: string;
    lastName: string;
    role: string;
    genre: Genre;
  }[];
}