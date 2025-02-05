import React from "react";
import Template from "../course-enroll-template";
import video from "../../resources/video.mp4";

import tutorImg from "../../resources/bhaveshIcon.jpg";
import resume from "../../resources/Bhavesh Mhadse.pdf";

const EnrollPage = () => {
  return (
    <div>
      <Template CourseName='Javascript Complete Course' CourseID='javascript01' SeriesName='códiGo : Javascript Development Series' CourseDesc='Become Zero-To-Hero in Javascript and start building Web-Applications' CourseDuration='2 Hour' CourseStructure='4 Sections with Practise Quizes and a Certificate Exam' TutorImg={tutorImg} TutorName='Bhavesh Mhadse' TutorDesc='Full Stack Developer who loves Javascript | 10+ Personal Projects' resumeUrl={resume} githubUrl='https://github.com/bhaveshmhadse' instaUrl='https://www.instagram.com/bhaaaavesh__' linkedUrl='https://www.linkedin.com/in/bhavesh-mhadse-053442216/' mailUrl='mailto:bhaveshmhadse9@gmail.com?subject=I have a query for Javascript Course&body=Hey Bhavesh !!' Section1='Section 1 : Introduction to Javascript' Section2='Section 2 : Basic Programming Concepts ' Section3='Section 3 : OOPS in Javascript ' Section4='Section 4 : Javascript the wierd parts ' video={video}></Template>
    </div>
  );
};

export default EnrollPage;
