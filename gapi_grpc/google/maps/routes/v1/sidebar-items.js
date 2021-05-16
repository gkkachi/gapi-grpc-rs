initSidebarItems({"enum":[["FallbackReason","Reasons for using fallback response."],["FallbackRoutingMode","Actual routing mode used for returned fallback response."],["Maneuver","A set of values that specify the navigation action to take for the current step (e.g., turn left, merge, straight, etc.)."],["PolylineEncoding","Specifies the preferred type of polyline to be returned."],["PolylineQuality","A set of values that specify the quality of the polyline."],["RouteMatrixElementCondition","The condition of the route being returned."],["RouteTravelMode","A set of values used to specify the mode of travel."],["RoutingPreference","A set of values that specify factors to take into consideration when calculating the route."],["TollPass","List of toll passes around the world that we support."],["Units","A set of values that specify the unit of measure used in the display."],["VehicleEmissionType","A set of values describing the vehicle’s emission type. Applies only to the DRIVE travel mode."]],"mod":[["compute_custom_routes_response",""],["polyline",""],["route_objective",""],["routes_preferred_client","Generated client implementations."],["speed_reading_interval",""],["waypoint",""]],"struct":[["ComputeCustomRoutesRequest","ComputeCustomRoutes request message."],["ComputeCustomRoutesResponse","ComputeCustomRoutes response message."],["ComputeRouteMatrixRequest","ComputeRouteMatrix request message"],["ComputeRoutesRequest","ComputeRoutes request message."],["ComputeRoutesResponse","ComputeRoutes the response message."],["CustomRoute","Encapsulates a custom route computed based on the route objective specified by the customer. CustomRoute contains a route and a route token, which can be passed to NavSDK to reconstruct the custom route for turn by turn navigation."],["FallbackInfo","Information related to how and why a fallback result was used. If this field is set, then it means the server used a different routing mode from your preferred mode as fallback."],["LicensePlateLastCharacterRestriction","Encapsulates the license plate last character restriction."],["Location","Encapsulates a location (a geographic point, and an optional heading)."],["NavigationInstruction",""],["Polyline","Encapsulates an encoded polyline."],["Route","Encapsulates a route, which consists of a series of connected road segments that join beginning, ending, and intermediate waypoints."],["RouteLeg","Encapsulates a segment between non-`via` waypoints."],["RouteLegStep","Encapsulates a segment of a `RouteLeg`. A step corresponds to a single navigation instruction. Route legs are made up of steps."],["RouteLegStepTravelAdvisory","Encapsulates the additional information that the user should be informed about, such as possible traffic zone restriction on a leg step."],["RouteLegTravelAdvisory","Encapsulates the additional information that the user should be informed about, such as possible traffic zone restriction etc. on a route leg."],["RouteMatrixDestination","A single destination for ComputeRouteMatrixRequest"],["RouteMatrixElement","Encapsulates route information computed for an origin/destination pair in the ComputeRouteMatrix API. This proto can be streamed to the client."],["RouteMatrixOrigin","A single origin for ComputeRouteMatrixRequest"],["RouteModifiers","Encapsulates a set of optional conditions to satisfy when calculating the routes."],["RouteObjective","Encapsulates an objective to optimize for by ComputeCustomRoutes."],["RouteTravelAdvisory","Encapsulates the additional information that the user should be informed about, such as possible traffic zone restriction etc."],["SpeedReadingInterval","Traffic density indicator on a contiguous segment of a polyline or path. Given a path with points P_0, P_1, … , P_N (zero-based index), the SpeedReadingInterval defines an interval and describes its traffic using the following categories."],["TollInfo","Encapsulates toll information on a `Route` or on a `RouteLeg`."],["TrafficRestriction","Encapsulates the traffic restriction applied to the route. As of October 2019, only Jakarta, Indonesia takes into consideration."],["VehicleInfo","Encapsulates the vehicle information, such as the license plate last character."],["Waypoint","Encapsulates a waypoint. Waypoints mark both the beginning and end of a route, and include intermediate stops along the route."]]});