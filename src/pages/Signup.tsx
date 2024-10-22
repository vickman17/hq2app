import { IonPage } from "@ionic/react";
import React, { useState, useEffect } from "react";
import styles from "./style/Signup.module.css";

const Signup: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
<<<<<<< HEAD
    user_type: "client"
=======
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
  });

  // State to track submission status or errors
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Disable button when form is being submitted

    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost/hq2endpoint/signup.php", {
=======
      const response = await fetch("http://localhost/api/signup.php", {
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

<<<<<<< HEAD
      const data = await response.json(); // Always parse the JSON response

      if (response.ok) {
        setSuccessMessage(data.message); // Handle success response
        setErrorMessage("");
      } else {
        // Capture additional details if the response is not OK
        const errorDetail = data.error || "An unknown error occurred.";
        setErrorMessage(errorDetail); // Handle error response
=======
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message); // Handle success response
        setErrorMessage("");
      } else {
        const data = await response.json();
        setErrorMessage(data.message); // Handle error response
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false); // Re-enable button after submission completes
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#252525";
    document.body.style.overflowX = "hidden";
<<<<<<< HEAD
    document.body.style.overflowY = "auto";
  }, []);

  const logo = "/favicon.png";
=======
    document.body.style.overflowX = "auto";
  }, []);

  const logo = "../public/favicon.png";
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836

  return (
    <IonPage style={{ textAlign: "center" }}>
      <div className={styles.content}>
<<<<<<< HEAD
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
=======
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
          <img src={logo} style={{ width: "20%", padding: "10px" }} alt="logo" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h1 style={{ fontWeight: "100", fontSize: "25px", marginBottom: "-10px", color:"white" }}>
              SIGN UP
            </h1>
            <p>Create an account</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                border: "1px solid white",
                fontSize: "17px",
                borderRadius: "6px",
                marginTop: "12px",
                width: "80%",
                padding: "10px",
                background: "#696969",
                borderStyle: "solid",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                border: "1px solid white",
                fontSize: "17px",
                borderRadius: "6px",
                marginTop: "12px",
                width: "80%",
                padding: "10px",
                background: "#696969",
                borderStyle: "solid",
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "1px solid white",
                fontSize: "17px",
                borderRadius: "6px",
                marginTop: "12px",
                width: "80%",
                padding: "10px",
                background: "#696969",
                borderStyle: "solid",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                border: "1px solid white",
                fontSize: "17px",
                borderRadius: "6px",
                marginTop: "12px",
                width: "80%",
                padding: "10px",
                background: "#696969",
                borderStyle: "solid",
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                border: "1px solid white",
                fontSize: "17px",
                borderRadius: "6px",
                marginTop: "12px",
                width: "80%",
                padding: "10px",
                background: "#696969",
                borderStyle: "solid",
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button when submitting
              style={{
                padding: "12px",
                width: "85%",
                borderRadius: "6px",
                fontSize: "16px",
                marginTop: "12px",
                backgroundColor: isSubmitting ? "#ccc" : "#19fb04", // Change color when disabled
                border: "none",
              }}
            >
              {isSubmitting ? "Almost there..." : "Sign up"} {/* Change button text */}
            </button>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "15px",
            }}
          >
            <hr style={{ width: "20%", borderBottom: "1px ", height: "0" }} />
            <p style={{ color: "#748177", fontSize: "15px" }}>or continue with</p>
            <hr style={{ width: "20%", height: "0", borderBottom: "1px " }} />
          </div>
          <div>
            <button
              type="button"
              style={{
                padding: "12px",
                width: "85%",
                borderRadius: "6px",
                fontSize: "16px",
                backgroundColor: "bab6b5",
                border: "none",
<<<<<<< HEAD
                margin: "auto",
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
                height: "40px"
              }}
            >
              <img src="/google.png" style={{width: "10%",}} alt="google icon" />
=======
              }}
            >
              <img src="./google.svg" style={{ alignItems: "auto" }} alt="google icon" />
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
              Google
            </button>
            <div style={{ marginTop: "40px" }}>
              <p style={{ margin: "0", color: "#748177", fontSize: "15px" }}>
                By clicking continue, you agree to our
              </p>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: "100" }}>
                Terms of Service <span style={{ color: "#748177", fontSize: "15px" }}>and</span> Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default Signup;
