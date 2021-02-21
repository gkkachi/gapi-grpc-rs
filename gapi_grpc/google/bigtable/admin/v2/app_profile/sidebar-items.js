initSidebarItems({"enum":[["RoutingPolicy","The routing policy for all read/write requests that use this app profile. A value must be explicitly set."]],"struct":[["MultiClusterRoutingUseAny","Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability."],["SingleClusterRouting","Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability."]]});