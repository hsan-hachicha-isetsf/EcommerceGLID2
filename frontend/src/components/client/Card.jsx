import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
const Card = ({article}) => {
  const {addItem} =useShoppingCart()

  const addTocart=(article)=>{
    const produit={
      id:article.id,
      title:article.designation,
      price:article.prix,
      image:article.imageart,
      qtestock:article.qtestock,
      quantity:1
    }
    addItem(produit)
    console.log("produit ajouté avec succes",produit)
  }
  return (
    <div className='card'>
{article.imageart && <img src={article.imageart} alt={article.reference}
/>}
<div className="card-content">
<h1 className="card-title">{article.reference}</h1>
<p className="card-description">{article.designation.substr(0,20)}</p>
<h1 className="card-title">Prix : {article.prix} TND</h1>

<button className="card-button" onClick={()=>addTocart(article)}><i className="fa-solid fa-basket-
shopping"></i>Add to cart</button>

</div>
</div>
  )
}

export default Card
