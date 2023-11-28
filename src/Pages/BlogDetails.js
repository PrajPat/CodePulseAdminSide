import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import blog from '../Assets/Images/blg1.jpg'

const BlogDetails = () => {

    const {blogId} = useParams()

    const [blogdetails, setblogdetails] = useState({})

    useEffect(() => {
        const data = {
            id: blogId
        }
        axios.post("http://localhost:5000/getpostbyid", data)
            .then((result) => {
                console.log(result.data)
                setblogdetails(result.data)
            }).catch((err) => {
                console.log(err)
            });
    },
        {})


  return (
    <div>
    <div>
    <Image className='blogback' src={blog}></Image></div>
      <h1 align="center" style={{color:'#fcbe03'}}><u>Blog</u></h1>
      <div>
        <Image className='blogdetails' src={`http://localhost:5000${blogdetails.PostCoverImage}`}/>
        </div>
        {/* <h3>{blogId}</h3> */}
      <Container>
      <h2><u> <span style={{color:'#0000B3'}}>Read Blog...</span></u></h2>
        <h2>{blogdetails.PostDescription}</h2>

      </Container>
    </div>
  )
}

export default BlogDetails
