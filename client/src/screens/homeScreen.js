import React from "react";
import Product from "../components/product";
import {useQuery, gql} from "@apollo/client"

const GET_ALL_PRODUCT = gql`
query getAllProduct {
  getProducts {
    _id
    title
    image
    description
    link
    reviews
    ratings
  }
}
`

export default function homeScreen() {
  const {data, loading} = useQuery(GET_ALL_PRODUCT)
  if (loading) return <h1>loading...</h1>
  return (
    <div>
      <h1>From ome Screen</h1>
      <div className="row justify-content-center">
        {data.getProducts.map((product) => {
          return <Product key= {product._id} product ={product} />;
        })}
      </div>
    </div>
  );
}
