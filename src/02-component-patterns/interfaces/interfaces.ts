import { Props as ProductCardProps } from '../components/ProductCard';

export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: { title?: string, className?: string; }) => JSX.Element;
    Image: (Props: { img?: string, className?: string; }) => JSX.Element;
    Buttons: ({ className }: { className?: string }) => JSX.Element;
};

export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number;
}
