import React from "react";
import dp from "../../asset/hesong.png";

function DisplayPicture() {
  return (
    <div className="img-div">
      <img src={dp} alt="hesong" style={{ width: "150px" }} />
      <br />
      <span>
        <strong>He Song, Koo</strong>
      </span>
    </div>
  );
}

export default DisplayPicture;
