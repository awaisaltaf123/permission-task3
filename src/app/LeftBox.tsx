import React from "react";
import Image from "next/image";

export const Spinner: React.FC = () => {
  return (
    <div
      data-testid="spinner"
      className="spinner w-6 h-6 rounded-full animate-spin
    border-4 border-solid border-white-500 border-t-transparent pr-2"
    ></div>
  );
};

interface LeftBoxProps {
  guid: string;
  isLoading: boolean;
  isValidGuid: boolean | null;
  onGuidChange: (guid: string) => void;
  onSubmit: any;
}

const LeftBox: React.FC<LeftBoxProps> = ({
  guid,
  isLoading,
  isValidGuid,
  onGuidChange,
  onSubmit,
}) => {
  return (
    <div className="form-box flex-1 ml-4" data-testid="left-box">
      <form
        onSubmit={onSubmit}
        className="box form p-4 bg-white border border-black rounded p-4 my-4 flex flex-col"
      >
        <div className="flex justify-between">
          <label className="label">Enter a valid GUID here.</label>
          {isValidGuid === false && (
            <span className="error-message text-red-500 bg-red-100 px-4 py-2 rounded-full">
              Invalid GUID
            </span>
          )}
        </div>
        <input
          type="text"
          value={guid}
          onChange={(e) => onGuidChange(e.target.value)}
          disabled={isLoading}
          className="input border border-black rounded-full p-2 my-4"
          placeholder="Enter GUID"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="button bg-yellow-400 rounded-full flex items-center justify-center w-44 h-10"
        >
          {isValidGuid && (
            <Image src="/tick.png" alt="Valid" width={24} height={24} />
          )}
          {isLoading && <Spinner />}
          {"Submit"}
        </button>
      </form>
      <div className="text-box border border-black rounded p-4 my-4 bg-white w-1/4 break-words">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
      <style jsx>{`
        @media (max-width: 800px) {
          .text-box {
            width: auto;
          }
          .form-box {
            margin-right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default LeftBox;
