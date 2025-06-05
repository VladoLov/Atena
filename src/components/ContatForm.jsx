"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const { t } = useTranslation("common");

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

      <p className="pt-4 px-4">
        {t("contact_form.footer")}
        <Link
          href="tel:+38763201361"
          className="bg-green-500 text-black px-1 py-2 rounded hover:bg-green-600"
        >
          +38763201361
        </Link>
      </p>
    </div>
  );
}
