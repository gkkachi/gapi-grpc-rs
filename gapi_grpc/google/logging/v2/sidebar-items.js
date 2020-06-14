initSidebarItems({"enum":[["LifecycleState","LogBucket lifecycle states (Beta)."]],"mod":[["config_service_v2_client","Generated client implementations."],["log_entry",""],["log_metric",""],["log_sink",""],["logging_service_v2_client","Generated client implementations."],["metrics_service_v2_client","Generated client implementations."]],"struct":[["BigQueryOptions","Options that change functionality of a sink exporting data to BigQuery."],["CmekSettings","Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource."],["CreateExclusionRequest","The parameters to `CreateExclusion`."],["CreateLogMetricRequest","The parameters to CreateLogMetric."],["CreateSinkRequest","The parameters to `CreateSink`."],["DeleteExclusionRequest","The parameters to `DeleteExclusion`."],["DeleteLogMetricRequest","The parameters to DeleteLogMetric."],["DeleteLogRequest","The parameters to DeleteLog."],["DeleteSinkRequest","The parameters to `DeleteSink`."],["GetBucketRequest","The parameters to `GetBucket` (Beta)."],["GetCmekSettingsRequest","The parameters to [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings]."],["GetExclusionRequest","The parameters to `GetExclusion`."],["GetLogMetricRequest","The parameters to GetLogMetric."],["GetSinkRequest","The parameters to `GetSink`."],["ListBucketsRequest","The parameters to `ListBuckets` (Beta)."],["ListBucketsResponse","The response from ListBuckets (Beta)."],["ListExclusionsRequest","The parameters to `ListExclusions`."],["ListExclusionsResponse","Result returned from `ListExclusions`."],["ListLogEntriesRequest","The parameters to `ListLogEntries`."],["ListLogEntriesResponse","Result returned from `ListLogEntries`."],["ListLogMetricsRequest","The parameters to ListLogMetrics."],["ListLogMetricsResponse","Result returned from ListLogMetrics."],["ListLogsRequest","The parameters to ListLogs."],["ListLogsResponse","Result returned from ListLogs."],["ListMonitoredResourceDescriptorsRequest","The parameters to ListMonitoredResourceDescriptors"],["ListMonitoredResourceDescriptorsResponse","Result returned from ListMonitoredResourceDescriptors."],["ListSinksRequest","The parameters to `ListSinks`."],["ListSinksResponse","Result returned from `ListSinks`."],["LogBucket","Describes a repository of logs (Beta)."],["LogEntry","An individual entry in a log."],["LogEntryOperation","Additional information about a potentially long-running operation with which a log entry is associated."],["LogEntrySourceLocation","Additional information about the source code location that produced the log entry."],["LogExclusion","Specifies a set of log entries that are not to be stored in Logging. If your GCP resource receives a large volume of logs, you can use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Note that organization-level and folder-level exclusions don't apply to child resources, and that you can't exclude audit log entries."],["LogMetric","Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval."],["LogSink","Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a Cloud Pub/Sub topic. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder."],["UpdateBucketRequest","The parameters to `UpdateBucket` (Beta)."],["UpdateCmekSettingsRequest","The parameters to [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings]."],["UpdateExclusionRequest","The parameters to `UpdateExclusion`."],["UpdateLogMetricRequest","The parameters to UpdateLogMetric."],["UpdateSinkRequest","The parameters to `UpdateSink`."],["WriteLogEntriesPartialErrors","Error details for WriteLogEntries with partial success."],["WriteLogEntriesRequest","The parameters to WriteLogEntries."],["WriteLogEntriesResponse","Result returned from WriteLogEntries."]]});