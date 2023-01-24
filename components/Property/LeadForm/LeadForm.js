import Loader from "@/components/Elements/Loader";
import { headers } from "@/next.config";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function LeadForm({ propID }) {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageClass, setMessageClass] = useState(null);
  
  const disabled = loader ? "disabled" : ""

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoader(true)
    setMessage(null)
    setMessageClass(null)
    if (propID) {
      data.property = [{ uid: propID, _content_type_uid: "properties" }];
    }

    try {
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch( `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/leads/create`, options);
      if (response.status === 201) {
        setMessage("Your enquiry has been submitted!")
        setMessageClass("success")
        document.getElementById("propertylead").reset();
      }else{
        setMessage("Something wrong! Please try again.")
        setMessageClass("danger")
      }
      setLoader(false)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="propertylead" onSubmit={handleSubmit(onSubmit)}>
      {
        message && messageClass ?
        <> <div className={"alert alert-" + messageClass}> { message }</div> </>
        : null
      }      
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label small">
          Full Name *
        </label>
        <input
          type="text"
          id="fullname"
          className="form-control border-radius-0"
          placeholder="Enter your full name"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <p role="alert" className="text-danger small">
            Full name is required
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label small">
          Email Address *
        </label>
        <input
          type="email"
          className="form-control border-radius-0"
          placeholder="Enter email address"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="text-danger small">
            Email address is required!
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label small">
          Mobile Number *
        </label>
        <input
          type="tel"
          className="form-control border-radius-0"
          placeholder="Enter mobile number"
          {...register("mobile_number", { required: true, pattern: [0-9] })}
        />
        {errors.mobile_number?.type === "required" && (
          <p role="alert" className="text-danger small">
            Mobile Number is required!
          </p>
        )}
      </div>
      <button className="btn btn-primary btn-sm" disabled={disabled}> 
      { loader ? "Submitting..." : "Submit" }
      </button>
      {        loader ?        <Loader /> : null       }
    </form>
  );
}
