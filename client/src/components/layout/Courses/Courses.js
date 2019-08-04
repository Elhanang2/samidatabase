import React, { Component } from 'react';
import Container from "../../../styling";

class Courses extends Component {
    
  render() { 
    return ( 
      <Container>
        <div style={{width:60+'%', margin:'auto'}}>
          <h2><b>What you will learn</b></h2>
          
          <ul style={{fontSize:'1.3rem',lineHeight:'35px'}}>
            <li>Learn to use the easiest Business Intelligence tool to create stunning reports and dashboards.</li>
            <li>learn how, with Power BI, to connect to multiple sources of data like SQL Server, Excel, CSV, JSON, XML, Web and SQL Analysis Services etc....</li>
            <li>Learn how to create advanced DAX measures and calculated columns for complex calculations.</li>
            <li>Learn how to use charts using visuals like column, line, pie, combo, Scatter, Treemap, Funnel, Gauges and KPIs to name a few.</li>
            <li>Learn to create powerful tables and matrix of reporting data.</li>
            <li>Learn how to turn data into insight and data into interactive visualizations to tell a story.</li>
            <li>Learn to use Custom Visualizations and Themes in Power BI.</li>
            <li>Learn how to automate the cleansing of data.</li>
            <li>This hands on course will prepare you to start your data analytics career.</li>
            <li>Learn Power BI Best Practices, Tip and Tricks.</li>
            <li>learn how you can visualize that data in a meaningful way to revile insights into your business like never before.</li>
            <li>learn how to, with the power of basic DAX, create powerful calculations and comparisons across multiples tables of data.</li>
            <li>Learn Dataflows (new CDM base, Azure Lake gen2), what it is and how to use and configure databases in it.</li>
            <li>Easily clean the messy data, model your data as per your requirement and format your report to make it look beautiful and professional.</li>
            <li>Learn how to use Text Boxes, Shapes, Images, maps, and other visuals.</li>
            <li>Learn how to use advanced features like Report page tooltips and Bookmarks.</li>
            <li>Learn  and develop data modeling skills.</li>
            <li>Learn how to  collaboration and sharing of content on Microsoft's Powerful platform.</li>
            <li>Learn Dashboard-in-a-day at your own pace at home or at your office.</li>
            </ul>
        </div>
      </Container>
    );
  }
}
 
export default Courses;