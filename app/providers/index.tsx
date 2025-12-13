"use client";

import { InternetCheck } from "@/utils";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ReduxProvider store={store}>
        <ReactQueryProvider>
          {children}

          <ToastProvider placement="top-right" toastOffset={10} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <InternetCheck />
        </ReactQueryProvider>
      </ReduxProvider>
    </HeroUIProvider>
  );
}
