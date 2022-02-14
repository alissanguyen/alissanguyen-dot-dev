import * as React from "react";
import { AlertType } from "~/types";

interface Props {
  message: string;
  type: AlertType;
}

const Alert: React.FC<Props> = (props) => {
  return (
    <div>
      {props.type === AlertType.SUCCESS ? (
        <div className="bg-green-100 p-5 w-full rounded">
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="flex-none fill-current text-green-500 h-4 w-4"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
              </svg>
              <div className="flex-1 leading-tight text-sm text-green-700 font-medium">
                {props.message}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="flex-none fill-current text-green-600 h-3 w-3"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </div>
        </div>
      ) : props.type === AlertType.ERROR ? (
        <div className="bg-red-100 p-5 w-full">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="flex-none fill-current text-red-500 h-4 w-4"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
            <div className="leading-tight flex flex-col space-y-2">
              <div className="text-sm font-medium text-red-700">
                Something went wrong
              </div>
              <div className="flex-1 leading-snug text-sm text-red-600">
                {props.message}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-100 p-5 w-full border-l-4 border-blue-500">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="flex-none fill-current text-blue-500 h-4 w-4"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
            </svg>
            <div className="flex-1 leading-tight text-sm text-blue-700">
              {props.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
