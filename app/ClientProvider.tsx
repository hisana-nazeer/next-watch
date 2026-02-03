"use client";

import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import AuthProvider from "./AuthProvider";
import Body from "./components/Body";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        
        {children}
      </AuthProvider>
    </Provider>
  );
}
