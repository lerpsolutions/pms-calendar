import { SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onContextMenu?: (e: React.MouseEvent, data: SchedulerProjectData) => void;
  toggleTheme?: () => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
