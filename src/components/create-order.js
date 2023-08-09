import React, { useLayoutEffect, useReducer } from "react";
import './create-order.css';
import Navbar,{ MobileNavbar } from "./navbar";
import { OrderBreadcrumb } from "./breadcrumb";
import Footer from "./footer";
import { Link } from "react-router-dom";
import SectionHeader from "./heading";
import { CtaButton } from "./services";

const StepsBreadcrumb=()=>{

    return(
        <React.Fragment>
            <div className="steps-breadcrumb">
                <div className="step-info">Submit assignment</div>
                <div className="step-info"><Link className='breadcrumb-link' to={`#`}>Get a quote and pay</Link></div>
                <div className="step-info">Receive your work</div>
            </div>
        </React.Fragment>
    )
}

const FormLegend=()=>{

    return(
        <>
            <div className="legend"> <span>*</span> indicates required field</div>
        </>
    )
}

const FormAlerts=({message})=>{

    return(
        <>
            <div className="form-alerts" >{message}</div>
        </>
    )
}

const reducer=(state, action)=>{

    switch(action.type){

        case "newSubject":{
            return{
                subject:action.newSubject,
                gradeLevel:state.gradeLevel,
                file:state.file,
                instructions:state.instructions,
                pagesOrwords:state.pagesOrwords,
                amount:state.amount,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone

            }
        }

        case "newGradeLevel":{
            return{
                gradeLevel:action.newGrade,
                subject:state.subject,
                file:state.file,
                instructions:state.instructions,
                pagesOrwords:state.pagesOrwords,
                amount:state.amount,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone
            }
        }

        case "newFile":{
            return{
                file:action.newFile,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions,
                pagesOrwords:state.pagesOrwords,
                amount:state.amount,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone
            }
        }

        case "newInstructions":{
            return{
                instructions:action.newInstructions,
                pagesOrwords:state.pagesOrwords,
                amount:state.amount,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject
            }
        }

        case "newPagesOrWords":{
            return{
                pagesOrwords:action.newPages,
                amount:state.amount,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        case "newAmount":{
            return{
                amount:action.newAmount,
                pagesOrwords:state.pagesOrwords,
                deadline:state.deadline,
                name:state.name,
                email:state.email,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        case "newDeadline":{
            return{
                deadline:action.newDeadline,
                amount:state.amount,
                pagesOrwords:state.pagesOrwords,
                name:state.name,
                email:state.email,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        case "newName":{
            return{
                name:action.newName,
                deadline:state.deadline,
                amount:state.amount,
                pagesOrwords:state.pagesOrwords,
                email:state.email,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        case "newEmail":{
            return{
                email:action.newEmail,
                name:state.name,
                deadline:state.deadline,
                amount:state.amount,
                pagesOrwords:state.pagesOrwords,
                phone:state.phone,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        case "newPhone":{
            return{
                phone:action.newPhone,
                email:state.email,
                name:state.name,
                deadline:state.deadline,
                amount:state.amount,
                pagesOrwords:state.pagesOrwords,
                file:state.file,
                gradeLevel:state.gradeLevel,
                subject:state.subject,
                instructions:state.instructions
            }
        }

        default:
    }

}

const SubmissionForm=()=>{

    const initialState={
        subject:"",
        gradeLevel:"",
        file:"",
        instructions:"",
        pagesOrwords:"",
        amount:"",
        deadline:"",
        name:"",
        email:"",
        phone:""
    }

    const [state, dispatch]=useReducer(reducer, initialState)

    const handleWheel=e=>{

        e.target.blur();

        e.stopPropagation();
    }

    const handleSubjectChange=(e)=>{

        dispatch({
            type:"newSubject",
            newSubject:e.target.value
        })
    }

    const handleGradeChange=(e)=>{

        dispatch({
            type:"newGradeLevel",
            newGrade:e.target.value
        })
    }

    const handleFileChange=(e)=>{

        const fileName=e.target.files[0];

        dispatch({
            type:"newFile",
            newFile:fileName
        })
    }

    const handleInstructionChange=(e)=>{

        dispatch({
            type:"newInstructions",
            newInstructions:e.target.value
        })
    }

    const handlePagesChange=(e)=>{

        dispatch({
            type:"newPagesOrWords",
            newPages:e.target.value
        })
    }

    const handleAmountChange=(e)=>{

        dispatch({
            type:"newAmount",
            newAmount:e.target.value
        })
    }

    const handleDeadlineChange=(e)=>{

        dispatch({
            type:"newDeadline",
            newDeadline:e.target.value
        })
    }

    const handleNameChange=(e)=>{

        dispatch({
            type:"newName",
            newName:e.target.value
        })
    }

    const handleEmailChange=(e)=>{

        dispatch({
            type:"newEmail",
            newEmail:e.target.value
        })
    }

    const handlePhoneChange=(e)=>{

        dispatch({
            type:"newPhone",
            newPhone:e.target.value
        })
    }

    const submitAssignment=(e=>{

        e.preventDefault();
        
        alert(state.file.name);
    })

    return(

        <React.Fragment>
            <form className="assignment-form" onSubmit={submitAssignment}>
            <SectionHeader tagline={`Fill in your assignment requirements`} />
                <div className="assignment-details">
                <div className="input-group">
                    <label className="required">
                        Subject
                    </label>
                    <div>
                        <select name="subject" value={state.subject} onChange={handleSubjectChange} required>
                            <option disabled value={``} hidden></option>
                            <option value="Engineering">Engineering</option>
                            <option value="programming">Programming</option>
                            <option value="History">History</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">
                        Grade Level
                    </label>
                    <div>
                        <select name="grade-level" value={state.gradeLevel} onChange={handleGradeChange} required>
                            <option disabled value={``} hidden></option>
                            <option value="K12" >K12</option>
                            <option value="Undergraduate" >Undergraduate</option>
                            <option value="Postgraduate" >Postgraduate</option>
                            <option value="Doctorate" >Doctorate</option>
                        </select>
                    </div>
                </div>
                <div className="input-group">
                    <label>
                        Attach file
                    </label>
                    <div>
                        <input type="file" onChange={handleFileChange} placeholder="add file" multiple></input>
                    </div>
                    <FormAlerts message={`supports only common image, document, video, and audio formats.`} />
                </div>
                <div className="input-group">
                    <label className="required">
                        Instructions
                    </label>
                    <div>
                        <textarea value={state.instructions} onChange={handleInstructionChange} required></textarea>
                    </div>
                </div>
                <div className="input-group">
                    <label className="required">
                        Number of Pages/Words
                    </label>
                    <div>
                        <input type="number" value={state.pagesOrwords} onChange={handlePagesChange} onWheel={handleWheel}></input>
                    </div>
                </div>

                <div className="input-group">
                    <label className="required">
                        Expected Amount (USD)
                    </label>
                    <div>
                        <input type="number" value={state.amount} onChange={handleAmountChange} onWheel={handleWheel}></input>
                    </div>
                </div>

                <div className="input-group">
                    <label className="required">
                        Deadline
                    </label>
                    <div>
                        <input type="date" value={state.deadline} onChange={handleDeadlineChange} ></input>
                    </div>
                </div>
                </div>
                <SectionHeader tagline={`Enter your information to enable us to reply to you`} />
                <div className="personal-info">
                    <div className="input-group">
                        <label className="required">
                            Name
                        </label>
                        <div>
                            <input type="text" value={state.name} onChange={handleNameChange} required></input>
                        </div>
                    </div>
                    <div className="input-group">
                        <label className="required">
                            Email
                        </label>
                        <div>
                            <input type="email" value={state.email} onChange={handleEmailChange} required></input>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>
                            Phone Number
                        </label>
                        <div>
                            <input type="tel" value={state.phone} onChange={handlePhoneChange}></input>
                        </div>
                    </div>
                </div>
                <FormLegend/>
                <CtaButton type={`submit`} message={`Submit Assignment`} />
            </form>
        </React.Fragment>
    )
}

const CreateOrder=()=>{

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return(

        <React.Fragment>
            <Navbar/>
            <MobileNavbar/>
            <section className="section" id="create-order-section">
                <div className="create-order">
                    <OrderBreadcrumb/>
                    <StepsBreadcrumb/>
                    <SubmissionForm/>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}
export{
    FormLegend
}
export default CreateOrder;