import {Card} from "react-bootstrap";
import {StaticImageData} from "next/image";
import './product-card-desktop.css'

const ProductCardDesktop = (
    {imgSrc, title, description}: { imgSrc: StaticImageData, title: string, description: string  }
) => {
    return (
        <>
            <Card className='product-card-desktop'>
                <Card.Img variant="top" src={imgSrc.src} className='product-card-desktop-image'/>
                <Card.Body>
                    <Card.Title className='product-card-title-desktop'>{title}</Card.Title>
                    <Card.Text className='product-card-desktop-description'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCardDesktop;