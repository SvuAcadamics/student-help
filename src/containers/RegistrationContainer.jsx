import React, { useState } from "react";
import Register from '../pages/Registration/Registration';
import { supabase } from "../config/apiConfig";

const RegistrationContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [endingYear, setEndingYear] = useState("");
  const [formError, setFormError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePinChange = (e) => setPin(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEndChange = (e) => setEndingYear(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !pin || !email || !endingYear || !password) {
      setFormError("Please fill in all fields.");
      return;
    }

    // Check if email or pin already exists
    const { data: existingUsers, error: fetchError } = await supabase
      .from('register')
      .select('email, pin')
      .eq('email', email)
      .eq('pin', pin);

    if (fetchError) {
      console.error(fetchError);
      // Handle the error, maybe show a message to the user
      return;
    }

    if (existingUsers && existingUsers.length > 0) {
      setFormError("Email or PIN already exists. Please use a different one.");
      return;
    }

    const { data, error } = await supabase
      .from('register')
      .insert([
        { name, pin, email, end: endingYear, password }
      ]);

    if (error) {
      console.error(error);
      // Handle the error, maybe show a message to the user
    } else if (data) {
      console.log(data);
      setFormError(null);
      // Clear input fields after successful submission
      setEmail("");
      setPassword("");
      setEndingYear("");
      setName("");
      setPin("");
    }
  };

  return (
    <div className="RegistrationContainer-main">
      <Register
        name={name}
        email={email}
        endingYear={endingYear}
        password={password}
        pin={pin}
        onPinChange={handlePinChange}
        onNameChange={handleNameChange}
        onEndingYearChange={handleEndChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        formError={formError}
      />
    </div>
  );
};

export default RegistrationContainer;
