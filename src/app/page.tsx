import HeaderDesktop from "@/app/common-components/desktop/header/HeaderDesktop";
import LandingDesktop from "@/app/pages/desktop/landing/desktop/LandingDesktop";
import ProductsSectionDesktop
    from "@/app/pages/desktop/landing/desktop/products-section-desktop/ProductsSectionDesktop";

export default function Home() {
    return (
        <>
            <HeaderDesktop/>
            <LandingDesktop/>
            <ProductsSectionDesktop/>
        </>
    );
}
