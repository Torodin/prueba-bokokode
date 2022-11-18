import { Product } from "../interfaces/products";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
import ProductCard from "./product";

export default function FeaturedProduct({ data }: { data: Product }) {
    return (
        <div>
            <div className={styles.top}>
                <h2>{data.name}</h2>
                <button className={styles.button}>ADD TO CART</button>
            </div>
            <div className={styles.container}>
                <Image
                    className={styles.image}
                    fill
                    src={data.image.src}
                    alt={data.image.alt}
                />
                <h2 className={styles.alt}>{data.image.alt}</h2>
            </div>
            <button className={styles.movile_button}>ADD TO CART</button>
            <div className={styles.bottom}>
                <div>
                    <h3>About the {data.name}</h3>
                    <h3 className={styles.category}>{data.category}</h3>
                    <p>{data.description}</p>
                </div>
                <div>
                    <h3>People also buy</h3>
                    <div className={styles.related}>
                        {data.people_also_buy.map((product, id) => (
                            <ProductCard key={id} data={product} reduced />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
