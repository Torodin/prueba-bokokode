import { Product } from "../interfaces/products";
import Image from "next/image";
import styles from "../styles/Product.module.css";

export default function ProductCard({
    data,
    reduced = false,
}: {
    data: Product;
    reduced?: boolean;
}) {
    return (
        <div className={reduced ? styles.reduced : styles.container}>
            <div
                className={
                    reduced
                        ? styles.image_container_reduced
                        : styles.image_container
                }
            >
                <Image
                    className={styles.image}
                    fill
                    src={data.image.src}
                    alt={data.image.alt}
                />
                <button className={styles.button}>ADD TO CART</button>
            </div>
            <h3>{data.category}</h3>
            <h2>{data.name}</h2>
            <h2>
                {data.currency}&nbsp;
                {data.price}
            </h2>
        </div>
    );
}
