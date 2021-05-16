initSidebarItems({"enum":[["DatapathProvider","The datapath provider selects the implementation of the Kubernetes networking // model for service resolution and network policy enforcement."],["UpgradeResourceType","UpgradeResourceType is the resource type that is upgrading. It is used in upgrade notifications."]],"mod":[["cloud_run_config",""],["cluster",""],["cluster_autoscaling",""],["cluster_manager_client","Generated client implementations."],["cluster_telemetry",""],["database_encryption",""],["istio_config",""],["location",""],["maintenance_window",""],["master_authorized_networks_config",""],["network_policy",""],["node_pool",""],["node_taint",""],["notification_config",""],["operation",""],["operation_progress",""],["release_channel",""],["reservation_affinity",""],["resource_usage_export_config",""],["sandbox_config",""],["server_config",""],["set_master_auth_request",""],["status_condition",""],["usable_subnetwork_secondary_range",""],["workload_metadata_config",""]],"struct":[["AcceleratorConfig","AcceleratorConfig represents a Hardware Accelerator request."],["AddonsConfig","Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality."],["AuthenticatorGroupsConfig","Configuration for returning group information from authenticators."],["AutoUpgradeOptions","AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed."],["AutoprovisioningNodePoolDefaults","AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP."],["BinaryAuthorization","Configuration for Binary Authorization."],["CancelOperationRequest","CancelOperationRequest cancels a single operation."],["ClientCertificateConfig","Configuration for client certificates on the cluster."],["CloudRunConfig","Configuration options for the Cloud Run feature."],["Cluster","A Google Kubernetes Engine cluster."],["ClusterAutoscaling","ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs."],["ClusterTelemetry","Telemetry integration for the cluster."],["ClusterUpdate","ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided."],["CompleteIpRotationRequest","CompleteIPRotationRequest moves the cluster master back into single-IP mode."],["ConfidentialNodes","ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs."],["ConfigConnectorConfig","Configuration options for the Config Connector add-on."],["CreateClusterRequest","CreateClusterRequest creates a cluster."],["CreateNodePoolRequest","CreateNodePoolRequest creates a node pool for a cluster."],["DailyMaintenanceWindow","Time window specified for daily maintenance operations."],["DatabaseEncryption","Configuration of etcd encryption."],["DefaultSnatStatus","DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster."],["DeleteClusterRequest","DeleteClusterRequest deletes a cluster."],["DeleteNodePoolRequest","DeleteNodePoolRequest deletes a node pool for a cluster."],["DnsCacheConfig","Configuration for NodeLocal DNSCache"],["EphemeralStorageConfig","EphemeralStorageConfig contains configuration for the ephemeral storage filesystem."],["GcePersistentDiskCsiDriverConfig","Configuration for the Compute Engine PD CSI driver. This option can only be enabled at cluster creation time."],["GetClusterRequest","GetClusterRequest gets the settings of a cluster."],["GetJsonWebKeysRequest","GetJSONWebKeysRequest gets the public component of the keys used by the cluster to sign token requests. This will be the jwks_uri for the discover document returned by getOpenIDConfig. See the OpenID Connect Discovery 1.0 specification for details."],["GetJsonWebKeysResponse","GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517"],["GetNodePoolRequest","GetNodePoolRequest retrieves a node pool for a cluster."],["GetOpenIdConfigRequest","GetOpenIDConfigRequest gets the OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details."],["GetOpenIdConfigResponse","GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details."],["GetOperationRequest","GetOperationRequest gets a single operation."],["GetServerConfigRequest","Gets the current Kubernetes Engine service configuration."],["HorizontalPodAutoscaling","Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods."],["HttpLoadBalancing","Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster."],["IntraNodeVisibilityConfig","IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster."],["IpAllocationPolicy","Configuration for controlling how IPs are allocated in the cluster."],["IstioConfig","Configuration options for Istio addon."],["Jwk","Jwk is a JSON Web Key as specified in RFC 7517"],["KalmConfig","Configuration options for the KALM addon."],["KubernetesDashboard","Configuration for the Kubernetes Dashboard."],["LegacyAbac","Configuration for the legacy Attribute Based Access Control authorization mode."],["LinuxNodeConfig","Parameters that can be configured on Linux nodes."],["ListClustersRequest","ListClustersRequest lists clusters."],["ListClustersResponse","ListClustersResponse is the result of ListClustersRequest."],["ListLocationsRequest","ListLocationsRequest is used to request the locations that offer GKE."],["ListLocationsResponse","ListLocationsResponse returns the list of all GKE locations and their recommendation state."],["ListNodePoolsRequest","ListNodePoolsRequest lists the node pool(s) for a cluster."],["ListNodePoolsResponse","ListNodePoolsResponse is the result of ListNodePoolsRequest."],["ListOperationsRequest","ListOperationsRequest lists operations."],["ListOperationsResponse","ListOperationsResponse is the result of ListOperationsRequest."],["ListUsableSubnetworksRequest","ListUsableSubnetworksRequest requests the list of usable subnetworks. available to a user for creating clusters."],["ListUsableSubnetworksResponse","ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest."],["Location","Location returns the location name, and if the location is recommended for GKE cluster scheduling."],["MaintenancePolicy","MaintenancePolicy defines the maintenance policy to be used for the cluster."],["MaintenanceWindow","MaintenanceWindow defines the maintenance window to be used for the cluster."],["Master","Master is the configuration for components on master."],["MasterAuth","The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates."],["MasterAuthorizedNetworksConfig","Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs."],["MaxPodsConstraint","Constraints applied to pods."],["NetworkConfig","NetworkConfig reports the relative names of network & subnetwork."],["NetworkPolicy","Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/"],["NetworkPolicyConfig","Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes."],["NodeConfig","Parameters that describe the nodes in a cluster."],["NodeKubeletConfig","Node kubelet configs."],["NodeManagement","NodeManagement defines the set of node management services turned on for the node pool."],["NodePool","NodePool contains the name and configuration for a cluster’s node pool. Node pools are a set of nodes (i.e. VM’s), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload."],["NodePoolAutoscaling","NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage."],["NodeTaint","Kubernetes taint is comprised of three fields: key, value, and effect. Effect can only be one of three types:  NoSchedule, PreferNoSchedule or NoExecute."],["NotificationConfig","NotificationConfig is the configuration of notifications."],["Operation","This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only."],["OperationProgress","Information about operation (or operation stage) progress."],["PodSecurityPolicyConfig","Configuration for the PodSecurityPolicy feature."],["PrivateClusterConfig","Configuration options for private clusters."],["PrivateClusterMasterGlobalAccessConfig","Configuration for controlling master global access settings."],["RecurringTimeWindow","Represents an arbitrary window of time that recurs."],["ReleaseChannel","ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk."],["ReservationAffinity","ReservationAffinity is the configuration of desired reservation which instances could take capacity from."],["ResourceLimit","Contains information about amount of some resource in the cluster. For memory, value should be in GB."],["ResourceUsageExportConfig","Configuration for exporting cluster resource usages."],["RollbackNodePoolUpgradeRequest","RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed."],["SandboxConfig","SandboxConfig contains configurations of the sandbox to use for the node."],["ServerConfig","Kubernetes Engine service configuration."],["SetAddonsConfigRequest","SetAddonsRequest sets the addons associated with the cluster."],["SetLabelsRequest","SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster"],["SetLegacyAbacRequest","SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster."],["SetLocationsRequest","SetLocationsRequest sets the locations of the cluster."],["SetLoggingServiceRequest","SetLoggingServiceRequest sets the logging service of a cluster."],["SetMaintenancePolicyRequest","SetMaintenancePolicyRequest sets the maintenance policy for a cluster."],["SetMasterAuthRequest","SetMasterAuthRequest updates the admin password of a cluster."],["SetMonitoringServiceRequest","SetMonitoringServiceRequest sets the monitoring service of a cluster."],["SetNetworkPolicyRequest","SetNetworkPolicyRequest enables/disables network policy for a cluster."],["SetNodePoolAutoscalingRequest","SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool."],["SetNodePoolManagementRequest","SetNodePoolManagementRequest sets the node management properties of a node pool."],["SetNodePoolSizeRequest","SetNodePoolSizeRequest sets the size a node pool."],["ShieldedInstanceConfig","A set of Shielded Instance options."],["ShieldedNodes","Configuration of Shielded Nodes feature."],["StartIpRotationRequest","StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP."],["StatusCondition","StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED)."],["TimeWindow","Represents an arbitrary window of time."],["TpuConfig","Configuration for Cloud TPU."],["UpdateClusterRequest","UpdateClusterRequest updates the settings of a cluster."],["UpdateMasterRequest","UpdateMasterRequest updates the master of the cluster."],["UpdateNodePoolRequest","SetNodePoolVersionRequest updates the version of a node pool."],["UpgradeEvent","UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading."],["UsableSubnetwork","UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range."],["UsableSubnetworkSecondaryRange","Secondary IP range of a usable subnetwork."],["VerticalPodAutoscaling","VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it."],["WorkloadIdentityConfig","Configuration for the use of Kubernetes Service Accounts in GCP IAM policies."],["WorkloadMetadataConfig","WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool."]]});