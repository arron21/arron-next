"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import "./email.css";

export default function Email() {
  const [showEmail, setShowEmail] = useState(false);

  const revealEmailHandler = () => {
    setShowEmail(!showEmail);
  };

  const handleFormSubmit = async (event: any) => {
    console.log("🚀 ~ handleFormSubmit ~ event:", event)
    event.preventDefault();

    const form = event.target;
    console.log("🚀 ~ handleFormSubmit ~ form:", form)
    const data = new FormData(form); 
    console.log("🚀 ~ handleFormSubmit ~ data:", data)

    // Now you can send `formData` or `plainFormData` to your API
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        body: data, // Or body: JSON.stringify(plainFormData)
      });

      // Handle response from API
      console.log('Form submitted:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="">
      <form name="contact" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" id="email" placeholder="smithers@gmail.com" />
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" id="name" placeholder="Mr. John Smith" />
        <Label htmlFor="message">Your message</Label>
        <Textarea name="message" placeholder="Type your message here." id="message" />
        <Button type="submit" className="mt-4">Send</Button>
      </form>
    </div>
  );
}
