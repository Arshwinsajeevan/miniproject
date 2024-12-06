import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import "./Home.css";
import Table from "react-bootstrap/Table";
import employee from "./Employee";
import { Link, useNavigate } from "react-router-dom";

function Mainpage() {
  let history = useNavigate();

  const handleDelete = (id) => {
    // arrray of id's
    let index = employee.map((item) => item.id).indexOf(id);
    employee.splice(index, 1);
    history("/Mainpage");
  };

  const handleEdit = (id, uname, age, desig, salary) => {
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem("uname", uname);
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("desig", desig);
    localStorage.setItem("salary", JSON.stringify(salary));
  };

  return (
    <div>
      <div className="container float-right">
        <Link to="/add">
          <button
            type="button"
            className="btn btn-secondary mt-5  ml-auto "
            fdprocessedid="jfu098">
            Sell Antique<i className=""></i>
          </button>
        </Link>
      </div>
      <div className="texts text-center container p-5">
        <h2>THE GREATEST STORIES SHOULD LIVE FOREVER. </h2>
        <br></br>
        <br></br>
        <h5>
          Antique Story is, simply, all about the story. We take great pride in
          culling out the most profound narratives from the past, and retelling
          them through the lens of vintage artifacts, home décor and handpicked
          collectibles. No matter what form they take and where they go, the
          stories live on. Join us in giving these stories a new life.
        </h5>
      </div>
      <br></br>
      <br></br>
      <div className="texts">
        <Container>
          <Row>
            <Col>
              <img src={img1} alt="img1"></img>
            </Col>
            <Col className="text-center pt-5 mt-5">
              <h3>OUR HISTORY DESERVES A FUTURE.</h3>

              <h6 className="mt-5 pt-5">
                All our work at Antique Story is a natural extension of this
                spirit. As heirs to the glorious legacy of India that spans
                millennia and defies imaginations, it is our pleasure and
                privilege to conserve the treasures of this time, and pass them
                on, unadulterated, to the generations of the future.
              </h6>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container className="pt-3">
          <Row>
            <Col className="text-center pt-5 mt-5">
              <h3>THE ONE THING ART MUST HAVE IS HEART.</h3>

              <h6 className="mt-5 pt-5">
                At antique story, we put great thought and passion into what we
                pick and why we pick it. From rare folk art to exquisitely
                carved wooden panels , every object you will discover in this
                space carries deep inspiration, meaning and joy in equal
                measures. Much more than pieces of decoration, they are lessons
                on life itself. Nothing less can be called art.
              </h6>
            </Col>

            <Col>
              <img className="width" src={img2} alt="img2"></img>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>

      <Table
        striped
        bordered
        hover
        variant="success"
        style={{ margin: "7rem", width: "85%" }}
      >
        <thead>
          <tr>
            <th>Certificate Id</th>
            <th>Name</th>
            <th>Year</th>
            <th>Description</th>
            <th>Price</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {employee && employee.length > 0
            ? employee.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.desig}</td>
                  <td>{item.salary}</td>
                  {/* <td> */}
                    {/* <Link to='/edit'>
                                        <button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} type="button"
                                        class="btn btn-outline-success btn-sm" fdprocessedid="003w8i"><i class="fa-solid fa-user-pen">
                                        </i></button>
                                        </Link>

                                        <button onClick={() => handleDelete(item.id)} type="button" class="btn btn-outline-danger btn-sm ms-2"
                                        fdprocessedid="003w8i">
                                        <i class="fa-solid fa-trash-can"></i></button> */}
                  {/* </td> */}
                </tr>
              ))
            : "No table data"}
        </tbody>
      </Table>
    </div>
  );
}
export default Mainpage;
