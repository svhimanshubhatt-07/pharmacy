"use client";

import React, { useState } from "react";
import { contactInfo } from "@/data/contact";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-primary mb-[8px]">{contactInfo.heading}</h2>
      <p className="[color:var(--text-muted)] text-[14px] mb-[20px]">
        {contactInfo.subheading}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-[1fr_1fr] gap-[16px]">
          <div className="form-group">
            <label htmlFor="fname">First Name *</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control"
              placeholder="First Name*"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name *</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control"
              placeholder="Last Name*"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-[16px]">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number (10 Digits) *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone Number*"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="city">City / State *</label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-control"
            placeholder="City*"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="customCheckbox">
            <input id="customCheckbox" name="customCheckbox" type="checkbox" />
            {" "}I agree to receive information regarding my enquiry for NIET.
          </label>
        </div>

        <div className="mt-[12px]">
          <button
            type="button"
            className="btn btn-primary opacity-[0.65] cursor-not-allowed"
            title="Form submission is unavailable because the original PHP handler is not part of this Next.js project"
            disabled
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
