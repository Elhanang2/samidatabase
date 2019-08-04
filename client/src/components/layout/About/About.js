import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBMedia,MDBContainer } from "mdbreact";
import Container from "../../../styling";
import Carousel from "./Carousel";
import '../../../index.css'
class About extends Component {
    state = {  }
    render() { 
        return ( 
          <Container>
            <Carousel/>
            <MDBContainer>
            <MDBRow className="about" >
              <h3>SCHOOL NAME </h3>
                          
              <MDBCol sm="12" md="12" lg="12" className="about-text text-justify">
                
                <p>Hello Welcome to SQL Database - An E-Learning Firm running by Microsoft Valued Professional (MVP) Mr. Samuel Bayesa
                 has formed this e-learning firm for individuals who wants to learn Microsoft Technologies.</p>
                <p>At Quantum learning not only becomes easy but it becomes more fun to learn complex things in simple way.</p>
                <p>Here on this website you will find complete Microsoft Business Intelligence [MSBI] training program details,
                 free msbi tutorial videos & articles along with Complete Questpond Subscription Program which covers all Microsoft
                  related topics.</p>
                  By offering IT courses that are abreast with the industry standards and requirements, we ensure every individual/corporate house is benefitted with the offered training program. The training manuals and programs are designed to help students even during their self-study or home based training sessions, which facilitate better learning at their own pace and on their own schedule. To ensure maximum capitalisation of the learnings at Big Classes, candidates are guided towards better career growth even after the completion of their training periods. With such innovative methodologies and highly interactive sessions, Big Classes aims 
                  to completely transform the way online training works.
                <p>MSBI course is intended for Professionals who are seeking for implementing and maintaining SQL Server reporting 
                and analysis solutions.</p>
                <p><span><b>Vision:</b></span><br></br>
                To become the most preferred organization in online & corporate training, consultancy, resource development 
                & service support globally.</p>
                <p><span><b>Mission:</b></span><br></br>
                To contribute considerably to the success of our candidates / clients‘ Business by offering cost effective and quality 
                services that are visionary and result oriented.</p>
                    
                <br></br>
                
              </MDBCol><br></br>
              
            </MDBRow>
            </MDBContainer>
            </Container>
          
         );
    }
}
 
export default About;