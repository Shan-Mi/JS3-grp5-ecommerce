import React from "react";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <header></header>
      {children}
    </div>
  );
}

// lägg in header med namn på webbsidan och en cart-knapp
