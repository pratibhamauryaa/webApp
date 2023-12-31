import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { HiUserCircle } from "react-icons/hi";
import { useRouter } from "next/router";
import '../src/styles/bootstrap.min.css'
import '../src/styles/dashboard.css'
import '../src/styles/login.css'

export default function Login() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  const [user, setUser] = useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const newUser = {
      "userName": "neo_web_uat",
      "password": "d23dnj@#dpz4"
    }
    try {
       axios.post("http://localhost:9002/api/auth/login", newUser)
      .then((res) => {
        alert(res.data);
        if (res.data.status === "Success" && res.data.errors == "") {
          router.push('/dashboard');
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Something went Wrong',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      });
      
    } catch (error) {
      console.log("hello");
      Swal.fire({
        title: 'Error',
        text: 'Something went Wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      
    }
  };



  return (
    <div className="login-popup" >
      {/* <Homepage /> */}
      <div className="card" style={{ width: "50%", marginTop: "60px" }}>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <HiUserCircle className="user-circle" />
        </div>
        <Modal.Header>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className="login-inp">
            <Form.Group>
              <Form.Label htmlFor="mobile-number">Mobile Number</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  id="mobile-number"
                  placeholder="Enter your mobile number"
                  aria-label="mobile number"
                  aria-describedby="basic-addon1"
                  type="number"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  id="password"
                  placeholder="Enter your Password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <div className="button-container">
            {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </div>
        </Modal.Footer>
      </div>
    </div>
  );
}
