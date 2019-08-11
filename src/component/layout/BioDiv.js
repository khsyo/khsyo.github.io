import React from "react";
import DisplayPicture from "./DisplayPicture";
import Introduction from "./Introduction";

function BioDiv() {
  return (
    <div className="bio-div">
      <DisplayPicture /> <Introduction />
    </div>
  );
}

export default BioDiv;
