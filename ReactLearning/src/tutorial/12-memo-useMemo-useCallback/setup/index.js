import React, {memo,useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
  const [cart,setCart]=useState(0)

  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const addCart=useCallback(()=>{
     setCart(cart+1)    
  },[cart])
 const maximumValue=(products)=>{
  // console.log(products)    
  const newValue=products.reduce((currentValue,items)=>{
    const big=items.fields.price
         if(big>currentValue)
         {
           currentValue=big
         }
        return big
        },0)/100
  return newValue
      }
//  const newMacimum=useMemo(maximumValue(products))
  return (
       <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2 style={{marginbottom:"2rem"}}>cart:{cart}</h2>
     {/* <h3>maximum value{newMacimum}</h3> */}
      <BigList products={products} addCart={addCart} />
    </>
  )
}

const BigList = memo(({ products,addCart}) => {
   useEffect(()=>{
     console.log('big list called')
   })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addCart={addCart}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields,addCart}) => {
  useEffect(()=>{
     console.count('single item')
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addCart}>add cart</button>
    </article>
  )
}
export default Index
