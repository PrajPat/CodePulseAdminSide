import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'


const AddProblem = () => {

  const editorConfig = {
    toolbar: ["bold", "italic",  "blockQuote" ],
  };

    const [ProbCate, setProbCate] = useState("")
    const [probDescription, setprobDescription] = useState("")
    const [probsamInput, setprobsamInput] = useState("")
    const [probsamOutput, setprobsamOutput] = useState("")
    const [probExplantion, setprobExplantion] = useState("")
    const [probtitle, setprobtitle] = useState("")
    const [probcode, setprobcode] = useState("")

    function addproblem(){
        const problem = {
            problemcategory:ProbCate,
            problemdescription:probDescription,
            problemsampleinput:probsamInput,
            problemsampleoutput:probsamOutput,
            problemexplanation:probExplantion,
            probtitle:probtitle,
            problemcode:probcode
          
        }
        axios.post("http://localhost:5000/addproblem", problem)
      .then((result) => {
        console.log(result.data)
        alert("Problem Added")
      }).catch((err) => {
        console.log(err)
      });
    }
  return (
    <div className='maindiv'>
      <div className='d-flex justify-content-center'><h1 align='center'><b><u>Add <span style={{color:'#fcbe03'}}>Problems</span></u></b></h1></div>
     <Container className='w-100 '>
      <Row>
        <Form className='pform' onSubmit={() => addproblem()}>
          <Form.Group>
            <Form.Label><b>Problem Category</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setProbCate(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />
           
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Problem Description</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setprobDescription(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />

            
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Sample Input</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setprobsamInput(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Sample Output</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setprobsamOutput(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />
            
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Problem Explaination</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setprobExplantion(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />
            
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Problem Title</b></Form.Label>
            <CKEditor 
              editor={ClassicEditor}
              data="<p></p>"
              config={editorConfig}
              onReady={(editor) => {
                console.log("Ready", editor);
              }}
              onChange={(e, editor) => {
                const data = editor.getData();
                setprobtitle(data);
              }}
              onBlur={(e, editor) => {
                console.log("Blur" , editor);
              }}
              onFocus={(e, editor) => {
                console.log("Focus", editor);
              }}
            />
       
          </Form.Group>

          <Form.Group>
            <Form.Label><b>Problem Code</b></Form.Label>
            <Form.Control as="textarea" rows={2} onChange={(e) => setprobcode(e.target.value)}></Form.Control>
          </Form.Group>
          
          <Button type='submit' variant='outline-success' className='mt-5 mb-5 probbtn'>Submit</Button>
        </Form>
      </Row>
      </Container> 
    </div>
  )
}

export default AddProblem
