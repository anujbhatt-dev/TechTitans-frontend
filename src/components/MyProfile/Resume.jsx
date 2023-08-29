import axios from "axios"
import { useEffect, useState } from "react"
const Resume =(props)=>{
    
    return <div className="resume">
    <div className="resume__header">
        <img src={`data:image/jpg;base64,${props.user.pic}`}/>
        <div className="resume__header_contact">
            <div className="resume__header_contact_name">
                {props.user.name}
            </div>
            <div className="resume__header_contact_email">
                {props.user.email}
            </div>
            <div className="resume__header_contact_phone">
                {props.user.phone}
            </div>
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">objective</div>
        <div className="resume__section_content">
            <div className="resume__section_content_title">
                {props.resume.objective}
            </div>
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">Education</div>
        <div className="resume__section_items">
            {props.resume.education.map((item)=>{
                return  <div className="resume__section_items_item">
                            <div className="resume__section_content_title">
                                {item.degree}
                            </div>
                            <div className="resume__section_items_item_detail">
                                {item.college}
                            </div>
                            <div className="resume__section_items_item_detail">
                                {item.startYear}-{item.endYear}
                            </div>
                            <div className="resume__section_items_item_detail">
                                cgpa: {item.cgpa}
                            </div>
                        </div>
            })}
            
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">projects</div>
        <div className="resume__section_items">
            {props.resume.projects.map((item)=>{
                return  <div className="resume__section_items_item">
                            <div className="resume__section_content_title">
                                {item.title}
                            </div>
                            <div className="resume__section_items_item_detail">
                                <b>Description: </b>{item.description}
                            </div>
                            <div className="resume__section_items_item_detail">
                            <b>Technologies: </b>{item.technologies.map((technology)=>{
                                return <span>&#183; {technology} </span>
                            })}
                            </div>
                        </div>
            })}
            
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">certifications</div>
        <div className="resume__section_items">
            {props.resume.certifications.map((item)=>{
                return  <div className="resume__section_items_item">
                            <div className="resume__section_content_title">
                                {item.title}
                            </div>
                            <div className="resume__section_items_item_detail">
                                <b>Issuer: </b>{item.issuer}
                            </div>
                            <div className="resume__section_items_item_detail">
                            <b>Earned on: </b>{item.dateEarned}
                            </div>
                        </div>
            })}
            
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">interests</div>
        <div className="resume__section_content">
            <div className="resume__section_items_item_detail">
                {props.resume.interests.map((item)=>{
                    return <span>&#183; {item} </span>
                })}
            </div>
        </div>
    </div>
    <hr className="resume__hr"/>
    <div className="resume__section">
        <div className="resume__section_head">Skills</div>
        <div className="resume__section_content">
            <div className="resume__section_items_item_detail">
                {props.resume.skills.map((item)=>{
                    return <span>&#183; {item} </span>
                })}
            </div>
        </div>
    </div>
</div>
}

export default Resume