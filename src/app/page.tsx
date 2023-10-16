"use client";
import React, { useState } from "react";
import RightBox from "./RightBox";
import LeftBox from "./LeftBox";

const MyPage: React.FC = () => {
  const [guid, setGuid] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidGuid, setIsValidGuid] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsValidGuid(null);

    setTimeout(() => {
      setIsLoading(false);
      const isValid =
        /^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/.test(
          guid
        );

      setIsValidGuid(isValid);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap">
      <LeftBox
        guid={guid}
        isLoading={isLoading}
        isValidGuid={isValidGuid}
        onGuidChange={setGuid}
        onSubmit={handleSubmit}
      />
      <RightBox imageUrl="/einstein.jpg" />
    </div>
  );
};

export default MyPage;
