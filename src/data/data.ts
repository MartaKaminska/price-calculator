import { nanoid } from "@reduxjs/toolkit";

export const services: Services[] = [
  { id: nanoid(), name: "Telewizja", price: [49, 49, 59] },
  { id: nanoid(), name: "Dekoder 4K", price: [29, 29, 29] },
  { id: nanoid(), name: "Internet + Telewizja", price: [79, 89, 99] },
  {
    id: nanoid(),
    name: "Internet + Abonament telefoniczny",
    price: [64, 64, 64],
  },
  { id: nanoid(), name: "Internet", price: [39, 49, 59] },
  {
    id: nanoid(),
    name: "Abonament telefoniczny",
    price: [29, 29, 29],
  },
];

export const years: string[] = ["2023", "2024", "2025"];

export const specialOffert: SpecialOffert = {
  product: "Dekoder 4K",
  relatedProducts: ["Telewizja", "Internet", "Dekoder 4K"],
};

export const relatedProducts: string[] = ["Dekoder 4K", "Telewizja"]
