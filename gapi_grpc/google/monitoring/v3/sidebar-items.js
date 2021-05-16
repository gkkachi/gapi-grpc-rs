initSidebarItems({"enum":[["ComparisonType","Specifies an ordering relationship on two arguments, called `left` and `right`."],["GroupResourceType","The supported resource types that can be used as values of `group_resource.resource_type`. `INSTANCE` includes `gce_instance` and `aws_ec2_instance` resource types. The resource types `gae_app` and `uptime_url` are not valid here because group checks on App Engine modules and URLs are not allowed."],["ServiceTier","The tier of service for a Workspace. Please see the service tiers documentation for more details."],["UptimeCheckRegion","The regions from which an Uptime check can be run."]],"mod":[["aggregation",""],["alert_policy",""],["alert_policy_service_client","Generated client implementations."],["basic_sli",""],["create_time_series_summary",""],["group_service_client","Generated client implementations."],["internal_checker",""],["label_value",""],["list_groups_request",""],["list_time_series_request",""],["metric_service_client","Generated client implementations."],["notification_channel",""],["notification_channel_service_client","Generated client implementations."],["query_service_client","Generated client implementations."],["request_based_sli",""],["service",""],["service_level_indicator",""],["service_level_objective",""],["service_monitoring_service_client","Generated client implementations."],["text_locator",""],["time_series_data",""],["time_series_descriptor",""],["typed_value",""],["uptime_check_config",""],["uptime_check_service_client","Generated client implementations."],["windows_based_sli",""]],"struct":[["Aggregation","Describes how to combine multiple time series to provide a different view of the data.  Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number."],["AlertPolicy","A description of the conditions under which some aspect of your system is considered to be “unhealthy” and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting."],["BasicSli","An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the `service_resource` determines the metrics to use and the `service_resource.labels` and `metric_labels` are used to construct a monitoring filter to filter that metric down to just the data relevant to this service."],["CreateAlertPolicyRequest","The protocol for the `CreateAlertPolicy` request."],["CreateGroupRequest","The `CreateGroup` request."],["CreateMetricDescriptorRequest","The `CreateMetricDescriptor` request."],["CreateNotificationChannelRequest","The `CreateNotificationChannel` request."],["CreateServiceLevelObjectiveRequest","The `CreateServiceLevelObjective` request."],["CreateServiceRequest","The `CreateService` request."],["CreateTimeSeriesError","DEPRECATED. Used to hold per-time-series error status."],["CreateTimeSeriesRequest","The `CreateTimeSeries` request."],["CreateTimeSeriesSummary","Summary of the result of a failed request to write data to a time series."],["CreateUptimeCheckConfigRequest","The protocol for the `CreateUptimeCheckConfig` request."],["DeleteAlertPolicyRequest","The protocol for the `DeleteAlertPolicy` request."],["DeleteGroupRequest","The `DeleteGroup` request. The default behavior is to be able to delete a single group without any descendants."],["DeleteMetricDescriptorRequest","The `DeleteMetricDescriptor` request."],["DeleteNotificationChannelRequest","The `DeleteNotificationChannel` request."],["DeleteServiceLevelObjectiveRequest","The `DeleteServiceLevelObjective` request."],["DeleteServiceRequest","The `DeleteService` request."],["DeleteUptimeCheckConfigRequest","The protocol for the `DeleteUptimeCheckConfig` request."],["DistributionCut","A `DistributionCut` defines a `TimeSeries` and thresholds used for measuring good service and total service. The `TimeSeries` must have `ValueType = DISTRIBUTION` and `MetricKind = DELTA` or `MetricKind = CUMULATIVE`. The computed `good_service` will be the count of values x in the `Distribution` such that `range.min <= x < range.max`."],["DroppedLabels","A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar."],["GetAlertPolicyRequest","The protocol for the `GetAlertPolicy` request."],["GetGroupRequest","The `GetGroup` request."],["GetMetricDescriptorRequest","The `GetMetricDescriptor` request."],["GetMonitoredResourceDescriptorRequest","The `GetMonitoredResourceDescriptor` request."],["GetNotificationChannelDescriptorRequest","The `GetNotificationChannelDescriptor` response."],["GetNotificationChannelRequest","The `GetNotificationChannel` request."],["GetNotificationChannelVerificationCodeRequest","The `GetNotificationChannelVerificationCode` request."],["GetNotificationChannelVerificationCodeResponse","The `GetNotificationChannelVerificationCode` request."],["GetServiceLevelObjectiveRequest","The `GetServiceLevelObjective` request."],["GetServiceRequest","The `GetService` request."],["GetUptimeCheckConfigRequest","The protocol for the `GetUptimeCheckConfig` request."],["Group","The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group’s filter matches an available monitored resource, then that resource is a member of that group.  Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups."],["InternalChecker","An internal checker allows Uptime checks to run on private/internal GCP resources."],["LabelValue","A label value."],["ListAlertPoliciesRequest","The protocol for the `ListAlertPolicies` request."],["ListAlertPoliciesResponse","The protocol for the `ListAlertPolicies` response."],["ListGroupMembersRequest","The `ListGroupMembers` request."],["ListGroupMembersResponse","The `ListGroupMembers` response."],["ListGroupsRequest","The `ListGroup` request."],["ListGroupsResponse","The `ListGroups` response."],["ListMetricDescriptorsRequest","The `ListMetricDescriptors` request."],["ListMetricDescriptorsResponse","The `ListMetricDescriptors` response."],["ListMonitoredResourceDescriptorsRequest","The `ListMonitoredResourceDescriptors` request."],["ListMonitoredResourceDescriptorsResponse","The `ListMonitoredResourceDescriptors` response."],["ListNotificationChannelDescriptorsRequest","The `ListNotificationChannelDescriptors` request."],["ListNotificationChannelDescriptorsResponse","The `ListNotificationChannelDescriptors` response."],["ListNotificationChannelsRequest","The `ListNotificationChannels` request."],["ListNotificationChannelsResponse","The `ListNotificationChannels` response."],["ListServiceLevelObjectivesRequest","The `ListServiceLevelObjectives` request."],["ListServiceLevelObjectivesResponse","The `ListServiceLevelObjectives` response."],["ListServicesRequest","The `ListServices` request."],["ListServicesResponse","The `ListServices` response."],["ListTimeSeriesRequest","The `ListTimeSeries` request."],["ListTimeSeriesResponse","The `ListTimeSeries` response."],["ListUptimeCheckConfigsRequest","The protocol for the `ListUptimeCheckConfigs` request."],["ListUptimeCheckConfigsResponse","The protocol for the `ListUptimeCheckConfigs` response."],["ListUptimeCheckIpsRequest","The protocol for the `ListUptimeCheckIps` request."],["ListUptimeCheckIpsResponse","The protocol for the `ListUptimeCheckIps` response."],["MutationRecord","Describes a change made to a configuration."],["NotificationChannel","A `NotificationChannel` is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval."],["NotificationChannelDescriptor","A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type."],["Point","A single data point in a time series."],["QueryError","An error associated with a query in the time series query language format."],["QueryErrorList","This is an error detail intended to be used with INVALID_ARGUMENT errors."],["QueryTimeSeriesRequest","The `QueryTimeSeries` request."],["QueryTimeSeriesResponse","The `QueryTimeSeries` response."],["Range","Range of numerical values, inclusive of `min` and exclusive of `max`. If the open range “< range.max” is desired, set `range.min = -infinity`. If the open range “>= range.min” is desired, set `range.max = infinity`."],["RequestBasedSli","Service Level Indicators for which atomic units of service are counted directly."],["SendNotificationChannelVerificationCodeRequest","The `SendNotificationChannelVerificationCode` request."],["Service","A `Service` is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia). In Cloud Monitoring, a `Service` acts as the root resource under which operational aspects of the service are accessible."],["ServiceLevelIndicator","A Service-Level Indicator (SLI) describes the “performance” of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a “custom” SLI can be defined with a query to the underlying metric store. An SLI is defined to be `good_service / total_service` over any queried time interval. The value of performance always falls into the range `0 <= performance <= 1`. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a `Distribution` into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries."],["ServiceLevelObjective","A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include “99% of requests in each rolling week have latency below 200 milliseconds” or “99.5% of requests in each calendar month return successfully.”"],["SpanContext","The context of a span, attached to [Exemplars][google.api.Distribution.Exemplars] in [Distribution][google.api.Distribution] values during aggregation."],["TextLocator","A locator for text. Indicates a particular part of the text of a request or of an object referenced in the request."],["TimeInterval","A closed time interval. It extends from the start time to the end time, and includes both: `[startTime, endTime]`. Valid time intervals depend on the `MetricKind` of the metric value. The end time must not be earlier than the start time. When writing data points, the start time must not be more than 25 hours in the past and the end time must not be more than five minutes in the future."],["TimeSeries","A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series."],["TimeSeriesData","Represents the values of a time series associated with a TimeSeriesDescriptor."],["TimeSeriesDescriptor","A descriptor for the labels and points in a time series."],["TimeSeriesRatio","A `TimeSeriesRatio` specifies two `TimeSeries` to use for computing the `good_service / total_service` ratio. The specified `TimeSeries` must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`. The `TimeSeriesRatio` must specify exactly two of good, bad, and total, and the relationship `good_service + bad_service = total_service` will be assumed."],["TypedValue","A single strongly-typed value."],["UpdateAlertPolicyRequest","The protocol for the `UpdateAlertPolicy` request."],["UpdateGroupRequest","The `UpdateGroup` request."],["UpdateNotificationChannelRequest","The `UpdateNotificationChannel` request."],["UpdateServiceLevelObjectiveRequest","The `UpdateServiceLevelObjective` request."],["UpdateServiceRequest","The `UpdateService` request."],["UpdateUptimeCheckConfigRequest","The protocol for the `UpdateUptimeCheckConfig` request."],["UptimeCheckConfig","This message configures which resources and services to monitor for availability."],["UptimeCheckIp","Contains the region, location, and list of IP addresses where checkers in the location run from."],["VerifyNotificationChannelRequest","The `VerifyNotificationChannel` request."],["WindowsBasedSli","A `WindowsBasedSli` defines `good_service` as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the `window_criterion`."]]});