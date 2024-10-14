import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface UserContextType {
  saveUserInfo: (userInfo: any) => void;
  userInfo: any;
}

// Define the type for the props for the provider
interface UserProviderProps {
  children: ReactNode;
}

// Create the UserContext with an undefined default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any>(null);

  // Function to save user info in the state
  const saveUserInfo = (userInfo: any) => {
    setUserInfo(userInfo);
    // Optionally store in local storage or send to backend
  };

  return (
    <UserContext.Provider value={{ saveUserInfo, userInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the UserContext in components
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
