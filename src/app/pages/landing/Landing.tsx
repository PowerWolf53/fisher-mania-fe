import ProductsCarousel from "@/app/pages/landing/ProductCarousel/ProductsCarousel";
import Welcome from "@/app/pages/landing/Welcome/Welcome";
import About from "@/app/pages/landing/About/About";

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