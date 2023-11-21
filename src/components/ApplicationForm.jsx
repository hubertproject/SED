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
  const [previewMode, setPreviewMode] = useState(false);


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

    // Define an array of required fields
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
      // formData.append("file", picture);

      const response = await fetch(
        "https://v1.nocodeapi.com/damashub/google_sheets/rGmLYUnRuCEfIVsC?tabId=Sheet1",
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
  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };

  const handlePrint = () => {
    window.print();
  };
  return (
    
    <div className="bg-white-100 min-h-screen flex items-center justify-center">
      <div className="bg-white-100 p-2 rounded shadow-md w-full max-w-xl">
        <img
          src={sedlogo}
          alt="Your Logo"
          className="w-16 h-16 absolute top-2 left-4 mb-8"
          style={{ width: "90px", height: "45px" }}
        />
          <div className="text-red-500 border border-red-500 p-4 rounded">
                <p className="mb-4 font-bold text-xl">
                   PLEASE TAKE NOTES
                  
                </p>
                <ul className="list-disc list-inside text-lg text-white">
                  <li>
                    After filling the Form Preview it and Print it 
                  </li>
                  <li>
                    Click on the Edit button and now Submit 
                  </li>
                   
                  <li>
                    Attach your Preference School Certificate 
                  </li>
                  <li>
                    Attach Your Passport Picture and when reporting
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
          {previewMode ? (
  // Render form data in preview mode
  <div>
    <h2 className="text-2xl font-semibold mb-4">Preview</h2>
    <p>First Name: {firstName}</p>
    <p>Middle Name: {middleName}</p>
    <p>Last Name: {lastName}</p>
    <p>Date of Birth: {dateOfBirth}</p>
    <p>Age: {age}</p>
    <p>Home Address: {homeAddress}</p>
    <p>Contact Phone No.: {contactPhone}</p>
    <p>Email Address: {emailAddress}</p>

    <h2 className="text-2xl font-semibold mb-4 mt-4">Education</h2>
    <p>BECE: {beceSchool}</p>
    <p>WASSCE: {wascceSchool}</p>
    <p>High School Diploma: {highSchoolDiplomaSchool}</p>
    <p>Degree: {degreeSchool}</p>
    <p>HND: {hndSchool}</p>
    <p>Masters: {mastersSchool}</p>

    <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
    <p>Company Name: {companyName}</p>
    <p>Years: {years}</p>

    <p className="text-sm w-3/4 ml-12 text-gray-600 mt-4">
      Attached a copy of any of the above certificates [just one]
    </p>

    <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
    <p>Note: {note}</p>

    <h2 className="text-2xl font-semibold mb-4">Parent/Sponsor</h2>
    <p>Parent/Sponsor Name: {parentName}</p>
    <p>Parent/Sponsor Phone No.: {parentPhone}</p>

    <h2 className="text-2xl font-semibold mb-4">
      How did you hear about Us?
    </h2>
    <p>Radio: {radio}</p>
    <p>Sales Officers: {salesOfficers}</p>
    <p>Social Media: {socialMedia}</p>

    <div className="text-red-500 border border-red-500 p-4 rounded">
      <p className="mb-2">
        Preparatory Tuition Fee is Payable ONLY at the address below
      </p>
    </div>

    <div className="mt-4 flex justify-between">
      <label htmlFor="applicantName" className="text-sm font-medium w-1/4">
        Signature:
      </label>
      <p>{/* Render the signature here */}</p>
    </div>

    <div className="mt-4 flex justify-between">
      <label htmlFor="signatureDate" className="text-sm font-medium w-1/4">
        Date:
      </label>
      <p>{signatureDate}</p>
    </div>
  </div>
) : (
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
                <label className="text-sm font-medium w-1/4">Radio:</label>
                <input
                  type="text"
                  value={radio}
                  name="radio"
                  placeholder="Name of Radio Station"
                  className="form-input w-3/4 text-black  h-10"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 flex justify-between items-center">
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
              </div>

              <div className="text-red-500 border border-red-500 p-4 rounded">
                <p className="mb-2">
                  Preparatory Tuition Fee is Payable ONLY at the address below
                </p>
              </div>

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
                  className="form-textarea h-20 w-3/4"
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
                  type="submit"
                  className="bg-green-500 hover:bg-red-700 text-white-500 font-bold py-2 px-4 rounded mr-4 w-full mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
          )}
          <div className="flex justify-end items-center">
            {successMessage && (
              {/* <p className="text-green-500 mt-3">{successMessage}</p> */}
            )}
            {/* {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>} */}
            {previewMode ? (
              // Render submit button when not in preview mode
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 w-full mt-5"
                onClick={togglePreviewMode}
              >
                Edit
              </button>
            ) : (
              // Render preview button when in edit mode
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 w-full mt-5"
                onClick={togglePreviewMode}
              >
                Preview
              </button>
            )}
            {/* {!previewMode && (
              // Render submit button when not in preview mode
              <button
                type="submit"
                className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4 w-full mt-5"
              >
                Submit
              </button>
            )} */}
            {previewMode && (
              // Render print button when in preview mode
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full mt-5"
                onClick={handlePrint}
              >
                Print
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;