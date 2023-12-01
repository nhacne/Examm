import React from "react";

import students from "../Student";
import Student from "./StudentCom";

const StudentList = ()=>{
    return (
        <div className="pricing-page">
            <h2>❤ Student List ❤</h2>
            <div>
                {students.map((student,index)=>(
                    <Student key={index} {...student} />
                ))}
            </div>
        </div>
    )
}

export default StudentList;
