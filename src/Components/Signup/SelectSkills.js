import React from "react";
import { Select } from "./SignupForm.style";

export const SelectSkills = ({ Skills, setUserInfo, userInfo }) => {
    const handleMultipleSkills = e => {
        console.log(e.target.value);
        const Skills = userInfo?.Skills?.concat(e.target.value);
        setUserInfo({ ...userInfo, Skills: [...new Set(Skills)] })
    }
    return (
        <>
            <Select onChange={handleMultipleSkills} name="Skills" disabled={!userInfo.department} multiple department={userInfo?.department}>
                <option value="">Select Skills</option>
                {userInfo?.department === ("Accounts" || "Finance") && Skills?.accountFinanceSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "HR" && Skills?.HRSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Software solutions" && Skills.ITSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Marketing" && Skills?.operationsSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "sales" && Skills?.salesSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Operations" && Skills?.operationsSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
            </Select>
        </>
    )
}