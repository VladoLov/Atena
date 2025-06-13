"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const t = useTranslations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, // Store in .env
          name: `${formData.name} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          // Optional: Add redirect to thank you page
          /*   redirect: "https://yourdomain.com/thank-you", */
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(t("contact_form.success_message"));
        setFormData({ name: "", lastName: "", email: "", message: "" });
      } else {
        setStatus(t("contact_form.error_message"));
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(t("contact_form.error_message"));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t("contact_form.header")}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden Web3Forms honeypot field (recommended) */}
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
        />
        <input
          type="hidden"
          name="subject"
          value="New Contact Form Submission"
        />
        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="grow">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact_form.fName")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="grow">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              {t("contact_form.lName")}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {t("contact_form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            {t("contact_form.description")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        <Button type="submit" className="w-full">
          {t("contact_form.send")}
        </Button>

        {status && (
          <p className="mt-2 text-sm text-center font-medium text-gray-900">
            {status}
          </p>
        )}
      </form>

      <p className="pt-4 px-4 text-platinum-900">
        {t("contact_form.footer")}
        <Link
          href="mailto:info@atenagenomics.com"
          className="inline-flex items-center  hover:text-black hover:underline transition-colors duration-200 ease-in-out font-medium ml-1"
        >
          info@atenagenomics.com
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
        <span> </span>
        {t("contact_form.footerPhone")}
        <Link
          href="tel:+38763201361"
          className="inline-flex items-center text-platinum-900 hover:text-black hover:underline transition-colors duration-200 ease-in-out font-medium ml-1"
        >
          +38763201361
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </Link>
      </p>
    </div>
  );
}
