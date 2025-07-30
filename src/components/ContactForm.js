// components/ContactForm.js
"use client";
import { useState } from "react";
import { useAppContext } from "@/context";

export default function ContactForm() {
  const { t } = useAppContext();

  // ... (formData, agreed, status, and handler functions remain the same)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sqm: "",
    projectDetails: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!agreed) return;
    setStatus("sending");
    // ... rest of the submit logic
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          sqm: "",
          projectDetails: "",
        });
        setAgreed(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  // 1. Define the CSS styles as a string inside the component.
  const checkboxStyles = `
    .custom-form-check {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }
    .custom-form-check .form-check-input {
      appearance: none;
      -webkit-appearance: none;
      flex-shrink: 0;
      margin-top: 0.2em;
      height: 1.25em;
      width: 1.25em;
      border: 2px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }
    .custom-form-check .form-check-input:checked {
      background-color: #2563eb;
      border-color: #2563eb;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
      background-size: 65%;
      background-repeat: no-repeat;
      background-position: center;
    }
  `;

  return (
    <div className="contact-form-component-wrap">
      {/* 2. Inject the styles using a <style> tag. */}
      <style>{checkboxStyles}</style>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* ... (heading, description, and other form fields are unchanged) ... */}
          <h4 className="mb-4">{t("contact_form.heading")}</h4>
          <p className="mb-4">{t("contact_form.description")}</p>
          <div className="col-lg-12 mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder={t("contact_form.placeholder_name")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder={t("contact_form.placeholder_email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder={t("contact_form.placeholder_phone")}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-12 mb-3">
            <input
              type="number"
              name="sqm"
              className="form-control"
              placeholder={t("contact_form.placeholder_sqm")}
              value={formData.sqm}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-12 mb-3">
            <textarea
              name="projectDetails"
              className="form-control"
              rows="5"
              placeholder={t("contact_form.placeholder_project_details")}
              value={formData.projectDetails}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* 3. Apply the custom class to the checkbox container. */}
          <div className="col-lg-12 mb-3">
            <div className="form-check custom-form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="consent-checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="consent-checkbox">
                {t("contact_form.consent_label")}
              </label>
            </div>
          </div>

          {/* Submit Button & Status Messages */}
          <div className="col-lg-12">
            <button
              type="submit"
              className="theme-btn w-100"
              disabled={!agreed || status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : t("contact_form.submit_button_value")}
            </button>
            {status === "success" && (
              <p className="text-success mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-danger mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
