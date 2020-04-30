import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './style.css';
import team from '../team.jpg'
import gavel from '../gavel.jpg'


const About = () => {


  return (
    <>
    <div className="about-comp">
    <img className="team-photo" src={team} alt="Team word"/>
    <h2 className="about">About us</h2>
    <div className="about-text">
      <p>COVID-19 is sweeping across America and so too is the worst unemployment crisis in US history.
      Connecting those who need financial help with those who can give financial help is more vital than ever. That’s where Corona Care USA comes in.
      We are here to connect people who need financial help with people who can give financial help, one bag of groceries at a time.</p>
    </div>
    <h3 className="we-info">So who are we?</h3>
    <div className="we-text">
      <p>We are a team of lawyers, marketing professionals, engineers, finance professionals, and students with the unifying goal of creating, maintaining,
      and growing Corona Care USA so we can connect people who need financial help with people who can give <br></br>financial help.</p>
    </div>
    <h1 className="team-title">The Team</h1>
    <div className="card-container">
      <CardDeck>
      <Card className="team-card">
        <div className="img-wrap">
        <Card.Img variant="top" src={gavel} />
        <h3 className="img-desc">Emma Stern</h3>
        <h5 className= "info-desc">High impact litigation and social justice attorney with a track record of driving transformative changes through leveraging a collaborative approach with internal and external stakeholders. Has more than five years of experience managing over a thousand serious criminal, civil, and family cases, including many involving complex discovery, investigation, research, and expert witnesses. Extensive trial and suppression hearing experience as well as a strong motion practice and dynamic settlement negotiation tactics. Has experience in contract drafting and review. Driven to simplify complex legal issues into digestible formats. Licensed to practice law in New York and California.</h5>
        </div>
        <Card.Body>
          <Card.Title>Emma Stern</Card.Title>
          <Card.Text className="card-text">
            Founder
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="team-card">
        <div className="img-wrap">
          <Card.Img variant="top" src={gavel} />
          <h3 className="img-desc">Emma Stern</h3>
          <h5 className= "info-desc">High impact litigation and social justice attorney with a track record of driving transformative changes through leveraging a collaborative approach with internal and external stakeholders. Has more than five years of experience managing over a thousand serious criminal, civil, and family cases, including many involving complex discovery, investigation, research, and expert witnesses. Extensive trial and suppression hearing experience as well as a strong motion practice and dynamic settlement negotiation tactics. Has experience in contract drafting and review. Driven to simplify complex legal issues into digestible formats. Licensed to practice law in New York and California.</h5>
        </div>
        <Card.Body>
          <Card.Title className="card-title">Emma Stern</Card.Title>
          <Card.Text className="card-text">
            Founder
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="team-card">
        <div className="img-wrap">
        <Card.Img variant="top" src={gavel} />
          <h3 className="img-desc">Emma Stern</h3>
          <h5 className= "info-desc">High impact litigation and social justice attorney with a track record of driving transformative changes through leveraging a collaborative approach with internal and external stakeholders. Has more than five years of experience managing over a thousand serious criminal, civil, and family cases, including many involving complex discovery, investigation, research, and expert witnesses. Extensive trial and suppression hearing experience as well as a strong motion practice and dynamic settlement negotiation tactics. Has experience in contract drafting and review. Driven to simplify complex legal issues into digestible formats. Licensed to practice law in New York and California.</h5>
        </div>
        <Card.Body>
          <Card.Title className="card-title">Emma Stern</Card.Title>
          <Card.Text className="card-text">
            Founder
          </Card.Text>
        </Card.Body>
      </Card>
      </CardDeck>
    </div>
    <h2 className="sponor-title">Our Sponors</h2>
    </div>
    </>
  )
}




export default About




/*About-Page*/
.about-comp{
  height: 2500px;
}

.about{
  margin-top: 15px;
  postion: absolute;
  width: 100%;
  top: 220px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  text-align: center;
}

.about-text{
  width: 100%;
  top: 170px;
  margin-top: 15px;
  text-align: center;
}

.we-info{

  width: 100%;
  top: 320px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  text-align: center;
}

.we-text{
  width: 100%;
  top: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  height: 125px;
  border-bottom: 1px solid #D3D3D3
}

.team-photo {
  width:100%;
  height: auto;
}

.card-container{
  diplay: inline-block
}

.team-title{
  font-family: Raleway, sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  width: 100%;

}



.card-title,h5{
  font-family: Raleway, sans-serif;
  font-weight: bolder !important;
  text-align: center;
  width: 100%;

}

.card-text{
  font-family: Raleway, sans-serif;
  font-weight: bold;
  text-align: center;
  width: 100%
}

.card-deck{
  margin-left: 5px !important;
  margin-right: 5px !important;
}

.sponor-title{
  margin-top: 20px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  text-align: center;
  width: 100%
}

.img-desc{
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 height: 100%;
 width: 100%;
 opacity: 0;
 transition: .3s ease;
 background-color: #F9F5E5;
}

.img-wrap {
  position: relative;
}
.img-wrap:hover .img-desc{
  visibility: visible;
  opacity: 1
}

.info-desc{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: #F9F5E5;

}

.img-wrap:hover .info-desc{
  visibility: visible;
  opacity: 1;
  margin-top: 100px;

}
