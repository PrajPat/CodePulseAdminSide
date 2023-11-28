import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function AllProblems() {

  const navi = useNavigate();

  const [allproblem, setallproblem] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/allproblem")
      .then((result) => {
        setallproblem(result.data)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])

    function deleteProblem(probId) {
      axios.delete("http://localhost:5000/deleteprobbyid",{ data: { id: probId} })
      .then((result) => {
        window.location.reload(false)
      }).catch((err) => 
      {
        console.log(err)
      });
    }

    
  return (
    <div>
      <h1 align="center"><b><u>All <span style={{color:'#fcbe03'}}>Problems</span> </u></b></h1>
      <Container >
        <table variant='warning' className='table table-striped mtable'>
          <thead>
            <tr className='tableheading'>
              <th><b>Sr No.</b></th>
              <th scope="col">Problem Category</th>
              <th scope='col'>Title</th>
              <th></th>
              <th></th>



            </tr>
          </thead>

          <tbody>
            {
              allproblem.map((prob, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{prob.ProblemsCategory}</td>
                    <td>{prob.ProblemTitle}</td>

                    <td><Button variant='outline-danger' onClick={() => deleteProblem(prob._id)}>Delete</Button></td>
                    <action><th><Button onClick={() => navi(`/allprobdetails/${prob._id}`)} variant='outline-success'>View</Button></th></action>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default AllProblems
