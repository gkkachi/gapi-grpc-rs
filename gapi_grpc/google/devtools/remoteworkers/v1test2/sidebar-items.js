initSidebarItems({"enum":[["BotStatus","A coarse description of the status of the bot that the server uses to determine whether to assign the bot new leases."],["LeaseState","The state of the lease. All leases start in the PENDING state. A bot can change PENDING to ACTIVE or (in the case of an error) COMPLETED, or from ACTIVE to COMPLETED. The server can change PENDING or ACTIVE to CANCELLED if it wants the bot to release its resources - for example, if the bot needs to be quarantined (it's producing bad output) or a cell needs to be drained."]],"mod":[["admin_temp",""],["bots_client","Generated client implementations."],["command_task",""],["device",""],["worker",""]],"struct":[["AdminTemp","AdminTemp is a prelimiary set of administration tasks. It's called \"Temp\" because we do not yet know the best way to represent admin tasks; it's possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API."],["Blob","Describes a blob of binary content with its digest."],["BotSession","A bot session represents the state of a bot while in continuous contact with the server for a period of time. The session includes information about the worker - that is, the worker (the physical or virtual hardware) is considered to be a property of the bot (the software agent running on that hardware), which is the reverse of real life, but more natural from the point of the view of this API, which communicates solely with the bot and not directly with the underlying worker."],["CommandOutputs","DEPRECATED - use CommandResult instead. Describes the actual outputs from the task."],["CommandOverhead","DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message."],["CommandResult","All information about the execution of a command, suitable for providing as the Bots interface's `Lease.result` field."],["CommandTask","Describes a shell-style task to execute, suitable for providing as the Bots interface's `Lease.payload` field."],["CreateBotSessionRequest","Request message for CreateBotSession."],["Device","Any device, including computers, phones, accelerators (e.g. GPUs), etc. All names must be unique."],["Digest","The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a \"digest.\" The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's \"ContentAddressibleStorage\" interface."],["Directory","The contents of a directory. Similar to the equivalent message in the Remote Execution API."],["DirectoryMetadata","The metadata for a directory. Similar to the equivalent message in the Remote Execution API."],["FileMetadata","The metadata for a file. Similar to the equivalent message in the Remote Execution API."],["Lease","A Lease is a lease that the scheduler has assigned to this bot. If the bot notices (by UpdateBotSession) that it has any leases in the PENDING state, it should call UpdateBotSession to put the leases into the ACTIVE state and start executing their assignments."],["UpdateBotSessionRequest","Request message for UpdateBotSession."],["Worker","Describes a worker, which is a list of one or more devices and the connections between them. A device could be a computer, a phone, or even an accelerator like a GPU; it's up to the farm administrator to decide how to model their farm. For example, if a farm only has one type of GPU, the GPU could be modelled as a \"has_gpu\" property on its host computer; if it has many subproperties itself, it might be better to model it as a separate device."]]});