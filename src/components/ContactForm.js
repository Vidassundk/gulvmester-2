// components/ContactForm.js
"use client";
import { useAppContext } from "@/context";

// This component uses client-side hooks

// import { useAppContext } from "@/context/AppContext"; // Adjust path as necessary

export default function ContactForm() {
  const { t } = useAppContext(); // Get the translation function

  // A basic handler to prevent the form from reloading the page on submit.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(t("contact_form.submit_alert_placeholder")); // Translated alert
    // Add your form submission logic here
  };

  return (
    <div className="contact-form-component-wrap">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h4 className="mb-4">{t("contact_form.heading")}</h4>
          <p className="mb-4 ">{t("contact_form.description")}</p>

          {/* Name Field */}
          <div className="col-lg-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("contact_form.placeholder_name")}
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-lg-6 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder={t("contact_form.placeholder_email")}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="col-lg-6 mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder={t("contact_form.placeholder_phone")}
              required
            />
          </div>

          {/* Square Meters Field */}
          <div className="col-lg-12 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder={t("contact_form.placeholder_sqm")}
              required
            />
          </div>

          {/* About the project Textarea */}
          <div className="col-lg-12 ">
            <textarea
              name="project-details"
              className="form-control"
              rows="5"
              placeholder={t("contact_form.placeholder_project_details")}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="submit"
              className="theme-btn w-100 "
              value={t("contact_form.submit_button_value")}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
