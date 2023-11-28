import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, Modal, Row } from 'react-bootstrap'

const AddExercise = (props) => {

  const [ExNote, setExNote] = useState("")
  const [ExSnippet, setExSnippet] = useState("")
  const [Exlanguage, setExlanguage] = useState("")
  const [ExOptionA, setExOptionA] = useState("")
  const [ExOptionB, setExOptionB] = useState("")
  const [ExOptionC, setExOptionC] = useState("")
  const [ExoptionD, setExoptionD] = useState("")
  const [SnippetAns, setSnippetAns] = useState("")


  function addexercise() {
    const exercise = {
      exercisenote: ExNote,
      exercisesnippet: ExSnippet,
      language: Exlanguage,
      optiona: ExOptionA,
      optionb: ExOptionB,
      optionc: ExOptionC,
      optiond: ExoptionD,
      snippetans: SnippetAns
    }
    axios.post("http://localhost:5000/addexercise", exercise)
      .then((result) => {
        console.log(result.data)
        alert("Exercise added")
      }).catch((err) => {
        console.log(err)
      });
  }
  return (
    <div>
      <Modal  show={props.show} hide={props.onhide}>
   
        <Modal.Body>
        <div className='d-flex justify-content-center'><h1 align='center'><b><u>Add<span style={{color:'#fcbe03'}}>Exrecise</span></u></b></h1></div>
      <Container className='w-100 '>
        <Row>
          <Form  onSubmit={() => addexercise()}>
            <Form.Group>
              <Form.Label><b>Exercise Note</b></Form.Label>
              <Form.Control type='text'className='frm' placeholder='Enter Exercise Note'  onChange={(e) => setExNote(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>Exercise Snippet</b></Form.Label>
              <Form.Control type='text'className='frm'placeholder='Enter Execise Snippet'  onChange={(e) => setExSnippet(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>language</b></Form.Label>
              <Form.Control type='text'className='frm' placeholder='Enter Language' onChange={(e) => setExlanguage(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>Option A</b></Form.Label>
              <Form.Control type='text'className='frm' placeholder='Option A' onChange={(e) => setExOptionA(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>Option B</b></Form.Label>
              <Form.Control type='text'className='frm'placeholder='Option B'  onChange={(e) => setExOptionB(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>Option C</b></Form.Label>
              <Form.Control type='text' className='frm' placeholder='Option C' onChange={(e) => setExOptionC(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>Option D</b></Form.Label>
              <Form.Control type='text'className='frm' placeholder='Option D' onChange={(e) => setExoptionD(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label><b>SnippetAns</b></Form.Label>
              <Form.Control type='text'className='frm' placeholder='Snippet Ans' onChange={(e) => setSnippetAns(e.target.value)} />
            </Form.Group>
            <Button type='submit' variant='outline-success' className='  ms-5 sbtn'>Submit</Button>
            <Button variant='outline-danger' className='mt-2 ms-5 sbtn' onClick={() => props.onhide()}>Cancle</Button>
          </Form>
        </Row>
      </Container>
     
        </Modal.Body>

      </Modal>
      
    </div>
  )
}

export default AddExercise
