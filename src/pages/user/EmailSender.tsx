import React, { useState } from "react";

const EmailForm = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          recipient,
          subject,
          message,
        }),
      });
      console.log("response", response);

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <label>
        Recipient:
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default EmailForm;
