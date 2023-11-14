import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";


export default function FormValidation() {
  const {
    register,
    formState: { errors },
    handleSubmit,control,
  } = useForm();


  const [formData, setFormData] = useState(null);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const defaultValues = { 
   numberFormat: 123456789,
}
    const onSubmit=(data)=>{
        setFormData(data);
        alert("regesteration submited")
    }

  return (
    <div className="firstbody">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Form Validation</h3>
          <input
            placeholder="Name"
            {...register("firstName", { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className="error-message">First name is required</p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p role="alert" className="error-message">Max length should be 20</p>
          )}

          <input
            placeholder="Email"
            {...register("mail", { required: true, pattern: emailPattern })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail?.type === "required" && (
            <p role="alert" className="error-message">Email is required</p>
          )}
          {errors.mail?.type === "pattern" && (
            <p role="alert" className="error-message">Please enter a valid email ID</p>
          )}

          <input
            placeholder="Age"
            type="number"
            {...register("age", { min: 10, max: 65 })}
            aria-invalid={errors.age ? "true" : "false"}
          />
           {errors.age?.type === "min" && (
            <p role="alert" className="error-message">Age should be minium 10</p>
          )}
          {errors.age?.type === "max" && (
            <p role="alert" className="error-message">Age should be minium 65</p>
          )}
          <div>
          <label>Gender :</label> <br></br>
          <label>Male
          <input type="radio"
            name="gender"
            value="male"
            {...register("gender", { required: "Gender is required" })}
            />
      </label>
      <label>Female
          <input type="radio"
            name="gender"
            value="female"
            {...register("gender", { required: "Gender is required" })}
            />
      </label>
      {errors.gender && (
            <p role="alert" className="error-message">{errors.gender.message}</p>
          )}
          </div>
          
          
             <div>
          <label htmlFor="favoriteFruit">Select city :</label>
          <select id="favoriteFruit" {...register("favoriteFruit", { required: true })}>
            <option value="">Select your city</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatire"> Coimbatore</option>
            <option value="Maduri">Maduri</option>
          </select>
          {errors.favoriteFruit && <p role="alert" className="error-message">Select your required city</p>}
          </div>
<div>
          <input type="checkbox" id="check"
          {...register("termsAndConditions", { required: "You must agree to the terms and conditions" })}
            />
            <label htmlFor="check">I agree to the terms and conditions</label>
            {errors.termsAndConditions && (
              <p role="alert" className="error-message">{errors.termsAndConditions.message}</p>
            )}
</div>
            
          <input type="submit" />
        </form>



        {formData && (
          <div>
            <h2>Submitted Data:</h2>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Email:</strong> {formData.mail}</p>
            <p><strong>City:</strong> {formData.favoriteFruit}</p>

          </div>
        )}
      </div>
    </div>
  );
}
