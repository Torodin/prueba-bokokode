import { ProductsData } from "../interfaces/products";

export async function getProducts(): Promise<ProductsData> {
    const res = await fetch(`${process.env.API_BASE_URL}/products`, {
        method: "POST",
    });
    const response = await res.json();

    return response;
}
