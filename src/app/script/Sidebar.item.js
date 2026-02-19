import cypressSidebarItems from "./sidebar-items/sidebar.item.cypress";
import restAssuredSidebarItems from "./sidebar-items/sidebar.item.rest-assured";
import reactjsSidebarItems from "./sidebar-items/sidebar.item.react";

const sidebarItems = {
  cypress: cypressSidebarItems,
  "rest-assured": restAssuredSidebarItems,
  reactjs: reactjsSidebarItems,
};

export default sidebarItems;