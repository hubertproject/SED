/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import sedlogo from "../assets/sedlogo.jpg";

const ApplicationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    homeAddress: "",
    contactPhone: "",
    emailAddress: "",

    beceSchool: "",

    wascceSchool: "",

    highSchoolDiplomaSchool: "",

    degreeSchool: "",

    hndSchool: "",

    mastersSchool: "",
    companyName: "",
    years: "",

    note: "",
    parentName: "",
    parentPhone: "",
    radio: "",
    salesOfficers: "",
    heardByName: "",
    socialMedia: "",
    signatureDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
   


  const {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    homeAddress,
    contactPhone,
    emailAddress,

    beceSchool,

    wascceSchool,

    highSchoolDiplomaSchool,

    degreeSchool,

    hndSchool,

    mastersSchool,
    companyName,
    years,

    note,
    parentName,
    parentPhone,
    radio,
    salesOfficers,
    heardByName,
    socialMedia,
    signatureDate,
    C,
  } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // array of required fields
    const requiredFields = [
      "firstName",
      "middleName",
      "lastName",
      "dateOfBirth",
      "emailAddress",
    ];

    // Log the form data to check the values
    console.log(data);

    // Check if all required fields are filled
    const hasMissingFields = requiredFields.some((field) => !data[field]);

    if (hasMissingFields) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const formData = new FormData();
       

      const response = await fetch(
        "https://v1.nocodeapi.com/damashub/google_sheets/rGmLYUnRuCEfIVsC?tabId=Sheet3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              firstName,
              middleName,
              lastName,
              dateOfBirth,
              age,
              homeAddress,
              contactPhone,
              emailAddress,

              beceSchool,

              wascceSchool,

              highSchoolDiplomaSchool,

              degreeSchool,

              hndSchool,

              mastersSchool,
              companyName,
              years,

              note,
              parentName,
              parentPhone,
              radio,
              salesOfficers,
              heardByName,
              socialMedia,
              signatureDate,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        // Clear form data after submission
        setData({
          firstName: "",
          middleName: "",
          lastName: "",
          dateOfBirth: "",
          age: "",
          homeAddress: "",
          contactPhone: "",
          emailAddress: "",

          beceSchool: "",

          wascceSchool: "",

          highSchoolDiplomaSchool: "",

          degreeSchool: "",

          hndSchool: "",

          mastersSchool: "",
          companyName: "",
          years: "",

          note: "",
          parentName: "",
          parentPhone: "",
          radio: "",
          salesOfficers: "",
          heardByName: "",
          socialMedia: "",
          signatureDate: "",
        });
        setErrorMessage(""); // Clear any previous error message
      } else {
        setSuccessMessage(""); // Clear any previous success message
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage(""); // Clear any previous success message
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  const handlePrint = () => {
    window.print();
    };
  

  
  return (
    
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-maroona p-2 rounded shadow-md w-full max-w-xl mt-5">
        
          <div className="text-red-500 border border-red-500 p-4 rounded">
                <p className="mb-4 font-bold text-mx">
                   PLEASE TAKE NOTES
                  
                </p>
                <ul className="list-disc list-inside text-lg text-white">
                  <li>
                    Click the Print Button and save as PDF
                  </li>
                  <li>
                     After that submit the Form 
                  </li>
                   
                  <li>
                    Attach your School Certificate and Passport Pictures
                  </li>
                  
                  <li>
                    Print the PDF and sign it Afterwards
                  </li>
                  
                </ul>
              </div>
        <h1 className="text-2xl font-bold mt-4 text-red-500 text-center">
          THE SEDS INSTITUTES APPLICATION FORM
        </h1>
        <div>
          <h2 className="text-2xl font-semibold mb-4 mt-4">
            Personal Information
          </h2>
          
  
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-between">
              <label htmlFor="firstName" className="text-sm font-medium w-1/4">
                First Name:
              </label>
              <input
                type="text"
                value={firstName}
                name="firstName"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="middleName" className="text-sm font-medium w-1/4">
                Middle Name:
              </label>
              <input
                type="text"
                value={middleName}
                name="middleName"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="lastName" className="text-sm font-medium w-1/4">
                Last Name:
              </label>
              <input
                type="text"
                value={lastName}
                name="lastName"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label
                htmlFor="dateOfBirth"
                className="text-sm font-medium w-1/4"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                value={dateOfBirth}
                name="dateOfBirth"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="age" className="text-sm font-medium w-1/4">
                Age:
              </label>
              <input
                type="number"
                value={age}
                name="age"
                className="form-input w-3/4 text-black h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label
                htmlFor="homeAddress"
                className="text-sm font-medium w-1/4"
              >
                Home Address:
              </label>
              <input
                type="text"
                value={homeAddress}
                name="homeAddress"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label
                htmlFor="contactPhone"
                className="text-sm font-medium w-1/4"
              >
                Contact Phone No.:
              </label>
              <input
                type="tel"
                value={contactPhone}
                name="contactPhone"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label
                htmlFor="emailAddress"
                className="text-sm font-medium w-1/4"
              >
                Email Address:
              </label>
              <input
                type="email"
                value={emailAddress}
                name="emailAddress"
                className="form-input w-3/4 text-black  h-10"
                onChange={handleChange}
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">BECE:</label>

              <input
                type="text"
                value={beceSchool}
                name="beceSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">WASSCE:</label>

              <input
                type="text"
                value={wascceSchool}
                name="wascceSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">
                High School Diploma:
              </label>

              <input
                type="text"
                value={highSchoolDiplomaSchool}
                name="highSchoolDiplomaSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">Degree:</label>

              <input
                type="text"
                value={degreeSchool}
                name="degreeSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">HND:</label>

              <input
                type="text"
                value={hndSchool}
                name="hndSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">Masters:</label>

              <input
                type="text"
                value={mastersSchool}
                name="mastersSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
                onChange={handleChange}
              />
            </div>
            <p className="text-sm w-3/4 ml-12 text-gray-600 mt-4">
              Attached a copy of any of the above certificates [just one]
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium w-1/4"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  value={companyName}
                  name="companyName"
                  placeholder="Please List the Companies Accordingly"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label className="text-sm font-medium w-1/4">Years:</label>
                <input
                  type="text"
                  value={years}
                  name="years"
                  className="form-input w-3/4 text-black  h-10"
                  placeholder="Please List Years Accordingly"
                  onChange={handleChange}
                />
              </div>

              <p className="text-sm w-3/4 ml-12 text-gray-600 mt-4">
                NOTE: Write "NA" across the above space if you have no working
                experience, and don't worry about it.
              </p>
            </div>
            <div className="mt-4">
              <div className="mt-4">
                <label htmlFor="note" className="text-l font-medium w-1/4">
                  Write a brief note about yourself:
                </label>
                <textarea
                  value={note}
                  name="note"
                  className="form-textarea h-40 w-80 text-black w-full"
                  placeholder="Write a brief note about where you see yourself in the next three (3) years."
                  onChange={handleChange}
                ></textarea>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Parent/Sponsor</h2>
              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="parentName"
                  className="text-sm font-medium w-1/4 mb-4"
                >
                  Name:
                </label>
                <input
                  type="text"
                  value={parentName}
                  name="parentName"
                  className="form-input w-3/4 text-black h-10"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="parentPhone"
                  className="text-sm font-medium w-1/4 mb-4"
                >
                  Phone No.:
                </label>
                <input
                  type="tel"
                  value={parentPhone}
                  name="parentPhone"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                How did you hear about Us?
              </h2>
              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">Name of Place:</label>
                <input
                  type="text"
                  value={radio}
                  name="radio"
                  placeholder="Name of where you heard from us"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">
                  Sales Officers:
                </label>
                <input
                  type="text"
                  value={salesOfficers}
                  name="salesOfficers"
                  placeholder="Name of Sales Officer"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">
                  Social Media:
                </label>
                <input
                  type="text"
                  value={socialMedia}
                  name="socialMedia"
                  className="form-input w-3/4 text-black  h-10"
                  placeholder="Name of Social Media"
                  onChange={handleChange}
                />
              </div> */}

              {/* <div className="text-red-500 border border-red-500 p-4 rounded">
                <p className="mb-2">
                  Preparatory Tuition Fee is Payable ONLY at the address below
                </p>
              </div> */}

              <div className="mt-4 flex justify-between">
                <label
                  htmlFor="applicantName"
                  className="text-sm font-medium w-1/4"
                >
                  Signature:
                </label>
                <textarea
                  value="applicantName"
                  name="applicantName"
                  className="form-textarea h-10 w-3/4"
                  placeholder="Please Only Sign After Printing"
                ></textarea>
              </div>

              <div className="mt-4 flex justify-between">
                <label
                  htmlFor="signatureDate"
                  className="text-sm font-medium w-1/4"
                >
                  Date:
                </label>
                <input
                  type="date"
                  value={signatureDate}
                  name="signatureDate"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end items-center">
                {successMessage && (
                  <p className="text-green-500 mt-3">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-500 mt-3">{errorMessage}</p>
                )}
                <button
                type="button"   
                onClick={handlePrint}  // Call handlePrint function on click
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 w-full mt-5"
              >
                Print
              </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-red-700 text-white-500 font-bold py-2 px-4 rounded mr-4 w-full mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
          
         
          
          
          </div>
        </div>
      </div>
    
  );
};

export default ApplicationForm;