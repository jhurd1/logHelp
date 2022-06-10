import React from "react";
import { userDataTest } from "./data";
import "./App.css";

export const UserDataTest = () => {
    return (
      <>
        <div className="test-container">
          {userDataTest.map((data, key) => {
            return (
                <div key={key}>
                {data.filepath +
                " , " + 
                data.searchStrings}
            </div>
            );
          })}
        </div>
      </>
    );
  };
  

export default UserDataTest