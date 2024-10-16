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
    const formData = new FormData(event.target);
    await fetch('/__forms.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(formData).toString()
    });
    // Success & error handling should come here
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
