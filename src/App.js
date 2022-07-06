import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "",Mobile:"",Country:"",city:"",Message:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues)
    
   
  };
  
  useEffect(() => {
  
    if (Object.keys(formErrors).length === 0 && isSubmit) {
   
    }
  }, [formErrors,formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Mobile) {
      errors.Mobile = "Mobile is required!";
    } else if (values.Mobile.length < 10 ) {
      errors.Mobile = "Mobile number should be ten digit!";
    }else if (values.Mobile.length > 10) {
      errors.Mobile = "Mobile number should be ten digit!";
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registation in successfully</div>
      ) : (
        <pre>{"Please Provide Details"}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Registation Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="Mobile"
              placeholder="Mobile"
              value={formValues.Mobile}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Mobile}</p>

          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="Country"
              placeholder="Country"
              value={formValues.Country}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>city</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>

          

          <div className="field">
            <label>Message</label>
            <input
              type="text"
              name="Message"
              placeholder="Message"
              value={formValues.Message}
              onChange={handleChange}
            />
          </div>


          <button className="fluid ui button blue " >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
