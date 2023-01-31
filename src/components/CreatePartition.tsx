import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const CreatePartition = () => {
    const {isViewJobs} = useTypedSelector(state => state.calc)
    const {selectViewJob} = useActions()

    function selectView () {
        selectViewJob(!isViewJobs)
    }

    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <button type="button" className="btn btn-outline-success btn-sm me-3" onClick={selectView}>
                            {isViewJobs
                                ? <img alt="" src="./icons/arrow-up-circle-fill.svg" className="my-auto d-block"/>
                                : <img alt="" src="./icons/arrow-down-circle-fill.svg" className="my-auto d-block"/>}

                        </button>
                        <button type="button" className="btn btn-outline-warning btn-sm">
                            <img alt="" src="./icons/check-circle.svg" className="my-auto d-block"/>
                        </button>
                    </div>
                    <div className="col text-start">
                        One of three columns
                    </div>
                    <div className="col text-end text-info">
                        One of three columns
                    </div>
                </div>
            </div>
            <div hidden={isViewJobs}>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col ">
                            <button type="button" className="btn btn-outline-warning btn-sm ms-5">
                                <img alt="" src="./icons/check-circle.svg" className="my-auto d-block"/>
                            </button>
                        </div>
                        <div className="col text-start">
                            One of three columns
                        </div>
                        <div className="col text-end text-info">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <button type="button" className="btn btn-outline-warning btn-sm ms-5">
                                <img alt="" src="./icons/check-circle.svg" className="my-auto d-block"/>
                            </button>
                        </div>
                        <div className="col text-start">
                            One of three columns
                        </div>
                        <div className="col text-end text-info">
                            One of three columns
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <button type="button" className="btn btn-outline-warning btn-sm ms-5">
                                <img alt="" src="./icons/check-circle.svg" className="my-auto d-block"/>
                            </button>
                        </div>
                        <div className="col text-start">
                            One of three columns
                        </div>
                        <div className="col text-end text-info">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CreatePartition;