import React from "react";
import { axiosClient } from "../../libraries/axiosClient";
import Product from "../../components/Products";

type Props = {
  products: any[];
};

const Products = ({ products }: Props) => {
  console.log(products);
  return (
    <div>
      {products.map((p: any) => {
        return (
          <div key={p._id}>
            <Product imgUlr={`http://localhost:9000${p.imageUrl}`} name={p.name} price={p.price} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

export async function getStaticProps(context: any) {
  const products = await axiosClient.get("/products");
  return {
    props: { products }, // will be passed to the page component as props
    revalidate: 3600,
  };
}
