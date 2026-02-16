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

export default function DocPage() {
  const [activeTab, setActiveTab] = useState("preview");
  const [content, setContent] = useState("Preview Content");

  const tabs = [
    { label: "Preview", value: "preview" },
    { label: "Code", value: "code" },
    { label: "Blame", value: "blame" },
  ];

  const actions = [
    {
      icon: Copy,
      label: "Copy",
      onClick: () => alert("Copied!"),
    },
    {
      icon: Settings,
      label: "Settings",
      onClick: () => alert("Settings opened"),
    },
    {
      icon: FileText,
      label: "Raw",
      onClick: () => alert("Raw file view"),
    },
    {
      icon: Download,
      label: "Download",
      onClick: () => alert("Downloading..."),
    },
    {
      icon: Edit,
      label: "Edit",
      onClick: () => alert("Edit mode"),
    },
    {
      icon: ChevronDown,
      label: "More options",
      onClick: () => alert("More options"),
    },
    {
      icon: MoreHorizontal,
      label: "Menu",
      onClick: () => alert("Menu opened"),
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab.value);
    setContent(`${tab.label} Content`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <TabBar
        tabs={[
          "Home",
          "C",
          "C++",
          "C#",
          "Java",
          "JavaScript",
          "TypeScript",
          "Python",
          "GO",
          "PHP",
          "NodeJS",
          "ExpressJS",
          "RestAPI",
          "GraphQL",
          "Sprint Boot",
          "Security",
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "Redis",
          "ReactJS",
          "NextJS",
          "VueJS",
          "AngularJS",
          "HTML",
          "CSS",
          "Flutter",
          "Kotlin",
        ]}
      />

      <div className="mt-0">
        <SecondaryNavBar
          tabs={tabs}
          fileInfo="64 lines (43 loc) · 1.39 KB"
          actions={actions}
          defaultTab="preview"
          onTabChange={handleTabChange}
        />
      </div>

      {/* Content Area */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-8 border border-gray-200 rounded-lg dark:border-gray-800">
          <h2 className="mb-4 text-2xl font-bold">
            Active Tab: {activeTab}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
}