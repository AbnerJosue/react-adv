import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButton';
import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

// Compound Component Pattern

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;