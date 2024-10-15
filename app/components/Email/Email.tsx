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

  return (
    <div className="">
      <form netlify data-netlify="true">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="smithers@gmail.com" />
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Mr. John Smith" />
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
        <Button className="mt-4">Send</Button>
      </form>
    </div>
  );
}
