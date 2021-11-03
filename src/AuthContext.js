import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [teacher, setTeacher] = useState();
//   const [isLoading, setIsLoading] = useState(true);

  function populateTeacher(teacherInfo) {
      setTeacher(teacherInfo);
  }

  function clearTeacher() {
    setTeacher(null);
  }


  const value = {
    teacher,
    populateTeacher,
    clearTeacher,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
