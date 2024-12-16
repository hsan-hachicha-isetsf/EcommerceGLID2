import axios from "axios"
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";

const Listarticles = () => {
const[articles,setArticles]=useState([])
const[isLoading,setIsLoading]=useState(true)
const fetcharticles=async()=>{
    try {
        const res=await axios.get("https://backend-laravelg5.vercel.app/api/api/articles")
        setArticles(res.data)
        setIsLoading(false)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    fetcharticles()
},[])

const handleDelete=async(id)=>{
    if(window.confirm("voulez vous supprimer O/N")){
try {
    await axios.delete(`https://backend-laravelg5.vercel.app/api/api/articles/${id}`)
    setArticles(articles.filter(art=>art.id!=id))
    
} catch (error) {
   console.log(error) 
}
    }
}
if(isLoading){
return(<center><ReactLoading type="spokes" color="red" height={400} width={200} /></center>)
}
  return (
    <div>
      <center><h1>Liste des articles</h1></center>
      <Link to="/articles/add"> <button className="btn btn-success btn-sm"><i class="fa-solid fa-square-plus"></i> Ajouter</button></Link>
      <table className="table table-striped">
        <thead>
            <tr>
                <th>Référence</th>
                <th>Désignation</th>
                <th>Marque</th>
                <th>Stock</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Scatégorie</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
             articles.map((art,index)=>
                <tr key={index}>
                    <td>{art.reference}</td>
                    <td>{art.designation}</td>
                    <td>{art.marque}</td>
                    <td>{art.qtestock}</td>
                    <td>{art.prix}</td>
                    <td><img src={art.imageart} width={100} height={100}/></td>
                    <td>{art.scategorieID}</td>
                    <td><Link to={`/articles/edit/${art.id}`}> <button className="btn btn-warning btn-sm"><i class="fa-solid fa-pen-to-square"></i> Update</button></Link></td>
                   
                    <td><button className="btn btn-danger btn-sm" onClick={()=>handleDelete(art.id)}><i class="fa-solid fa-trash"></i> Delete</button></td>
                </tr>
            
            )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Listarticles
