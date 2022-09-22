import { entity, persistence } from "simpler-state";
import {productRows, userRows} from '../datatablesource'

type idType = number | string;
interface IProduct {
  id: string;
  title: string;
  img: string;
  color:string;
  description:string;
  price:number | string;
  category:string;
}
export interface IUser {
  id: string;
  username: string;
  img: string;
  country:string;
  email:string;
  phone:idType;
  address: string
}
// export interface User {
//   id: string | undefined;
//   username: string | undefined;
//   img: string | undefined;
//   country:string | undefined;
//   email:string | undefined;
//   phone:idType | undefined;
//   address: string | undefined
// }
interface ITodoEntity {
  productItems: IProduct[];
  userItems: IUser[]
}

const defaultState: ITodoEntity = {
  userItems: userRows,
  productItems: productRows,
};
// const generateId = () => Math.random().toString(36).substr(2, 9);

export const todoEntity = entity(defaultState, [persistence("e")]);

// actions
export const addUser = (data: IUser) =>
  todoEntity.set((state) => ({
    ...state,
    userItems: state.userItems.concat(data),
  }));
export const addProduct = (data: IProduct) =>
  todoEntity.set((state) => ({
    ...state,
    productItems: state.productItems.concat(data),
  }));
  export const removeUser = (id:string) =>
  todoEntity.set((state) => ({
    ...state,
    userItems: state.userItems.filter((item) => item.id !== id),
  }));
  export const removeProduct = (id:string) =>
  todoEntity.set((state) => ({
    ...state,
    productItems: state.productItems.filter((item) => item.id !== id),
  }));
  export const editUser = (id: string, data:IUser) =>
  todoEntity.set((state) => ({
    ...state,
    userItems: state.userItems.map((item) => {
      if (item.id === id) item = data;
      return item;
    }),
  }));
  export const editProduct = (id: string, data:IProduct) =>
  todoEntity.set((state) => ({
    ...state,
    productItems: state.productItems.map((item) => {
      if (item.id === id) item = data;
      return item;
    }),
  }));