import { ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
};

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct( { product, onChange, value } );
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                style={ style } 
                className={ `${ styles.productCard } ${ className }` }
            >
                {children}
            </div>
        </Provider>
    )
}
