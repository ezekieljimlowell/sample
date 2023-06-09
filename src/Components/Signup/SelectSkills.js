import React from "react";
import { Select } from "./SignupForm.style";

export const SelectSkills = ({ skills, setUserInfo, userInfo }) => {
    const handleMultipleSkills = e => {
        console.log(e.target.value);
        const Skills = userInfo?.Skills?.concat(e.target.value);
        setUserInfo({ ...userInfo, Skills: [...new Set(Skills)] })
    }
    return (
        <>
            <Select onChange={handleMultipleSkills} name="Skills" disabled={!userInfo.department} multiple department={userInfo?.department}>
                <option value="">Select Skills</option>
                {userInfo?.department === ("Accounts" || "Finance") && skills?.accountFinanceSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "HR" && skills?.HRSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Software solutions" && skills.ITSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Marketing" && skills?.operationsSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "sales" && skills?.salesSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                {userInfo?.department === "Operations" && skills?.operationsSkills?.map(skill => <option key={skill} value={skill}>{skill}</option>)}
            </Select>
        </>
    )
}