import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    // Check for auth header or token
    // In a real app, this would check headers from the server
    // For now, we'll simulate header auth by checking a mock header
    const checkAuth = () => {
      // Simulate checking auth header (e.g., X-Auth-Token or Authorization)
      const authHeader = sessionStorage.getItem('auth-header') || 'Bearer mock-token-12345';
      
      if (authHeader) {
        setIsAuthenticated(true);
        setUser({ username: '@yourbusiness' });
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
