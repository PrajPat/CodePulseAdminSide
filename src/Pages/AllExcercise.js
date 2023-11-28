import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import AddExercise from './AddExercise';

function AllExcercise() {

  const [allExcercise, setallExcercise] = useState([])


  const [show, setshow] = useState(false)

  function onshowModel() {
    setshow(true)
  }

  function onHideModel() {
    setshow(false)
  }

  useEffect(() => {
    axios.get("http://localhost:5000/allexercise")
      .then((result) => {
        setallExcercise(result.data)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])

    function deleteExcercise(ExId) {
      axios.delete("http://localhost:5000/deleteexercise",{ data: { id: ExId} })
      .then((result) => {
        window.location.reload(false)
      }).catch((err) => 
      {
        console.log(err)
      });
    }
  return (
    <div>
      <h1 align="center"><b><u>All<span style={{color:'#fcbe03'}}>Exercise</span> </u></b></h1>
      <Container >
        <table variant='warning' className='table table-striped mtable'>
          <thead>
            <tr className='tableheading'>
              <th scope="col">Excercise note</th>
              <th scope="col">Excercise snippet</th>
              <th scope="col">Excercise language</th>
              <th scope="col">option A</th>
              <th scope="col">option B</th>
              <th scope="col">option C</th>
              <th scope="col">option D</th>
              <th scope="col">snippet ans</th>
              <th></th>
              <th><Button variant='success' onClick={() => {
                onshowModel()
              }}>Add Excercise</Button></th>
            </tr>
          </thead>

          <tbody>
            {
              allExcercise.map((Ex,idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{Ex.ExerciseNote}</td>
                    <td>{Ex.ExerciseSnippet}</td>
                    <td>{Ex.Language}</td>
                    <td>{Ex.OptionA}</td>
                    <td>{Ex.OptionB}</td>
                    <td>{Ex.OptionC}</td>
                    <td>{Ex.OptionD}</td>
                    <td>{Ex.SnippetAns}</td>
                    <td><Button variant='outline-danger' onClick={() => deleteExcercise(Ex._id)}>Delete</Button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Container>
      <AddExercise show={show} onhide={onHideModel} onShow={onshowModel} />
    </div>
  )
}

export default AllExcercise
