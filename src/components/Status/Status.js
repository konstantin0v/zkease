import {
  TodoSvg,
  CompletedSvg,
  LockedSvg,
  InProgressSvg,
  Badge,
} from '@/components';

export const Status = ({ type = 'todo', color }) => {
  const status = {
    todo: (
      <Badge showIconLeft IconLeft={TodoSvg} color={color}>
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
        Lvl required
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
