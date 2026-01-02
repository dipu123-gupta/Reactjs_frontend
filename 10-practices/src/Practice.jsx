import React from "react";

const Practice = () => {
  const students = [];
  return (
    <>
      {/* <p>{students.length&&"No students found"}</p>
    <p>Number of students:{students.length}</p> */}

      {/* 1st */}
      {/* <p>{students.length===0 && "No students found"}</p>
     <p>Number of students:{students.length}</p> */}

      {/* 2nd */}
      {/* { <p>{!students.length&& "No students found"}</p> } 
    <p>Number of students:{students.length}</p> */}

      {/* 3rd */}
      <p>{!Boolean(students.length) && "No students found"}</p>
      <p>Number of students:{students.length}</p>
    </>
  );
};

export default Practice;
