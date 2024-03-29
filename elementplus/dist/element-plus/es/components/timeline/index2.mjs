import '../../utils/index2.mjs';
import Timeline from './src/timeline2.mjs';
import TimelineItem from './src/timeline-item3.mjs';
export { timelineItemProps } from './src/timeline-item4.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install2.mjs';

const ElTimeline = withInstall(Timeline, {
  TimelineItem
});
const ElTimelineItem = withNoopInstall(TimelineItem);

export { ElTimeline, ElTimelineItem, ElTimeline as default };
//# sourceMappingURL=index2.mjs.map
