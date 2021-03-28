initSidebarItems({"mod":[["action",""],["action_detail",""],["actor",""],["application_reference",""],["comment",""],["consolidation_strategy",""],["create",""],["data_leak_prevention_change",""],["delete",""],["drive_activity",""],["drive_activity_service_client","Generated client implementations."],["drive_item",""],["drive_item_reference",""],["owner",""],["permission",""],["query_drive_activity_request",""],["restore",""],["settings_change",""],["system_event",""],["target",""],["target_reference",""],["user",""]],"struct":[["Action","Information about the action."],["ActionDetail","Data describing the type and additional information of an action."],["Actor","The actor of a Drive activity."],["Administrator","Empty message representing an administrator."],["AnonymousUser","Empty message representing an anonymous user or indicating the authenticated user should be anonymized."],["ApplicationReference","Activity in applications other than Drive."],["Comment","A change about comments on an object."],["ConsolidationStrategy","How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related."],["Create","An object was created."],["DataLeakPreventionChange","A change in the object's data leak prevention status."],["Delete","An object was deleted."],["Domain","Information about a domain."],["Drive","Information about a shared drive."],["DriveActivity","A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest."],["DriveItem","A Drive item, such as a file or folder."],["DriveItemReference","A lightweight reference to a Drive item, such as a file or folder."],["DriveReference","A lightweight reference to a shared drive."],["Edit","An empty message indicating an object was edited."],["FileComment","A comment on a file."],["Group","Information about a group."],["Impersonation","Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available."],["Move","An object was moved."],["Owner","Information about the owner of a Drive item."],["Permission","The permission setting of an object."],["PermissionChange","A change of the permission setting on an item."],["QueryDriveActivityRequest","The request message for querying Drive activity."],["QueryDriveActivityResponse","Response message for querying Drive activity."],["Rename","An object was renamed."],["Restore","A deleted object was restored."],["SettingsChange","Information about settings changes."],["SystemEvent","Event triggered by system operations instead of end users."],["Target","Information about the target of activity."],["TargetReference","A lightweight reference to the target of activity."],["TeamDrive","This item is deprecated; please see `Drive` instead."],["TeamDriveReference","This item is deprecated; please see `DriveReference` instead."],["TimeRange","Information about time ranges."],["User","Information about an end user."]]});