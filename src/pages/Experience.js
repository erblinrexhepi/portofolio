import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UBT College - Higher Education Institution
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ICT for Kosovo's Growth - ICT
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Attending the course 
          </h4>

          <p> ICT & Digital Skills Training on <br />
          <b> Big Data Analytics/ Data Science </b> </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ICT for Kosovo's Growth - ICT
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Graduated
          </h4>

          <p> ICT & Digital Skills Training on <br />
          <b> Python programming </b> </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ICT for Kosovo's Growth - ICT
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Graduated
          </h4>

          <p> ICT & Digital Skills Training on <br />
            <b>Web Application Development Professional</b> </p>
        </VerticalTimelineElement>
        

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;