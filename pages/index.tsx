import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import FeaturedProduct from "../components/featured_product";
import ProductCard from "../components/product";
import { ProductsData } from "../interfaces/products";
import { getProducts } from "../lib/products";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
    let staticProductsData: ProductsData = await getProducts();

    return {
        props: {
            staticProductsData,
        },
    };
}

const fetcher = (url: string, sortValue: string) =>
    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sort: {
                key: sortValue,
                type: "ASC",
            },
        }),
    }).then((res) => res.json());

export default function Home({
    staticProductsData,
}: {
    staticProductsData: ProductsData;
}) {
    const [pageIndex, setPageIndex] = useState(1);
    const [sortValue, setSortValue] = useState("price");

    const { data, error } = useSWR(
        [
            `https://technical-frontend-api.bokokode.com/api/products?page=${pageIndex}`,
            sortValue,
        ],
        (url, id) => fetcher(url, id)
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    let productsData: ProductsData = data;

    return (
        <div className={styles.container}>
            <Head>
                <title>BEJAMAS</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>BEJAMAS_</h1>

                <hr />

                {staticProductsData.data.data[0].featured && (
                    <FeaturedProduct data={staticProductsData.data.data[0]} />
                )}

                <hr />

                <div className={styles.top}>
                    <div>
                        <h2>
                            Photography /&nbsp;
                            <span className={styles.subcategory}>
                                Premium Photos
                            </span>
                        </h2>
                    </div>
                    <div className={styles.sort}>
                        <h3>Sort By</h3>
                        <select
                            className={styles.select}
                            value={sortValue}
                            onChange={(e) => setSortValue(e.target.value)}
                        >
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
                <div className={styles.grid}>
                    {productsData.data.data.map(
                        (product, id) =>
                            !product.featured && (
                                <ProductCard key={id} data={product} />
                            )
                    )}
                </div>
                <div className={styles.pagination}>
                    <button onClick={() => setPageIndex(pageIndex - 1)}>
                        Previous
                    </button>
                    <button onClick={() => setPageIndex(pageIndex + 1)}>
                        Next
                    </button>
                </div>
            </main>
        </div>
    );
}
