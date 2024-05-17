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
          <h3>Cloud Software Engineer</h3>
          <h4>Communications Research Centre</h4>
            <div className="work__content">
              <div className="work-image">
                <img src={img} alt="Gov" className="work__image" />
              </div>
              <div className="work__details">
                <div>
                  <p>• To develop and maintain data visualization dashboards using PowerBI, enhancing data-driven decision-making processes within the organization. 
                    <br/> • Will leverage Python scripting and AWS technologies to streamline database operations, including data insertion, updating, and modification, within MySQL databases supporting critical research initiatives.</p>
                </div>
              </div>
            </div>
          </div>

        <div>
          <h3>Research and Development Software Engineer</h3>
          <h4>Communications Research Centre</h4>
          <div className="work__content">
            <div className="work-image">
              <img src={img} alt="Gov" className="work__image" />
            </div>
            <div className="work__details">
              <div>
                <p>• Pioneered the development of an automated environment type classification tool as part of a groundbreaking research 
                  initiative aimed at democratizing spectrum licensing in Canada
        <br/> • Leveraged advanced spatial analysis techniques, including geohashing and GeoPandas, to design and implement a robust 
        Python-based software solution capable of classifying environmental types based on geographic coordinates.
        <br/> • Employed QGIS and Matplotlib for comprehensive data collection, processing, and visualization of shapefiles, enabling the 
        accurate representation of geospatial information and further enhancing the interpretation of environmental characteristics</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
