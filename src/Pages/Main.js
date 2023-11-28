import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddExercise from './AddExercise'
import AllExcercise from './AllExcercise'
import AddProblem from './AddProblem'
import AllProblems from './AllProblems'
import ProblemDetails from './ProblemDetails'
import AddBlogs from './AddBlogs'
import AllBlogs from './AllBlogs'
import AddStudymaterial from './AddStudymaterial'
import AllStudyMaterial from './AllStudyMaterial'
import Dashboard from './Dashboard'
import {RxDashboard} from 'react-icons/rx'
import {GiGraduateCap,GiPapers} from 'react-icons/gi'
import {BsFillQuestionSquareFill,BsBookHalf} from 'react-icons/bs'
import {TfiWrite} from 'react-icons/tfi'
import {BiSearch} from 'react-icons/bi'
import BlogDetails from './BlogDetails'



const Main = () => {
  return (
    <div >
      <Container fluid >
        <Row className='mcontainer'>
        <BrowserRouter>
        <Col lg={2} className='mnav'>
            <div className='sticky'>
            <h3 className='heading divider'><GiGraduateCap className='codeicon'/>CODE PULSE</h3>
        <Nav className='mlink'>
        
        <Nav.Link>
                <Link className='mlink' to="/dashboard"><RxDashboard className='icons' /> Dashboard</Link>
            </Nav.Link>
            
           
           <Nav.Link>
                <Link className='mlink' to="/allexcercise"><GiPapers className='icons'/> All Exercise</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  to="/addexcercise"></Link>
            </Nav.Link>
            
            <Nav.Link>
                <Link className='mlink' to="/addproblem"><BsFillQuestionSquareFill className='icons'/> Add Problems</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='mlink' to="/allproblem" ><BsFillQuestionSquareFill className='icons'/> All Problems</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className='mlink' to="/allblogs"><TfiWrite className='icons'/> All Blogs</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/allprobdetails"></Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/addblogs"></Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className='mlink' to="/allstudym"><BsBookHalf className='icons'/> StudyMaterial</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/addstudym"></Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/blogdetails"></Link>
            </Nav.Link>

        </Nav>
        </div>
        </Col>
        <Col>
        <Routes >
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/addexcercise' element={<AddExercise/>}/>
            <Route path='/allexcercise' element={<AllExcercise/>}/>
            <Route path='/addproblem' element={<AddProblem/>}/>
            <Route path='/allproblem' element={<AllProblems/>}/>
            <Route path='/allprobdetails/:probId' element={<ProblemDetails/>}/>
            <Route path='/blogdetails/:blogId' element={<BlogDetails/>}/>
            <Route path='/addblogs' element={<AddBlogs/>}/>
            <Route path='/allblogs' element={<AllBlogs/>}/>
            <Route path='addstudym' element={<AddStudymaterial/>}/>
            <Route path='allstudym' element={<AllStudyMaterial/>}/>
        </Routes>
        </Col>

        </BrowserRouter>
        </Row>
 
      </Container>
    </div>
    
  )
}

export default Main
