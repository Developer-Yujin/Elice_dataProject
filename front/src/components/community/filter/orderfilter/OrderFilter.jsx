import React, { useState, useEffect } from "react";
import OrderFilterList from "./OrderFilterList";
import { TabDiv, TabContainer, TabButton, TabActiveBar, ActiveLine } from "./OrderFilterStyles";

const OrderFilter = ({ currentOrderFunction, orderReset, orderResetDoneFunction }) => {
  const [currentOrder, setCurrentOrder] = useState(0);
  const [orderUrl, setOrderUrl] = useState("recently");
  const [orderResetDone, setOrderResetDone] = useState(false);

  const handleClickOrderTab = (e) => {
    setCurrentOrder(e.filterId);
    setOrderUrl(e.value);
  };

  useEffect(() => {
    currentOrderFunction(orderUrl);
    if (orderReset === true) {
      setCurrentOrder(0);
      setOrderUrl("recently");
      setOrderResetDone(true);
      orderResetDoneFunction(orderResetDone);
    }
  }, [currentOrderFunction, orderReset, orderResetDone, orderResetDoneFunction, orderUrl]);

  return (
    <TabDiv>
      <TabContainer>
        {OrderFilterList.map((e) => {
          return (
            <TabButton
              key={`order${e.filterId}`}
              value={e.value}
              isClicked={currentOrder === e.filterId}
              onClick={() => {
                handleClickOrderTab(e);
              }}
            >
              {e.name}
            </TabButton>
          );
        })}
      </TabContainer>
      <TabActiveBar>
        <ActiveLine activeLine={currentOrder} />
      </TabActiveBar>
    </TabDiv>
  );
};

export default OrderFilter;
