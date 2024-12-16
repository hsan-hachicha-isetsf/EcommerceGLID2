import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import Card from './Card';
import Pagination from './Pagination';
const Listarticlecard = () => {
    const[articles,setArticles]=useState([])
    const[totalPages,setTotalPages]=useState(1)
    const[pageSize,setPageSize]=useState(18)
    const[currentPage,setCurrentPage]=useState(1)
const[isLoading,setIsLoading]=useState(true)
const fetcharticles=async(currentPage,pageSize)=>{
    try {
        const res=await axios.get(`https://backend-laravelg5.vercel.app/api/api/articles/art/articlespaginate?pageSize=${pageSize}&page=${currentPage}`)
        setArticles(res.data.products)
        setTotalPages(res.data.totalPages)
        
        setIsLoading(false)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    fetcharticles(currentPage,pageSize)
},[currentPage,pageSize])

const handlePrevPage = () => {
  if (currentPage > 1) {
  setCurrentPage(currentPage - 1);
  }
  };
  const handleNextPage = () => {
  if (currentPage < totalPages) {
  setCurrentPage(currentPage + 1);
  }
  };
  const handlePageChange = (page) => {
  setCurrentPage(page);
  };

if(isLoading){
    return(<center><ReactLoading type="spokes" color="red" height={400} width={200} /></center>)
    }
  return (
    <>
    <div className='card-container'>
      {articles.map((art,index)=>
      <Card article={art}/>
      
      )}
    </div>
    <Pagination
    handleNextPage={handleNextPage}
    handlePageChange={handlePageChange}
    handlePrevPage={handlePrevPage}
    currentPage={currentPage}
    totalPages={totalPages}
    />
    </>
  )
}

export default Listarticlecard
