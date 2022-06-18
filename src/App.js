import { useState, useEffect } from "react";
import TodoApp from "./TodoApp";
import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <TodoApp />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
