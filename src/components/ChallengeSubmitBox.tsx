import React from "react";
import Button from "./Button";

export default function ChallengeSubmitBox() {
    return (
        <div className="p-[2rem] bg-blue-100">
            <Button variant="secondary">Submit</Button>
            <Button variant="secondary">Try another</Button>
        </div>
    )
}