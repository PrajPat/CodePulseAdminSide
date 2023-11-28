import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import problem from '../Assets/Images/problemsolving.png'

const ProblemDetails = () => {

    const { probId } = useParams()

    const [progDetails, setprogDetails] = useState({})

    useEffect(() => {
        const data = {
            id: probId
        }
        axios.post("http://localhost:5000/getproblembyid", data)
            .then((result) => {
                console.log(result.data)
                setprogDetails(result.data)
            }).catch((err) => {
                console.log(err)
            });
    },
        {})

    return (
        <div>
            <h1 align='center'><b><u>All <span style={{color:'#fcbe03'}}>Problems</span> </u></b></h1>
            <div>
          <Image className='blogback' src={problem}></Image></div>
 
            {/* <h3>{probId}</h3> */}
            <Container>
        <h2><u> <span style={{color:'#0000B3'}}>Problem Title:</span></u></h2>
        <h5>{progDetails.ProblemTitle}</h5>

        <h2><u><span style={{color:'#0000B3'}}>Sample Input:</span></u></h2>
        <h5>{progDetails.ProblemsSampleInput}</h5>

        <h2><u><span style={{color:'#0000B3'}}>Sample Output:</span></u></h2>
        <h5>{progDetails.ProblemsSampleOutput}</h5>

        <h2><u><span style={{color:'#0000B3'}}>ProblemsExplanation</span></u></h2>
        <pre>{progDetails.ProblemsExplanation}</pre>

        <h2><u><span style={{color:'#0000B3'}}>Problem Code:</span></u></h2>
        <pre><b>{progDetails.ProblemCode}</b></pre>


            </Container>
        </div>
    )
}

export default ProblemDetails
