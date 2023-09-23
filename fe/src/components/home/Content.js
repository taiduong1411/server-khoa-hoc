import React, { useState, useEffect } from "react";
import { Carousel, Divider, Row, Col, Card, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../../App.css";
import CourseDetail from "./CourseDetail";
const { Meta } = Card;

const sampleData = [
  {
    _id: 1,
    courseName: "HTML/CSS/JavaScript",
    Description: "A science fiction epic set in a distant future.",
    StartDate: "2023-09-22",
    EndDate: "2023-10-22",
    Introductor: "Duong Nguyen CSV",
    Status: true,
    Image:
      "https://nentang.vn/wp-content/uploads/2018/07/html-css-js-course-intro.jpeg",
    Price: "1.000.000 VND",
  },
  {
    _id: 2,
    courseName: "PHP",
    Description: "A cyberpunk novel that follows a washed-up computer.",
    StartDate: "2023-09-22",
    EndDate: "2023-11-10",
    Introductor: "Duong Nguyen CSV",
    Status: true,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    Price: "5.000.000 VND",
  },
  {
    _id: 3,
    courseName: "MERN Stack",
    Description:
      "The first book in a series that explores the fall of a galactic empire.",
    StartDate: "2023-09-22",
    EndDate: "2023-11-15",
    Introductor: "Duong Tai",
    Status: false,
    Image:
      "https://velog.velcdn.com/images/tnqls1211v/post/eb469fa2-7d39-441a-b5ed-a70de66e8477/image.jpg",
    Price: "12.000.000 VND",
  },
  {
    _id: 4,
    courseName: "Spring Boot",
    Description:
      "A post-cyberpunk novel set in a future where virtual reality and the internet have merged into a vast metaverse.",
    StartDate: "2023-09-22",
    EndDate: "2023-10-30",
    Introductor: "Duong Tai",
    Status: true,
    Image:
      "https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png",
    Price: "7.000.000 VND",
  },
];

const exampleTutorials = [
  "HTML/CSS/JavaScript",
  "PHP",
  "ReactJS + NodeJS + ExpressJS + MongoDB",
  "ReactJS + Spring Boot",
];

const ContentPart = () => {
  const [courses, setCourses] = useState([]);
  const [carouselContent, setCarouselContent] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({
    courseName: '',
    Description: '',
    StartDate: '',
    EndDate: '',
    Introductor: '',
    Status: '',
    Image: '',
    Price: ''
  });

  useEffect(() => {
    setCarouselContent(exampleTutorials);
    setCourses(sampleData);
  }, []);

  const handleCardClick = (e, course) => {
    setIsSelected(true);
    setCurrentCourse(course);
  };

  return (
    <>
      <Carousel autoplay>
        {carouselContent.map((tutorial, index) => (
          <div>
            <h3 className="carouselStyle" key={index}>
              {tutorial}
            </h3>
          </div>
        ))}
      </Carousel>
      <Divider className="divider" orientation="left" orientationMargin="20">
        Courses
      </Divider>
      <Row
        className="row-content"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {courses.map((course) => (
          <Col className="gutter-row" span={5}>
            <Card
              className="card-container"
              hoverable
              size="small"
              key={course._id}
              cover={<img alt={course.courseName} src={course.Image} />}
            >
              <Meta title={course.courseName} />
              <div>
                <div className="course-introductor">
                  Giảng viên: {course.Introductor}
                </div>
                <div className="course-description">{course.Description}</div>
                <div className="course-price">{course.Price}</div>
                <Button
                  className="btn-detail-course"
                  type="primary"
                  onClick={(e) => handleCardClick(e, course)}
                  icon={<InfoCircleOutlined />}
                >
                  Detail
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {isSelected && <CourseDetail course={currentCourse} />}
    </>
  );
};

export default ContentPart;
