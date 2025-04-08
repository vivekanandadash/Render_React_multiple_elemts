import { createRoot } from 'react-dom/client'
import './style.css'
// const h1 = <h1>Hello World</h1>

function Card(key , title , thumbnail , price , brand) {
    console.log(key);

    return (
        <div className='card' key={key}>
            <div className='cardImg'>
                <img src= {thumbnail} alt="SS Cricket bat" />
            </div>
            <div className='cardContent'>
                <h3>{title}</h3>
                <p><b>Brand : </b>{brand}</p>
                <p><b>Price : </b><b>${price}</b></p>
            </div>
        </div>
    )
}

console.log(Card());



const root = createRoot(document.getElementById('root'))
// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5),
   
// ]

console.log('Hello world!!!')


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data)
    const container2 = data.products.map((product)=>{
        return Card(product.id , product.title , product.thumbnail , product.price , product.brand)
        
    })
    console.log(container2);
    root.render(<div className='container'>{container2}</div>)

    
    
});


