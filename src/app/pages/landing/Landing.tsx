import Welcome from "@/app/pages/landing/Welcome";
import ProductsCarousel from "@/app/pages/landing/ProductCarousel/ProductsCarousel";
import About from "./About";

const Landing = () => {
    return (
        <>
            <Welcome/>
            <ProductsCarousel/>
            <About/>
        </>
    )
}

export default Landing;