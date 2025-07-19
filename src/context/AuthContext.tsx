import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// 1️⃣ Define the User type
interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  isVerified: boolean;
  profileImage?: string;
}

// 2️⃣ Define the context shape
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, mobile: string) => Promise<void>;
  logout: () => void;
  verifyIdentity: (licenseImage: File) => Promise<void>;
}

// 3️⃣ Create context with default structure
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  verifyIdentity: async () => {},
});

// 4️⃣ Export hook to use the context
export const useAuth = () => useContext(AuthContext);

// 5️⃣ Provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load user from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error parsing stored user:', error);
      localStorage.removeItem('user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 6️⃣ Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate API
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        mobile: '9876543210',
        isVerified: true,
        profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 7️⃣ Register function
  const register = async (name: string, email: string, password: string, mobile: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate API
      const mockUser: User = {
        id: '1',
        name,
        email,
        mobile,
        isVerified: false,
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 8️⃣ Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // 9️⃣ Verify identity
  const verifyIdentity = async (licenseImage: File) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // simulate API
      if (user) {
        const updatedUser = { ...user, isVerified: true };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Identity verification error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 🔟 Provide values
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        verifyIdentity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
