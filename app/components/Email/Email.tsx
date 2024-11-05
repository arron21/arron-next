"use client";

import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import "./email.css";

export default function Email() {
  let [showThankYou, setShowThankYou] = useState(false);


  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch('__forms.html', {
        method: 'POST',
        body: formData,
      })
      if(response.status === 200) {
        setShowThankYou(true);
      }

    } catch {
      console.error('Error submitting form:');
    }
    
  };


  return (
    <div className="">
      {showThankYou && (
        <div className="mt-4 text-center">
          <h1 className="text-2xl">Thank you!</h1>
          <p className="text-gray-500">
            I will get back to you as soon as possible.
          </p>
        </div>
      )}
      <form name="contact" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" id="email" placeholder="" />
        <Label htmlFor="name">Name</Label>
        <Input name="name" type="text" id="name" placeholder="" />
        <Label htmlFor="message">Your message</Label>
        <Textarea name="message" placeholder="" id="message" />
        <Button type="submit" className="mt-4">Send</Button>
      </form>
    </div>
  );
}
