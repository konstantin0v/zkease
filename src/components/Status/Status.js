import {
  TodoSvg,
  CompletedSvg,
  LockedSvg,
  InProgressSvg,
  Badge,
} from "@/components";

export const Status = ({ type }) => {
  const status = {
    todo: (
      <Badge showIconLeft IconLeft={TodoSvg}>
        To do
      </Badge>
    ),
    progress: (
      <Badge showIconLeft IconLeft={InProgressSvg}>
        In progress
      </Badge>
    ),
    locked: (
      <Badge showIconLeft IconLeft={LockedSvg}>
        Lvl 2 required
      </Badge>
    ),
    completed: (
      <Badge showIconLeft IconLeft={CompletedSvg}>
        Completed
      </Badge>
    ),
  };

  return status[type];
};

export default Status;
