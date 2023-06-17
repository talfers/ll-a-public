import { useState, useMemo } from "react";

export const useTabs = (tabs) => {
    const [activeTabId, setActiveTab] = useState(tabs[0].id);
    
    const activeTab = useMemo(() => (
        tabs.find((tab) => (
            tab.id === activeTabId
        ))
    ), [activeTabId, tabs]);
  
  return [activeTabId, activeTab, setActiveTab ];
};