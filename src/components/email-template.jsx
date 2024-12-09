import React from "react";

const EmailTemplate = ({ name, message }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h1 style={{ color: "#333", fontSize: "24px" }}>
        New message from {name}
      </h1>
      <p style={{ color: "#666", fontSize: "16px" }}>
        Thank you for reaching out to us. Here&apos;s your message:
      </p>
      <blockquote
        style={{
          backgroundColor: "#f0f0f0",
          padding: "15px",
          borderLeft: "4px solid #333",
          margin: "20px 0",
        }}
      >
        {message}
      </blockquote>
      <p style={{ color: "#666", fontSize: "16px" }}>
        We&apos;ll get back to you as soon as possible.
      </p>
    </div>
  );
};

export default EmailTemplate;
