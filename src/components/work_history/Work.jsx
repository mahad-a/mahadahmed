import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./work.css";
import img from "../../assets/CRC-removebg-preview.png";

const Work = () => {
  return (
    <section id="work">
      <h2>Work Experience</h2>
      <div className="work__container">
        <div>
          <h3>DevOps Software Engineer</h3>
          <h4>Communications Research Centre</h4>
            <div className="work__content">
              <div className="work-image">
                <img src={img} alt="Gov" className="work__image" />
              </div>
              <div className="work__details">
                <div>
                  <p>• Implemented a Python Flask API across company applications to capture and transmit real-time 
                    JSON usage data to an SQS queue, enhancing data collection efficiency and accuracy.
                    <br/> • Engineered an AWS Lambda function to autonomously process queued messages, dynamically 
                    appending insights to annual CSV and QuickSight reports stored in S3 buckets for comprehensive 
                    usage analytics and reporting within S3 buckets.
                    <br/> • Developed cloud applications in form of AWS CDK projects to implement infrastructure as code 
                    (IaC) principles, ensuring seamless deployment and reproducibility of cloud resources.
                    </p>
                </div>
              </div>
            </div>
          </div>

        <div>
          <h3>R&D Software Engineer</h3>
          <h4>Communications Research Centre</h4>
          <div className="work__content">
            <div className="work-image">
              <img src={img} alt="Gov" className="work__image" />
            </div>
            <div className="work__details">
              <div>
                <p>• Spearheaded a research initiative aimed at democratizing spectrum licensing in Canada by developing an 
                  innovative Python-based automated environment type classification tool
        <br/> • Leveraged advanced spatial analysis techniques such as geohashing and GeoPandas to design and implement a 
        robust software solution capable of classifying environmental types based on geographic coordinates.
        <br/> • Employed QGIS and Matplotlib for comprehensive data collection, processing, and visualization of shapefiles, 
        enabling the accurate representation of geospatial information and further enhancing the interpretation of environmental characteristics</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
