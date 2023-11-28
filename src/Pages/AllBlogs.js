import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row,Image } from 'react-bootstrap';
import AddBlogs from './AddBlogs';
import { useNavigate } from 'react-router-dom';
import blog from '../Assets/Images/blg1.jpg'

const AllBlogs = () => {

  const navi = useNavigate();

    const [allblogs, setallblogs] = useState([])

    const [show, setshow] = useState(false)
    const [count, setcount] = useState([0])

    function onshowModel() {
      setshow(true)
    }
  
    function onHideModel() {
      setshow(false)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/allpost")
       
        .then((result) => {
            setallblogs(result.data)
           
          }).catch((err) => {
            console.log(err)
          });
      },
        [])
    
        function deleteBlogs(BolgId) {
          axios.delete("http://localhost:5000/deletepost",{ data: { id: BolgId} })
          .then((result) => {
            window.location.reload(false)
          }).catch((err) => 
          {
            console.log(err)
          });
        }

   
  return (
    <div>
     
      <h1 align="center"><b><u>All <span style={{color:'#fcbe03'}}>Bolgs</span></u></b>        <Button className='ms-2' variant='outline-primary' onClick={() => { onshowModel() }}>Add Blogs</Button></h1>
      <div>
          <Image className='blogback' src={blog}></Image></div>
      <Container>
        <Row>
            {
                allblogs.map((blogg) => {
                    return(
                        <Col lg={4} md={3} sm={12}>
                            <Card className='card mt-3' align="center">
                                <Card.Header>
                                    <h4>
                                        <img className='img' src={`http://localhost:5000${blogg.PostCoverImage}`}/>
                                    </h4>
                                </Card.Header>
                                <Card.Body>
                                    <h4>{blogg.PostTitle}</h4>
                                </Card.Body>
                                <Card.Footer>
                                <Button variant='outline-primary' onClick={() => navi(`/blogdetails/${blogg._id}`)}>Read Blog</Button>
                                    <Button className='ms-2' variant='outline-danger' onClick={() => deleteBlogs(blogg._id)}>Delete</Button>
                                                                   </Card.Footer>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
      </Container>
      <AddBlogs show={show} onhide={onHideModel} onShow={onshowModel}/>
    </div>
  )
}

export default AllBlogs
