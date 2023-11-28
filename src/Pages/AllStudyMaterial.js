import React, { useEffect, useState } from 'react'
import AddStudymaterial from './AddStudymaterial'
import axios from 'axios'
import { Button, Card, Col, Container, Image, Modal, Row } from 'react-bootstrap'
import learning from '../Assets/Images/learning.png'

const AllStudyMaterial = () => {
    const [allstudym, setalllstudym] = useState([])

    const [show, setshow] = useState(false)

    function onshowModel() {
      setshow(true)
    }
  
    function onHideModel() {
      setshow(false)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/allstudymaterial")
          .then((result) => {
            setalllstudym(result.data)
          }).catch((err) => {
            console.log(err)
          });
      },
        [])
    
        function deletestudymaterial(studymId) {
          axios.delete("http://localhost:5000/deletebystudymbyid",{ data: { id: studymId} })
          .then((result) => {
            window.location.reload(false)
          }).catch((err) => 
          {
            console.log(err)
          });
        }

   
  return (
    <div>
      <h1 align="center"><b><u>All <span style={{color:'#fcbe03'}}>StudyMaterial</span></u></b>  <Button className='ms-5'variant='outline-primary' onClick={() => { onshowModel() }}>Add StudyMaterial</Button> </h1>
      <div><Image className='blogback' src={learning}></Image></div>
      <Container>
        <Row>
            {
                allstudym.map((studyM) => {
                    return(
                        <Col lg={4} md={3} sm={12}>
                            <Card className='card mt-3' align="center">
                                <Card.Header>
                                    <h4>
                                        <img className='img' src={`http://localhost:5000${studyM.StudyMaterialCoverImage}`}/>
                                    </h4>
                                </Card.Header>
                                <Card.Body>
                                    <h4>{studyM.StudyMaterialCategory}</h4>
                                    <h4>{studyM.StudyMaterialTitle}</h4>
                                </Card.Body>
                                <Card.Footer>
                                    <a href={`http://localhost:5000${studyM.StudyMaterialFilePath}`} target='_blank' >View</a>
                                    <Button className='ms-2' variant='outline-danger' onClick={() => deletestudymaterial(studyM._id)}>Delete</Button>
                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
      </Container>
      <AddStudymaterial show={show} onhide={onHideModel} onShow={onshowModel}/>
   
    </div>
  )
}

export default AllStudyMaterial
