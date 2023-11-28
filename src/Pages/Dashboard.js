import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { GiPapers } from 'react-icons/gi'
import { BsFillQuestionSquareFill, BsBookHalf } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { Container } from 'react-bootstrap';
import axios from 'axios';


const Dashboard = () => {

  const [allusers, setallusers] = useState([])
  const [blogCount, setblogCount] = useState(0)
  const [studymcount, setstudymcount] = useState(0)
  const [problemcount, setproblemcount] = useState(0)
  const [excersisecount, setexcersisecount] = useState(0)


  useEffect(() => {
    axios.get("http://localhost:5000/allregi")
      .then((result) => {
        setallusers(result.data)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])


  useEffect(() => {
    axios.get("http://localhost:5000/getpostcount")
      .then((result) => {
        setblogCount(result.data.blogsCount)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])



  useEffect(() => {
    axios.get("http://localhost:5000/problemscount")
      .then((result) => {
        setproblemcount(result.data.Problemscount)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])


  useEffect(() => {
    axios.get("http://localhost:5000/excersisecount")
      .then((result) => {
        setexcersisecount(result.data.Exercisecount)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])



  useEffect(() => {
    axios.get("http://localhost:5000/studymcount")
      .then((result) => {
        setstudymcount(result.data.StudyMcount)
      }).catch((err) => {
        console.log(err)
      });
  },
    [])


  const [state, setstate] = useState({
    options: {
      chart: {
        id: "basic-bar",

      },
      xaxis: {
        categories: ['Blog', 'Excersise', 'StudyMaterial', 'Problems']
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50]
      }
    ]

  })

 
  return (
    <div className='px-3'>
      <div className='container-fluid'>
        <h1 align='center'>Dash<span style={{ color: '#fcbe03' }}><u color='black'>Board</u></span></h1>
        <div className='row g-3 my-2'>
          <div className='col-md-3'>
            <div className='p-3 bg-black card-border-left-primary shadow-sm d-flex justify-content-around align-items-center bor'>
              <div className='mdash'>


                <h3 className='fs-2 '>{blogCount}</h3>
                <p className='fs-2'>Blogs</p>
              </div>
              <TfiWrite className='codeicon' />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='p-3 bg-black shadow-sm d-flex justify-content-around align-items-center bor'>
              <div className='mdash'>
                <h3 className='fs-2 '>{problemcount}</h3>
                <p className='fs-2'>Problems</p>
              </div>
              <BsFillQuestionSquareFill className='codeicon' />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='p-3 bg-black shadow-sm d-flex justify-content-around align-items-center bor'>
              <div className='mdash'>
                <h3 className='fs-2 '>{excersisecount}</h3>
                <p className='fs-2'>Excercise</p>

              </div>
              <GiPapers className='codeicon' />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='p-3 bg-black shadow-sm d-flex justify-content-around align-items-center bor'>
              <div className='mdash'>
                <h3 className='fs-2 '>{studymcount}</h3>
                <p className='fs-2'>StudyMaterial</p>
              </div>
              <BsBookHalf className='codeicon' />
            </div>
          </div>
        </div>
      </div>

      <h2 align='center' className='mt-5'>User Views Chart</h2>

      <div className="row">

        <div className='d-flex justify-content-center chartbor'>
          <Chart
            options={state.options}
            series={state.series}
            type='area'
            width="800"
          />

        </div>

        <div><h2 align='center' className='mt-5'>Pie Charts</h2></div>
        <div className='d-flex justify-content-center chartbor'>
          <Chart

            type='pie'
            width="700"
            height="700"

            series={[33,56,87,12]}

            options={{
              labels: ['Blogs', 'Excersie', 'StudyMaterial', 'Problems'],
              chart: {
                width: 100
              },

            }} />

        </div>

      </div>
      <h1 align="center" className='mt-5'><b><u>All<span style={{ color: '#fcbe03' }}>User</span> </u></b></h1>
      <Container>
        <table variant='warning' className='table table-striped mtable'>
          <thead>
            <tr className='tableheading'>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No</th>


            </tr>
          </thead>

          <tbody>
            {
              allusers.map((user, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.MobileNo}</td>


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

export default Dashboard
