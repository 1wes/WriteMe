import React from "react";
import './disciplines.css';
import SectionHeader from "./heading";
import { GiMicroscope, GiMoneyStack } from "react-icons/gi";
import { GoLaw } from 'react-icons/go';
import { MdSportsFootball, MdBusinessCenter, MdOutlineScience } from'react-icons/md';
import {GiHealthIncrease, GiGraduateCap} from 'react-icons/gi';
import {ImLibrary} from 'react-icons/im';
import {PiHeartbeat} from 'react-icons/pi';
import {AiOutlineDesktop, AiOutlinePieChart} from 'react-icons/ai'


let Sectors=({icon, name})=>{

    return(
        <React.Fragment>
            <div className="sector-list">
                <div className="sector-icon"><i>{icon}</i></div>
                <div className="sector-name">{name}</div>
            </div>
        </React.Fragment>
    )
}

const Disciplines=()=>{

    return(

        <React.Fragment>
            <div className="section" id="discplines-section">
                <div className="disciplines">
                    <SectionHeader heading={`Disciplines`} tagline={`We offer writing services spanning a wide range of discplines.`}/>

                    <div className="disciplines-list">
                        <Sectors name={`Biology`} icon={<GiMicroscope/>}/>
                        <Sectors name={`History`} icon={<ImLibrary/>}/>
                        <Sectors name={`Healthcare`} icon={<GiHealthIncrease/>} />
                        <Sectors name={`Lifestyle & Wellness`} icon={<PiHeartbeat/>}/>
                        <Sectors name={`Business`} icon={<MdBusinessCenter/>} />
                        <Sectors name={`Law`} icon={<GoLaw/>}/>
                        <Sectors name={`Technology`} icon={<AiOutlineDesktop/>}/>
                        <Sectors name={`Science`} icon={<MdOutlineScience/>}/>
                        <Sectors name={`Education`} icon={<GiGraduateCap/>}/>
                        <Sectors name={`Finance`} icon={<GiMoneyStack/>}/>
                        <Sectors name={`Sports`} icon={<MdSportsFootball/>}/>
                        <Sectors name={`Marketing`} icon={<AiOutlinePieChart/>}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Disciplines