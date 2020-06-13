initSidebarItems({"enum":[["ExecutionStrategy","Indicates how/where this Action was executed."],["FileProcessingErrorType","Errors in file post-processing are categorized using this enum."],["Language","These correspond to the prefix of the rule name. Eg cc_test has language CC."],["Status","Status of a resource."],["TargetType","These correspond to the suffix of the rule name. Eg cc_test has type TEST."],["TestCaching","Most build systems cache build results to speed up incremental builds. Some also cache test results too. This indicates whether the test results were found in a cache, and where that cache was located."],["TestSize","Indicates how big the user indicated the test action was."],["UploadStatus","Indicates the upload status of the invocation, whether it is post-processing, or immutable, etc."]],"mod":[["action",""],["configuration",""],["configured_target",""],["dependency",""],["file",""],["file_set",""],["invocation",""],["list_actions_request",""],["list_configurations_request",""],["list_configured_targets_request",""],["list_file_sets_request",""],["list_targets_request",""],["result_store_download_client","Generated client implementations."],["result_store_file_download_client","Generated client implementations."],["result_store_upload_client","Generated client implementations."],["search_invocations_request",""],["target",""],["test",""],["test_case",""],["test_timing",""],["traverse_file_sets_request",""],["upload_request",""]],"struct":[["Action","An action that happened as part of a configured target. This action could be a build, a test, or another type of action, as specified in action_type oneof."],["ActionAttributes","General attributes of an action"],["ActionCoverage","Describes code coverage for a build or test Action. This is used to store baseline coverage for build Actions and test coverage for test Actions."],["AggregateCoverage","Describes aggregate code coverage for a collection of build or test Actions. A line or branch is covered if and only if it is covered in any of the build or test actions."],["ArchiveEntry","Information specific to an entry in an archive."],["BranchCoverage","Describes branch coverage for a file"],["BranchCoverageSummary","Summary of branch coverage A branch may be:  * not executed.  Counted only in total.  * executed but not taken.  Appears in total and executed.  * executed and taken.  Appears in all three fields."],["BuildAction","A build action, such as building a java library."],["CommandLine","The command and arguments that produced this Invocation."],["Configuration","Represents a configuration within an Invocation associated with one or more ConfiguredTargets. It captures the environment and other settings that were used."],["ConfigurationAttributes","Attributes that apply only to the configuration."],["ConfiguredTarget","Each ConfiguredTarget represents data for a given configuration of a given target in a given Invocation. Every ConfiguredTarget should have at least one Action as a child resource before the invocation is finalized. Refer to the Action's documentation for more info on this."],["ConfiguredTestAttributes","Attributes that apply only to test actions under this configured target."],["CreateActionRequest","Request passed into CreateAction"],["CreateConfigurationRequest","Request passed into CreateConfiguration"],["CreateConfiguredTargetRequest","Request passed into CreateConfiguredTarget"],["CreateFileSetRequest","Request passed into CreateFileSet"],["CreateInvocationRequest","Request passed into CreateInvocation"],["CreateTargetRequest","Request passed into CreateTarget"],["DeleteInvocationRequest","Request passed into DeleteInvocation"],["Dependency","Represents a dependency of a resource on another resource. This can be used to define a graph or a workflow paradigm through resources."],["DownloadMetadata","The download metadata for an invocation"],["File","The metadata for a file or an archive file entry."],["FileCoverage","Describes code coverage for a particular file under test."],["FileProcessingError","Stores an error reading or parsing a file during post-processing."],["FileProcessingErrors","Stores errors reading or parsing a file during post-processing."],["FileSet","This resource represents a set of Files and other (nested) FileSets. A FileSet is a node in the graph, and the file_sets field represents the outgoing edges. A resource may reference various nodes in the graph to represent the transitive closure of all files from those nodes. The FileSets must form a directed acyclic graph. The Upload API is unable to enforce that the graph is acyclic at write time, and if cycles are written, it may cause issues at read time."],["FinalizeConfiguredTargetRequest","Request passed into FinalizeConfiguredTarget"],["FinalizeConfiguredTargetResponse","Response returned from FinalizeConfiguredTarget"],["FinalizeInvocationRequest","Request passed into FinalizeInvocation"],["FinalizeInvocationResponse","Response returned from FinalizeInvocation"],["FinalizeTargetRequest","Request passed into FinalizeTarget"],["FinalizeTargetResponse","Response returned from FinalizeTarget"],["GetActionRequest","Request passed into GetAction"],["GetConfigurationRequest","Request passed into GetConfiguration"],["GetConfiguredTargetRequest","Request passed into GetConfiguredTarget"],["GetFileRequest","Request object for GetFile"],["GetFileResponse","Response object for GetFile"],["GetFileSetRequest","Request passed into GetFileSet"],["GetFileTailRequest","Request object for GetFileTail"],["GetFileTailResponse","Response object for GetFileTail"],["GetInvocationDownloadMetadataRequest","Request passed into GetInvocationDownloadMetadata"],["GetInvocationRequest","Request passed into GetInvocation"],["GetInvocationUploadMetadataRequest","Request passed into GetInvocationUploadMetadata"],["GetTargetRequest","Request passed into GetTarget"],["InputFileInfo","File count and size information for the input files to a configured target."],["Invocation","An Invocation typically represents the result of running a tool. Each has a unique ID, typically generated by the server. Target resources under each Invocation contain the bulk of the data."],["InvocationAttributes","Attributes that apply to all invocations."],["InvocationContext","Describes the invocation context which includes a display name and URL."],["LanguageCoverageSummary","Summary of coverage in each language"],["LineCoverage","Describes line coverage for a file"],["LineCoverageSummary","Summary of line coverage"],["ListActionsRequest","Request passed into ListActions"],["ListActionsResponse","Response from calling ListActions"],["ListConfigurationsRequest","Request passed into ListConfigurations"],["ListConfigurationsResponse","Response from calling ListConfigurations"],["ListConfiguredTargetsRequest","Request passed into ListConfiguredTargets"],["ListConfiguredTargetsResponse","Response from calling ListConfiguredTargets"],["ListFileSetsRequest","Request passed into ListFileSets"],["ListFileSetsResponse","Response from calling ListFileSets"],["ListTargetsRequest","Request passed into ListTargets"],["ListTargetsResponse","Response from calling ListTargetsResponse"],["LocalTestTiming","Timing data for tests executed locally on the machine running the build."],["MergeActionRequest","Request passed into MergeAction"],["MergeConfiguredTargetRequest","Request passed into MergeConfiguredTarget"],["MergeFileSetRequest","Request passed into MergeFileSet"],["MergeInvocationRequest","Request passed into MergeInvocation"],["MergeTargetRequest","Request passed into MergeTarget"],["Property","A generic key-value property definition."],["RemoteTestAttemptTiming","Timing data for one attempt to execute a test action remotely."],["RemoteTestTiming","Timing data for the part of the test execution that is done remotely."],["SearchInvocationsRequest","Request passed into SearchInvocations"],["SearchInvocationsResponse","Response from calling SearchInvocations"],["StatusAttributes","Describes the status of a resource in both enum and string form. Only use description when conveying additional info not captured in the enum name."],["Target","Each Target represents data for a given target in a given Invocation. ConfiguredTarget and Action resources under each Target contain the bulk of the data."],["TargetAttributes","Attributes that apply to all targets."],["Test","The result of running a test case or test suite. JUnit3 TestDecorators are represented as a TestSuite with a single test."],["TestAction","A test action, such as running a JUnit4 test binary."],["TestAttributes","Attributes that apply only to test actions under this target."],["TestCase","The result of running a test case, as reported in a  element of an XML log."],["TestError","Represents an exception that prevented a test case from completing, as reported in an  element within a . For Java, multiple TestErrors are used to represent a chained exception."],["TestFailure","Represents a violated assertion, as reported in a  element within a . Some languages allow assertions to be made without stopping the test case when they're violated, leading to multiple TestFailures. For Java, multiple TestFailures are used to represent a chained exception."],["TestSuite","The result of running a test suite, as reported in a  element of an XML log."],["TestTiming","Timing data for execution of a test action. The action may be performed locally, on the machine running the build, or remotely."],["TestWarning","A warning from a test execution."],["Timing","The timing of a particular Invocation, Action, etc. The start_time is specified, stop time can be calculated by adding duration to start_time."],["TouchInvocationRequest","Request passed into TouchInvocation"],["TouchInvocationResponse","Response returned from TouchInvocation"],["TraverseFileSetsRequest","Request passed into TraverseFileSets"],["TraverseFileSetsResponse","Response from calling TraverseFileSets"],["UpdateActionRequest","Request passed into UpdateAction"],["UpdateConfigurationRequest","Request passed into UpdateConfiguration"],["UpdateConfiguredTargetRequest","Request passed into UpdateConfiguredTarget"],["UpdateFileSetRequest","Request passed into UpdateFileSet"],["UpdateInvocationRequest","Request passed into UpdateInvocation"],["UpdateTargetRequest","Request passed into UpdateTarget"],["UploadBatchRequest","Request passed into UploadBatch"],["UploadBatchResponse","Response for UploadBatch"],["UploadMetadata","The upload metadata for an invocation"],["UploadRequest","The individual upload requests for this batch."],["WorkspaceContext","If known, represents the state of the user/build-system workspace."],["WorkspaceInfo","Describes the workspace under which the tool was invoked, this includes information that was fed into the command, the source code referenced, and the tool itself."]]});