import Slider from "../components/ui/Slider";
import { getProducts, getSliders } from "../helpers/api-util";

export default function Home({ slides, products }) {
  return <Slider data={slides} />;
}

export async function getStaticProps() {
  const products = await getProducts();
  const slides = await getSliders();

  return {
    props: {
      slides,
      products,
    },
  };
}
