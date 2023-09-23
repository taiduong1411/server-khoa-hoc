import React, { useState, useEffect } from "react";
import { Modal, Image, Button } from "antd";
import '../../App.css';

const CourseDetail = ({ course }) => {
    const [isOpenModal, setIsOpenModal] = useState(true);

    useEffect(() => {
        setIsOpenModal(true);
    }, [course]);

    const handleEnrollClick = (e) => {
        setIsOpenModal(false);
    }

    const handleCancelClick = (e) => {
        setIsOpenModal(false);
    };
  return (
    <Modal open={isOpenModal} footer={null} onCancel={handleCancelClick} width={800} >
      <div style={{display: "flex", flexDirection: 'row'}}>
        <Image src={course.Image} className="img-detail-course" width={500} height={300} preview={false}/>
        <div className="detail-info-course" style={{
            fontSize: '18px',
            margin: '30px 20px 0 20px'
        }}>
          <div><strong>Course:</strong> {course.courseName}</div>
          <div><strong>Introductor:</strong> {course.Introductor}</div>
          <div><strong>Description:</strong> {course.Description}</div>
          <div><strong>Start date:</strong> {course.StartDate}</div>
          <div><strong>End date:</strong> {course.EndDate}</div>
          <div><strong>Price:</strong> {course.Price}</div>
        <Button type="primary" onClick={handleEnrollClick} 
        style={{
            margin: '20px 100px'
        }}>Enroll</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CourseDetail;
