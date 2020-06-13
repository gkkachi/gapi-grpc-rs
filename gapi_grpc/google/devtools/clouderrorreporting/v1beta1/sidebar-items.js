initSidebarItems({"enum":[["ErrorGroupOrder","A sorting order of error groups."],["TimedCountAlignment","Specifies how the time periods of error group counts are aligned."]],"mod":[["error_group_service_client","Generated client implementations."],["error_stats_service_client","Generated client implementations."],["query_time_range",""],["report_errors_service_client","Generated client implementations."]],"struct":[["DeleteEventsRequest","Deletes all events in the project."],["DeleteEventsResponse","Response message for deleting error events."],["ErrorContext","A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs."],["ErrorEvent","An error event which is returned by the Error Reporting system."],["ErrorGroup","Description of a group of similar error events."],["ErrorGroupStats","Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter."],["GetGroupRequest","A request to return an individual group."],["HttpRequestContext","HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs."],["ListEventsRequest","Specifies a set of error events to return."],["ListEventsResponse","Contains a set of requested error events."],["ListGroupStatsRequest","Specifies a set of `ErrorGroupStats` to return."],["ListGroupStatsResponse","Contains a set of requested error group stats."],["QueryTimeRange","Requests might be rejected or the resulting timed count durations might be adjusted for lower durations."],["ReportErrorEventRequest","A request for reporting an individual error event."],["ReportErrorEventResponse","Response for reporting an individual error event. Data may be added to this message in the future."],["ReportedErrorEvent","An error event which is reported to the Error Reporting system."],["ServiceContext","Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel."],["ServiceContextFilter","Specifies criteria for filtering a subset of service contexts. The fields in the filter correspond to the fields in `ServiceContext`. Only exact, case-sensitive matches are supported. If a field is unset or empty, it matches arbitrary values."],["SourceLocation","Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case."],["TimedCount","The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them."],["TrackingIssue","Information related to tracking the progress on resolving the error."],["UpdateGroupRequest","A request to replace the existing data for the given group."]]});