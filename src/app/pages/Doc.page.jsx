'use client'
import React, { useState } from "react";
import TabBar from "../components/assets/Tabbar";
import SecondaryNavBar from "../components/assets/Toolbar";
import {
  Copy,
  Settings,
  FileText,
  Download,
  Edit,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import Sidebar from "../components/assets/Left.sidebar";
import RightSidebar from "../components/assets/Right.sidebar";

export default function DocPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [content, setContent] = useState("Preview Content");
   const [open, setOpen] = useState(true);
  
  const Sidebaritems = [
    { id: "intro", text: "Introduction", level: 2 },
    { id: "features", text: "Features", level: 2 },
    { id: "feature-1", text: "Feature One", level: 3 },
    { id: "feature-2", text: "Feature Two", level: 3 },
    { id: "installation", text: "Installation", level: 2 },
    { id: "usage", text: "Usage", level: 2 },
  ];
  const items = [
    { id: "1", label: "Item 1", children: [
      { id: "1.1", label: "Child 1" }
    ]}
  ];


  const tabs = [
    { label: "Preview", value: "preview" },
    { label: "Code", value: "code" },
    { label: "Blame", value: "blame" },
  ];

  const actions = [
    {
      icon: Copy,
      label: "Copy",
    },
    {
      icon: FileText,
      label: "Raw",
    },
    {
      icon: Download,
      label: "Download",
    },
    {
      icon: Edit,
      label: "Edit",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab.value);
    setContent(`${tab.label} Content`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">


      <div className="flex min-h-screen">
        <Sidebar
      isOpen={open} 
      onClose={() => setOpen(false)}
      header="React" 
      items={items} 
      />
      <SecondaryNavBar
          tabs={tabs}
          actions={actions}
          defaultTab="preview"
          onTabChange={handleTabChange}
        />
<RightSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        header="Table of Contents"
        items={Sidebaritems}
      />
      </div>

    </div>
  );
}