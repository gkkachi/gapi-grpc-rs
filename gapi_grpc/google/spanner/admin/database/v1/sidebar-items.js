initSidebarItems({"enum":[["RestoreSourceType","Indicates the type of the restore source."]],"mod":[["backup",""],["database",""],["database_admin_client","Generated client implementations."],["restore_database_metadata",""],["restore_database_request",""],["restore_info",""]],"struct":[["Backup","A backup of a Cloud Spanner database."],["BackupInfo","Information about a backup."],["CreateBackupMetadata","Metadata type for the operation returned by [CreateBackup][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup]."],["CreateBackupRequest","The request for [CreateBackup][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup]."],["CreateDatabaseMetadata","Metadata type for the operation returned by [CreateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase]."],["CreateDatabaseRequest","The request for [CreateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase]."],["Database","A Cloud Spanner database."],["DeleteBackupRequest","The request for [DeleteBackup][google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup]."],["DropDatabaseRequest","The request for [DropDatabase][google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase]."],["GetBackupRequest","The request for [GetBackup][google.spanner.admin.database.v1.DatabaseAdmin.GetBackup]."],["GetDatabaseDdlRequest","The request for [GetDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl]."],["GetDatabaseDdlResponse","The response for [GetDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl]."],["GetDatabaseRequest","The request for [GetDatabase][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase]."],["ListBackupOperationsRequest","The request for [ListBackupOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations]."],["ListBackupOperationsResponse","The response for [ListBackupOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations]."],["ListBackupsRequest","The request for [ListBackups][google.spanner.admin.database.v1.DatabaseAdmin.ListBackups]."],["ListBackupsResponse","The response for [ListBackups][google.spanner.admin.database.v1.DatabaseAdmin.ListBackups]."],["ListDatabaseOperationsRequest","The request for [ListDatabaseOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations]."],["ListDatabaseOperationsResponse","The response for [ListDatabaseOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations]."],["ListDatabasesRequest","The request for [ListDatabases][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases]."],["ListDatabasesResponse","The response for [ListDatabases][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases]."],["OperationProgress","Encapsulates progress related information for a Cloud Spanner long running operation."],["OptimizeRestoredDatabaseMetadata","Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled."],["RestoreDatabaseMetadata","Metadata type for the long-running operation returned by [RestoreDatabase][google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase]."],["RestoreDatabaseRequest","The request for [RestoreDatabase][google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase]."],["RestoreInfo","Information about the database restore."],["UpdateBackupRequest","The request for [UpdateBackup][google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup]."],["UpdateDatabaseDdlMetadata","Metadata type for the operation returned by [UpdateDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl]."],["UpdateDatabaseDdlRequest","Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled."]]});