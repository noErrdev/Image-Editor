import React from "react";
import { useObserver } from "mobx-react";
import Tooltip from "../Tooltip";
import { ReactComponent as Refresh } from "../../assets/refresh.svg";
import useStore from "../../hooks/useStore";

export const RefreshButton = () => {
  const {appStore, imageStore} = useStore();
  return useObserver(() => (
    <div>
      <Tooltip content="Refresh" placement="bottom">
        <Refresh
          className={`${!imageStore.url ? "disabled" : ""}`}
          onClick={() => {
            if (!imageStore.url) {
              return;
            }
            imageStore.reset();
            appStore.closeToolbar();
          }}
        />
      </Tooltip>
    </div>
  ));
};

export default RefreshButton;