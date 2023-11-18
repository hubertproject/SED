/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import sedlogo from "../assets/sedlogo.jpg";

const ApplicationForm = () => {
  return (
    <div className="bg-white-100 min-h-screen flex items-center justify-center">
      <div className="bg-white-100 p-2 rounded shadow-md w-full max-w-xl">
        <img
          src={sedlogo}
          alt="Your Logo"
          className="w-16 h-16 absolute top-2 left-4 mb-8"
          style={{ width: "90px", height: "45px" }}
        />
        <h1 className="text-2xl font-bold mt-4 text-red-500 text-center">
          THE SEDS INSTITUTES APPLICATION FORM
        </h1>
        <div>
          <h2 className="text-2xl font-semibold mb-4 mt-4">
            Personal Information
          </h2>
          <form>
            <div className="mb-4 flex justify-between">
              <label htmlFor="firstName" className="text-sm font-medium w-1/4">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input w-3/4 text-black  h-10"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="middleName" className="text-sm font-medium w-1/4">
                Middle Name:
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="form-input w-3/4 text-black  h-10"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="lastName" className="text-sm font-medium w-1/4">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input w-3/4 text-black  h-10"
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
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-input w-3/4 text-black  h-10"
              />
            </div>

            <div className="mb-4 flex justify-between">
              <label htmlFor="age" className="text-sm font-medium w-1/4">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-input w-3/4 text-black h-10"
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
                id="homeAddress"
                name="homeAddress"
                className="form-input w-3/4 text-black  h-10"
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
                id="contactPhone"
                name="contactPhone"
                className="form-input w-3/4 text-black  h-10"
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
                id="emailAddress"
                name="emailAddress"
                className="form-input w-3/4 text-black  h-10"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">BECE:</label>
              <input
                type="checkbox"
                id="bece"
                name="bece"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="beceSchool"
                name="beceSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">WASSCE:</label>
              <input
                type="checkbox"
                id="wassce"
                name="wassce"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="wassceSchool"
                name="wassceSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">
                High School Diploma:
              </label>
              <input
                type="checkbox"
                id="highSchoolDiploma"
                name="highSchoolDiploma"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="highSchoolDiplomaSchool"
                name="highSchoolDiplomaSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">Degree:</label>
              <input
                type="checkbox"
                id="degree"
                name="degree"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="degreeSchool"
                name="degreeSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">HND:</label>
              <input
                type="checkbox"
                id="hnd"
                name="hnd"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="hndSchool"
                name="hndSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <label className="text-sm font-medium w-1/4">Masters:</label>
              <input
                type="checkbox"
                id="masters"
                name="masters"
                className="form-checkbox h-6 w-6"
              />
              <input
                type="text"
                id="mastersSchool"
                name="mastersSchool"
                className="form-input w-3/4 text-black  h-10"
                placeholder="Name of School"
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
                  id="companyName"
                  name="companyName"
                  placeholder="a"
                  className="form-input w-3/4 text-black bg-gray  h-10"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label className="text-sm font-medium w-1/4">Years:</label>
                <input
                  type="text"
                  id="yearsA"
                  name="yearsA"
                  className="form-input w-3/4 text-black  h-10"
                  placeholder="a"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium w-1/4"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="b"
                  className="form-input w-3/4  text-black  h-10 bg-gray"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label className="text-sm font-medium w-1/4">Years:</label>
                <input
                  type="text"
                  id="yearsA"
                  name="yearsA"
                  className="form-input w-3/4 text-black  h-10"
                  placeholder="b"
                />
              </div>
              <p className="text-sm w-3/4 ml-12 text-gray-600 mt-4">
                NOTE: Write "NA" across the above space if you have no working
                experience, and don't worry about it.
              </p>
            </div>
            <div className="mt-4">
              {/* <h2 className="text-2xl font-semibold mb-4">Write a Brief Note</h2> */}
              <div className="mt-4">
                <label htmlFor="note" className="text-l font-medium w-1/4">
                  Write a brief note about yourself:
                </label>
                <textarea
                  id="note"
                  name="note"
                  className="form-textarea h-40 w-80 text-black w-full"
                  placeholder="Write a brief note about where you see yourself in the next three (3) years."
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
                  id="parentName"
                  name="parentName"
                  className="form-input w-3/4 text-black  h-10"
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
                  id="parentPhone"
                  name="parentPhone"
                  className="form-input w-3/4 text-black  h-10"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                How did you hear about Us?
              </h2>
              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">Radio:</label>
                <input
                  type="checkbox"
                  id="radio"
                  name="radio"
                  className="form-checkbox h-6 w-6"
                />
              </div>
              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">
                  Sales Officers:
                </label>
                <input
                  type="checkbox"
                  id="salesOfficers"
                  name="salesOfficers"
                  className="form-checkbox h-6 w-6"
                />
              </div>
              <div className="mb-4 flex justify-between items-center">
                <label
                  htmlFor="heardByName"
                  className="text-sm font-medium w-1/4"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="heardByName"
                  name="heardByName"
                  className="form-input w-3/4 text-black  h-10"
                  placeholder="Name"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium w-1/4">
                  Social Media:
                </label>
                <input
                  type="checkbox"
                  id="socialMedia"
                  name="socialMedia"
                  className="form-checkbox h-6 w-6"
                />
              </div>
              {/* <h2 className="text-2xl font-semibold mb-4">Please Note</h2> */}
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
                  id="applicantName"
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
                  id="signatureDate"
                  name="signatureDate"
                  className="form-input w-3/4 text-black  h-10"
                />
              </div>
              <div className="mt-8">
                <label
                  htmlFor="uploadPicture"
                  className="block text-sm font-medium text-gray-700"
                >
                  Passport Photo(Less than 1MB)
                </label>
                <input
                  type="file"
                  id="uploadPicture"
                  name="uploadPicture"
                  accept="image/*"
                  className="form-input"
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-red-700 text-white-500 font-bold py-2 px-4 rounded mr-4 w-full"
                >
                  Proceed to Payment(GHS 150)
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const printForm = () => {
  window.print();
};

export default ApplicationForm;
