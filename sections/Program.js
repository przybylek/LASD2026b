import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'


/*
const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
      <a className='target' id='program'/>
      <h2 className='display-4 anchor mb-3'>Program</h2>
      <p>
          TBA...
      </p>
    </Container>
)
*/


const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>


    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Wed., September 2nd</th><th>Session 3D (Room 302); chaired by <em>Session Chair</em></th></tr>
<tr><td className='text-nowrap'>10:30 - 10:50</td><td>Agile Mindset Impact on Artificial Intelligence adoption in software development (<em>Maciej Kucharski, Jari Jussila and Wioleta Kucharska</em>)</td></tr>
<tr><td className='text-nowrap'>10:50 - 11:10</td><td>Does Scaling Agile Undermine Psychological Safety? A Two-Wave Study of a SAFe Transformation (<em>Tomas Gustavsson and John Johansson</em>)</td></tr>
<tr><td className='text-nowrap'>11:10 - 11:30</td><td>Quality Requirements in Large-Scale Agile Development- A Case Study on the implementation of Web Accessibility (<em>Nima Hakimi, Babak A. Farshchian and Parastoo Mohagheghi</em>)</td></tr>
<tr><td className='text-nowrap'>11:30 - 11:45</td><td>What happened to the Spotify Model? (<em>Francisco Gracia Ahufinger, Javier Gutierrez and Julián Alberto García García</em>)</td></tr>
<tr><td className='text-nowrap'>11:45 - 12:00</td><td>Transforming the role of the project manager in IT project implementation (<em>Anna Sołtysik-Piorunkiewicz, Witold Chmielarz and Piotr Szulc</em>)</td></tr>

        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>
        <tr className='text-center table-primary'><th>Wed., September 2nd</th><th>Session 5D (Room 302); chaired by <em>Session Chair</em></th></tr>
<tr><td className='text-nowrap'>15:30 - 15:50</td><td>Agile Methods for Safety-Critical Systems: Managing Evolving Requirements in Autonomous Vehicle Perception Systems Development (<em>Hina Saeeda and Soniya Abraham</em>)</td></tr>
<tr><td className='text-nowrap'>15:50 - 16:10</td><td>Governing Through Interpretation: AI-Augmented Sensemaking in Agile Delivery Teams (<em>Joseph Puthenpurackal Chakko</em>)</td></tr>
<tr><td className='text-nowrap'>16:10 - 16:30</td><td>How the Rules Shape the Success of Agile in Public Organizations (<em>Tanja Elina Havstorm, Denis Cesko, Mursel Mohammad Naim and Fatima Touray</em>)</td></tr>
<tr><td className='text-nowrap'>16:30 - 16:45</td><td>Towards LLM-Based Conceptual Modeling from User Stories and Behavior-Driven Development Scenarios in Agile Requirements Engineering (<em>Jorick van Bon, Stephan Poelmans and Yves Wautelet</em>)</td></tr>
<tr><td className='text-nowrap'>16:45 - 17:00</td><td>Adoption of Scrum Methodology Within a Software Development Team in a Non-Technology Organization (<em>Krzysztof Hankiewicz and Piotr Hankiewicz</em>)</td></tr>


        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>
        <tr className='text-center table-primary'><th>Wed., September 2nd</th><th>Session 6 - Poster Exhibit (Foyer)</th></tr>
        <tr><td className='text-nowrap' rowSpan={4}>17:00-18:00</td><td>Monolith vs. Microservices: A Preliminary Performance Analysis Across Java, .NET, and Python (<em>Rafał Jankowski, Aleksandra Boruczkowska, Bartosz Bartczak and Jakub Pilarski</em>)</td></tr>
    	<tr><td>Defining Metrics for Agile Development of Big Data Analytics Systems (<em>Jacek Maślankowski</em>)</td></tr>
	<tr><td>Human Users vs. LLMs: An Empirical Study of Requirements Elicitation for Creativity Enhancement App (<em>Kamila Łuczak, Urszula Domagała, Katarzyna Renik and Anna Nowacka</em>)</td></tr>
	<tr><td>From Generative Co-Design to Agentic Co-Delivery: A Conceptual Framework for Managing AI Process Debt in Scrum (<em>Slawomir Ostrowski</em>)</td></tr>


      </tbody>
    </Table>
  </Container>
)


export default Program


//    <Row className="justify-content-center my-5">
//      <Col xs lg="1"> 
//      </Col>
//
//      <Col xs lg="2"> 
//        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
//      </Col>
//      <Col>
//  <h4>Lean and Agile Software Development</h4>
//  <h5>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h5>
//  <h4><a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h4>          
//      <p className='mt-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
//      <p>Current Time:
//         <Clock 
//           format={'HH:mm:ss'}
//           ticking={true}
//           className="mx-2" />
//       </p>
//      </Col>
//     <Col xs lg="1"> 
//      </Col>
//    </Row> 


  
