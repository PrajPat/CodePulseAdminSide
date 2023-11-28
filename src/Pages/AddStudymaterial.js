import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, Modal, Row } from 'react-bootstrap'


const AddStudymaterial = (props) => {

    const [StudyMCate, setStudyMCate] = useState("")
    const [StudyMTitle, setStudyMTitle] = useState("")
    const [StudyMfile, setStudyMfile] = useState("")
    const [StudyMCoverimg, setStudyMCoverimg] = useState("")

    function uploadImage(e) {
        const data = new FormData();
        data.append("image", e.target.files[0])
        axios.post("http://localhost:5000/uploadimage", data)
          .then((result) => {
            console.log(result.data)
            setStudyMCoverimg(result.data.filepath)
            alert("image uploaded")
          }).catch((err) => {
            console.log(err)
          });
      }

      function uploadFile(e) {
        const data = new FormData();
        data.append("docs", e.target.files[0])
        axios.post("http://localhost:5000/uploaddoc", data)
          .then((result) => {
            console.log(result.data)
            setStudyMfile(result.data.filepath)
            alert("file uploaded")
          }).catch((err) => {
            console.log(err)
          });
      }

      function addstudymaterial(){
        const studyM = {
            studymaterialcategory:StudyMCate,
            studymaterialtitle:StudyMTitle,
            studymaterialfilepath:StudyMfile,
            studymaterialcoverimg:StudyMCoverimg
            
          
        }
        axios.post("http://localhost:5000/addstudymaterial", studyM)
      .then((result) => {
        console.log(result.data)
        alert("studyMaterial Added")
      }).catch((err) => {
        console.log(err)
      });
    }
  return (
    <div>
        <Modal className='modal' show={props.show} hide={props.onhide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
     <div><h1 align="center"><b><u>Add <span style={{color:'#fcbe03'}}>StudyMaterial</span></u></b></h1>
        <Container >
            <Row>
                <Form className='sform' onSubmit={() => addstudymaterial()}>

                <Form.Group>
                        <Form.Label>StudyMaterial Category</Form.Label>
                        <Form.Control type='text'className='frm' placeholder='Enter Category'  onChange={(e) => setStudyMCate(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>studyMaterial Title</Form.Label>
                      <Form.Control type='text'className='frm' placeholder='Enter Title' onChange={(e) => setStudyMTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>StudyMaterial CoverImage</Form.Label>
                       <Form.Control type='file' className='frm'  size='sm' onChange={(e) => uploadImage(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>StudyMaterial Files</Form.Label>
                       <Form.Control type='file'size='sm'className='frm'  onChange={(e) => uploadFile(e)}/>
                    </Form.Group>
                    <Button type='submit' className='mt-5  ms-5 sbtn' variant='outline-success'>Submit</Button>
                    <Button variant='outline-danger' className='mt-4 ms-5 sbtn' onClick={() => props.onhide()}>Cancle</Button>
                </Form>
            </Row>
        </Container>
     </div>
     </Modal.Body>
     </Modal>
      
    </div>
  )
}

export default AddStudymaterial
