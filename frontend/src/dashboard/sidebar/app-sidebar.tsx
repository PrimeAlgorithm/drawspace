import { Plus, Search, Pencil } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { AppSidebarFooter } from "./app-sidebar-footer";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 flex items-center gap-2">
          <Pencil className="h-5 w-5" />
          <h2 className="text-lg font-semibold">DrawSpace</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* New Button */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Plus />
                  <span>New Board</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Search */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Search />
                  <span>Search</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Your Boards Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Your Boards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* You'll map over your boards here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>Board 1</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>Board 2</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
};
