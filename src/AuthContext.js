import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

/**
 * Allows for context to be imported in a page.
 * 
 * @returns {Object} - The context object.
 * */
export function useAuth() {
    return useContext(AuthContext);
}

/**
 * Main functionality for AuthProvider.
 * @param {Object} {children} - Children helpers/state of component.
 * @returns {Object} - Created context with children helpers/states.
 * */
export function AuthProvider({ children }) {
    const [teacher, setTeacher] = useState();


    /**
     * Populates teacher information in state.
     * @param {Object} teacherInfo - Teacher information.
     * */
    function populateTeacher(teacherInfo) {
        setTeacher(teacherInfo);
    }

    // Clears teacher information in state.
    function clearTeacher() {
        setTeacher(null);
    }

    // State and helpers to export
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
