import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";
import { PaymentCkeckoutForm } from "./PaymentCkeckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const shippingInfo = {
    name,
    email,
    number,
    address,
  };
  return (
    <div className="container mx-auto my-5 flex justify-center gap-5 mt-10 sm:px-0">
      <Form>
        <h2 className="text-2xl pb-4">Shpping Details</h2>
        <FormInput
          label="Your Name"
          type="text"
          name="name"
          data-testid="txt-name"
          placeholder="Enter your name here"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Your Email"
          type="email"
          name="email"
          data-testid="txt-email"
          placeholder="Enter your email here"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Your Phone Number"
          type="number"
          name="number"
          data-testid="txt-phone"
          placeholder="Enter your phone number here"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <FormInput
          label="Your Address"
          type="text"
          name="adress"
          data-testid="txt-address"
          placeholder="Enter your adress here"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form>
      <Elements stripe={stripePromise}>
        <PaymentCkeckoutForm shippingInfo={shippingInfo} />
      </Elements>
    </div>
  );
};
