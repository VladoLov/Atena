"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  /* const [acceptTerms, setAcceptTerms] = useState(false); */
  const { t } = useTranslation("common");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", lastName: "", email: "", message: "" });
        // setAcceptTerms(false);
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">{t("contact_form.header")}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        {/*        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the{" "}
            <Link
              href="/docs/Terms_and_Conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-crimson-900 underline transition"
            >
              Terms & Conditions
            </Link>
          </label>
        </div> */}
        {/*  <Button type="submit" className="w-full" disabled={!acceptTerms}>
          Send
        </Button> */}
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
