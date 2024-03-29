'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index2.js');
var timeline = require('./src/timeline2.js');
var timelineItem$1 = require('./src/timeline-item3.js');
var timelineItem = require('./src/timeline-item4.js');
var install = require('../../utils/vue/install2.js');

const ElTimeline = install.withInstall(timeline["default"], {
  TimelineItem: timelineItem$1["default"]
});
const ElTimelineItem = install.withNoopInstall(timelineItem$1["default"]);

exports.timelineItemProps = timelineItem.timelineItemProps;
exports.ElTimeline = ElTimeline;
exports.ElTimelineItem = ElTimelineItem;
exports["default"] = ElTimeline;
//# sourceMappingURL=index2.js.map
