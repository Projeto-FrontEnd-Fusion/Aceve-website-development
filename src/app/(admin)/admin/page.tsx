"use client";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencher os campos, por favor!");
      return;
    }

    //console.log("Login realizado:", { email, password });
  };

  return (
    <div className="bg-primary-100 flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-md">
        <img
          src="logo-header.png"
          alt="Logo da ONG"
          className="w-25 h-25 mb-6 mx-auto"
        />

        <h2 className="text-primary-600 font-bold text-center text-[30px] leading-[30px] tracking-[0%] mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="font-bold text-primary-600">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="bg-primary-600/20 p-2 rounded-lg shadow-md w-full text-grey-700 placeholder:text-grey-700 outline-none focus:bg-primary-600/20"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold text-primary-600">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="bg-primary-600/20 p-2 rounded-lg shadow-md w-full placeholder:text-grey-700 outline-none"
            />
          </div>
          <GlobalButton
            variant="primary"
            type="submit"
            className="w-[286px] h-[50px] rounded-[5px] py-2 px-4 gap-2 mx-auto mt-4"
          >
            Entrar
          </GlobalButton>
        </form>
      </div>
    </div>
  );
}
