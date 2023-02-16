import React from "react";
import { Tabs } from "flowbite-react";
import Your_Account from "../components/account/Your_Account";
import Notificatons from "../components/account/Notificatons";
import Billing from "../components/account/Billing";

const Tab = () => {
  return (
    <>
      <div className="mt-10 flex items-center justify-center">
        <Tabs.Group
          className="flex items-center justify-center space-x-4"
          aria-label="Tabs with icons"
          style="underline"
        >
          <Tabs.Item active={true} title="Profile">
            <Your_Account />
          </Tabs.Item>
          <Tabs.Item title="Notificatons">
            <Notificatons />
          </Tabs.Item>
          <Tabs.Item title="Billing">
            <Billing />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  );
};

export default Tab;
