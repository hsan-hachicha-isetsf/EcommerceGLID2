import axios from "axios"
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import Affichearticle from "./Affichearticle";

const Listarticlestable = () => {
    const[articles,setArticles]=useState([])
    const[x,setX]=useState(4)
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
        <h1>valeur de X est : {x}</h1>
        <button className="btn btn-success" onClick={()=>setX(8)}>Changer X</button>
      <Affichearticle articles={articles} handleDelete={handleDelete}/>
    </div>
  )
}

export default Listarticlestable
