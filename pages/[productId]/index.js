import React from "react"
import { getProducts } from "../../helpers/api-util"
import Details from "../../components/productDetails/Details"

const ProductDetails = ({ productDetails, products }) => {
  return <Details details={productDetails} products={products} />
}

export async function getStaticPaths() {
  const products = await getProducts()

  const paths = products.map((product) => {
    return {
      params: { productId: product.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const productId = context.params.productId
  const productDetails = await getProducts(productId)

  const products = await getProducts()

  return {
    props: { productDetails, products },
  }
}

export default ProductDetails
