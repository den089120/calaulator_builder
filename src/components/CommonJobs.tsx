import React from 'react';
import CreatePartition from "./CreatePartition";

const CommonJobs = () => {
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                    <CreatePartition/>
                    <CreatePartition/>
                    <CreatePartition/>
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
        </div>
    );
};

export default CommonJobs;