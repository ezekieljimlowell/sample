import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FlexBox, MarginDiv } from "./Navigation";

const UserDetails = ({ viewUserData, setShowUser, showUser }) => {
    const hide = () => setShowUser(false)
    return (
        <>
            {viewUserData && Object.values(viewUserData)?.length > 0 &&
                <Modal show={showUser} onHide={hide}>
                    <MarginDiv>
                        <FlexBox align="center" justify="space-between">
                            <div>
                                <b>Name: </b><span>{viewUserData.name}</span>
                            </div>
                            <Button onClick={() => setShowUser(false)}>X</Button>
                        </FlexBox>
                        <div><b>Email: </b><span>{viewUserData.email}</span></div>
                        <div><b>Age: </b><span>{viewUserData.age}</span></div>
                        <div><b>Department: </b><span>{viewUserData.department}</span></div>
                        <div><b>Role: </b><span>{viewUserData.roles}</span></div>
                        <div>
                            <b>Skills: </b><ol type="i">
                                {viewUserData?.skills?.map(t => <li key={t}>{t}</li>)}
                            </ol>
                        </div>
                    </MarginDiv>
                </Modal>}
        </>
    )
}

export default UserDetails;
