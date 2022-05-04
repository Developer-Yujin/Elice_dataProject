import React, { useState, useEffect } from "react";
import StatusFilterList from "./StatusFilterList";
import { TabDiv, TabContainer, TabButton, TabActiveBar, ActiveLine } from "./StatusFilterStyles";

const StatusFilter = ({ currentStatusFunction, statusReset, statusResetDoneFunction }) => {
  const [currentState, setCurrentStste] = useState(0);
  const [statusUrl, setStatusUrl] = useState("all");
  const [statusResetDone, setStatusResetDone] = useState(false);

  const handleClickStatusTab = (e) => {
    setCurrentStste(e.filterId);
    setStatusUrl(e.value);
  };

  useEffect(() => {
    currentStatusFunction(statusUrl);
    if (statusReset === true) {
      setCurrentStste(0);
      setStatusUrl("all");
      setStatusResetDone(true);
      statusResetDoneFunction(statusResetDone);
    }
  }, [currentStatusFunction, statusReset, statusResetDone, statusResetDoneFunction, statusUrl]);

  return (
    <TabDiv>
      <TabContainer>
        {StatusFilterList.map((e) => {
          return (
            <TabButton
              key={e.filterId}
              value={e.value}
              isClicked={currentState === e.filterId ? true : false}
              onClick={() => {
                handleClickStatusTab(e);
              }}
            >
              {e.name}
            </TabButton>
          );
        })}
      </TabContainer>
      <TabActiveBar>
        <ActiveLine activeLine={currentState} />
      </TabActiveBar>
    </TabDiv>
  );
};

export default StatusFilter;
