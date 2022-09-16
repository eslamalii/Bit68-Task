import Subscribe from "../components/layout/Subscribe"
import Products from "../components/products/Products"
import Slider from "../components/ui/Slider"
import { getProducts, getSliders } from "../helpers/api-util"

export default function Home({ slides, products }) {
  return (
    <>
      <Slider data={slides} />
      <Products products={products} />
      <Subscribe />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  const slides = await getSliders()

  return {
    props: {
      slides,
      products,
    },
  }
}
