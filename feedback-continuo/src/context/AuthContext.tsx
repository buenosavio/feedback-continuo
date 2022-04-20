import { createContext, FC, ReactNode } from "react";

export const AuthContext = createContext({});

const AuthProvider: FC<ReactNode> = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;