import React from "react";
import Loader from "./Loader";

interface BasePageWithLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageWithLoaderProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30">
        <Loader size={48} />
      </div>
    );
  }
  return <>{children}</>;
};

export default BasePage;

