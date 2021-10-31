import React from "react";
import "./OutputIpAddress.css";

function OutputIpAddress(props) {
  const outputIp = {
    output: [
      { header: "IP ADDRESS", pg: props.outPutAdddress },
      { header: "LOCATION", pg: props.outPutLocation },
      { header: "TIME ZONE", pg: props.outPutTimezone },
      { header: "ISP", pg: props.outPutIsp },
    ],
  };
  return (
    <div className="Output">
      <div className="OutputIp">
        {outputIp.output.map((ip) => {
          return (
            <div>
              <h3>{ip.header}</h3>
              <p>{ip.pg}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OutputIpAddress;
