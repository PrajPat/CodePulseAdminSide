import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Modal, Row } from 'react-bootstrap'

const AddBlogs = (props) => {

  function uploadImage(e) {
    const data = new FormData();
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/uploadimage", data)
      .then((result) => {
        console.log(result.data)
        setblogcoverimage(result.data.filepath)
        alert("image uploaded")
      }).catch((err) => {
        console.log(err)
      });
  }

    const [blogcoverimage, setblogcoverimage] = useState("")
    const [blogtitle, setblogtitle] = useState("")
    const [blogdescription, setblogdescription] = useState("")

    function addblogs(){
        const blogs = {
            postcoverimg:blogcoverimage,
            posttitle:blogtitle,
            postdescrition:blogdescription
            
          
        }
        axios.post("http://localhost:5000/addpost", blogs)
      .then((result) => {
        console.log(result.data)
        alert("Blog Added")
      }).catch((err) => {
        console.log(err)
      });
    }
  return (
    <div>
      <Modal show={props.show} hide={props.onhide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
     <div><h1 align="center"><b><u>Add <span style={{color:'#fcbe03'}}>Blogs</span></u></b></h1>
        <Container >
            <Row>
                <Form onSubmit={() => addblogs()}>
                    <Form.Group>
                        <Form.Label>Blog Cover Image</Form.Label>
                       <Form.Control type='file' className='frm' size='sm' onChange={(e) => uploadImage(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control type='text'className='frm' placeholder='Enter Blog Title' onChange={(e) => setblogtitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Blogs Description</Form.Label>
                      <Form.Control as="textarea" className='frm' placeholder='Enter Blog Description' rows={2} onChange={(e) => setblogdescription(e.target.value)}/>
                    </Form.Group>
                    <Button type='submit' className='mt-5  ms-5 sbtn' variant='success'>Submit</Button>
                    <Button variant='danger' className='mt-4 ms-5 sbtn' onClick={() => props.onhide()}>Cancle</Button>
                </Form>
            </Row>
        </Container>
     </div>
     </Modal.Body>
     </Modal>
    </div>
  )
}

export default AddBlogs
