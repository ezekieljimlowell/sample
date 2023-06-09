import React, { useState } from "react";
import { LoginBackground, LoginWrapper } from "../Login/LoginForm.style";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, LinkWrapper } from "../Login/LoginForm.style";
import { Select } from "./SignupForm.style";
import * as skills from "./SkillLists";
import { SelectSkills } from "./SelectSkills";
//https://medium.com/@jebasuthan/react-user-registration-and-login-using-redux-81ec739e93d1

const SignupForm = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: "",
        email: "",
        roles: "",
        department: "",
        skills: [],
        password: "",
        profilePhoto: "",
    });
    const addUserValue = e => {
        console.log(e.target.value);
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    console.log(userInfo);
    return (
        <>
            <LoginBackground>
                <LoginWrapper>
                    <Form>
                        <div>
                            <Input type="text" name="name" placeholder="Emp name" onChange={addUserValue}></Input>
                        </div>
                        <div>
                            <Input onChange={addUserValue} type="text" name="age" placeholder="age"></Input>
                        </div>
                        <div>
                            <Input onChange={addUserValue} type="email" name="email" placeholder="email"></Input>
                        </div>
                        <div>
                            <Input onChange={addUserValue} type="password" name="password" placeholder="password"></Input>
                        </div>
                        <div>
                            <Input type="file" name="profilePhoto" placeholder="profile"></Input>
                        </div>
                        <div>
                            <Select onChange={addUserValue} value={userInfo.roles} name="roles">
                                <option value="">Select Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Employee">employee</option>
                            </Select>
                        </div>
                        <div>
                            <Select onChange={addUserValue} name="department" >
                                <option value="">Select Departments</option>
                                <option value="Accounts">Accounts</option>
                                <option value="Finance">Finance</option>
                                <option value="Software solutions">Software solutions</option>
                                <option value="Marketing">Marketing</option>
                                <option value="sales">Sales</option>
                                <option value="HR">HR</option>
                                <option value="Operations">Operations</option>
                            </Select>
                        </div>
                        <div>
                            <SelectSkills skills={skills} setUserInfo={setUserInfo} userInfo={userInfo} />
                        </div>
                        <Button type="submit" className='loginButton'>Add User</Button>
                        <LinkWrapper>
                            <Link to="/">Go to Login</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/dashboard">Dashboard</Link>
                        </LinkWrapper>
                    </Form>
                </LoginWrapper>
            </LoginBackground>
        </>
    )
}

export default SignupForm;