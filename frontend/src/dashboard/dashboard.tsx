import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/app-sidebar";

export const Dashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
};
