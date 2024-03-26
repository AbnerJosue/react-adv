import ProductCard from "../components";

const  product = {
    id: '1', 
    title: 'Coffe Mug - Card', 
    img: './coffee-mug.png'
};

const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div style={{
            display:'flex',
            flexDirection:'row', 
            flexWrap:'wrap'
        }}>

        </div>
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title/>
            <ProductCard.Buttons  />
        </ProductCard>
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title  title='HOLA MUNDO'/>
            <ProductCard.Buttons  />
        </ProductCard>
    </div>
  )
}

export default ShoppingPage