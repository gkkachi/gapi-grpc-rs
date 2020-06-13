initSidebarItems({"enum":[["ClassificationType","Type of the classification problem."],["TypeCode","`TypeCode` is used as a part of [DataType][google.cloud.automl.v1beta1.DataType]."]],"mod":[["annotation_payload",""],["auto_ml_client","Generated client implementations."],["batch_predict_input_config",""],["batch_predict_operation_metadata",""],["batch_predict_output_config",""],["bounding_box_metrics_entry",""],["category_stats",""],["classification_evaluation_metrics",""],["column_spec",""],["data_stats",""],["data_type",""],["dataset",""],["deploy_model_request",""],["document",""],["document_dimensions",""],["example_payload",""],["export_data_operation_metadata",""],["export_evaluated_examples_operation_metadata",""],["export_evaluated_examples_output_config",""],["export_model_operation_metadata",""],["float64_stats",""],["image",""],["input_config",""],["model",""],["model_evaluation",""],["model_export_output_config",""],["operation_metadata",""],["output_config",""],["prediction_service_client","Generated client implementations."],["string_stats",""],["tables_model_metadata",""],["text_extraction_annotation",""],["text_extraction_evaluation_metrics",""],["timestamp_stats",""]],"struct":[["AnnotationPayload","Contains annotation information that is relevant to AutoML."],["AnnotationSpec","A definition of an annotation spec."],["ArrayStats","The data statistics of a series of ARRAY values."],["BatchPredictInputConfig","Input configuration for BatchPredict Action."],["BatchPredictOperationMetadata","Details of BatchPredict operation."],["BatchPredictOutputConfig","Output configuration for BatchPredict Action."],["BatchPredictRequest","Request message for [PredictionService.BatchPredict][google.cloud.automl.v1beta1.PredictionService.BatchPredict]."],["BatchPredictResult","Result of the Batch Predict. This message is returned in [response][google.longrunning.Operation.response] of the operation returned by the [PredictionService.BatchPredict][google.cloud.automl.v1beta1.PredictionService.BatchPredict]."],["BigQueryDestination","The BigQuery location for the output content."],["BigQuerySource","The BigQuery location for the input content."],["BoundingBoxMetricsEntry","Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds."],["BoundingPoly","A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed."],["CategoryStats","The data statistics of a series of CATEGORY values."],["ClassificationAnnotation","Contains annotation details specific to classification."],["ClassificationEvaluationMetrics","Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of \"segment_classification\" type."],["ColumnSpec","A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by:   *   Tables"],["CorrelationStats","A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same."],["CreateDatasetRequest","Request message for [AutoMl.CreateDataset][google.cloud.automl.v1beta1.AutoMl.CreateDataset]."],["CreateModelOperationMetadata","Details of CreateModel operation."],["CreateModelRequest","Request message for [AutoMl.CreateModel][google.cloud.automl.v1beta1.AutoMl.CreateModel]."],["DataStats","The data statistics of a series of values that share the same DataType."],["DataType","Indicated the type of data that can be stored in a structured data entity (e.g. a table)."],["Dataset","A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated."],["DeleteDatasetRequest","Request message for [AutoMl.DeleteDataset][google.cloud.automl.v1beta1.AutoMl.DeleteDataset]."],["DeleteModelRequest","Request message for [AutoMl.DeleteModel][google.cloud.automl.v1beta1.AutoMl.DeleteModel]."],["DeleteOperationMetadata","Details of operations that perform deletes of any entities."],["DeployModelOperationMetadata","Details of DeployModel operation."],["DeployModelRequest","Request message for [AutoMl.DeployModel][google.cloud.automl.v1beta1.AutoMl.DeployModel]."],["Document","A structured text document e.g. a PDF."],["DocumentDimensions","Message that describes dimension of a document."],["DocumentInputConfig","Input configuration of a [Document][google.cloud.automl.v1beta1.Document]."],["DoubleRange","A range between two double numbers."],["ExamplePayload","Example data used for training or prediction."],["ExportDataOperationMetadata","Details of ExportData operation."],["ExportDataRequest","Request message for [AutoMl.ExportData][google.cloud.automl.v1beta1.AutoMl.ExportData]."],["ExportEvaluatedExamplesOperationMetadata","Details of EvaluatedExamples operation."],["ExportEvaluatedExamplesOutputConfig","Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported):"],["ExportEvaluatedExamplesRequest","Request message for [AutoMl.ExportEvaluatedExamples][google.cloud.automl.v1beta1.AutoMl.ExportEvaluatedExamples]."],["ExportModelOperationMetadata","Details of ExportModel operation."],["ExportModelRequest","Request message for [AutoMl.ExportModel][google.cloud.automl.v1beta1.AutoMl.ExportModel]. Models need to be enabled for exporting, otherwise an error code will be returned."],["Float64Stats","The data statistics of a series of FLOAT64 values."],["GcrDestination","The GCR location where the image must be pushed to."],["GcsDestination","The Google Cloud Storage location where the output is to be written to."],["GcsSource","The Google Cloud Storage location for the input content."],["GetAnnotationSpecRequest","Request message for [AutoMl.GetAnnotationSpec][google.cloud.automl.v1beta1.AutoMl.GetAnnotationSpec]."],["GetColumnSpecRequest","Request message for [AutoMl.GetColumnSpec][google.cloud.automl.v1beta1.AutoMl.GetColumnSpec]."],["GetDatasetRequest","Request message for [AutoMl.GetDataset][google.cloud.automl.v1beta1.AutoMl.GetDataset]."],["GetModelEvaluationRequest","Request message for [AutoMl.GetModelEvaluation][google.cloud.automl.v1beta1.AutoMl.GetModelEvaluation]."],["GetModelRequest","Request message for [AutoMl.GetModel][google.cloud.automl.v1beta1.AutoMl.GetModel]."],["GetTableSpecRequest","Request message for [AutoMl.GetTableSpec][google.cloud.automl.v1beta1.AutoMl.GetTableSpec]."],["Image","A representation of an image. Only images up to 30MB in size are supported."],["ImageClassificationDatasetMetadata","Dataset metadata that is specific to image classification."],["ImageClassificationModelDeploymentMetadata","Model deployment metadata specific to Image Classification."],["ImageClassificationModelMetadata","Model metadata for image classification."],["ImageObjectDetectionAnnotation","Annotation details for image object detection."],["ImageObjectDetectionDatasetMetadata","Dataset metadata specific to image object detection."],["ImageObjectDetectionEvaluationMetrics","Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes."],["ImageObjectDetectionModelDeploymentMetadata","Model deployment metadata specific to Image Object Detection."],["ImageObjectDetectionModelMetadata","Model metadata specific to image object detection."],["ImportDataOperationMetadata","Details of ImportData operation."],["ImportDataRequest","Request message for [AutoMl.ImportData][google.cloud.automl.v1beta1.AutoMl.ImportData]."],["InputConfig","Input configuration for ImportData Action."],["ListColumnSpecsRequest","Request message for [AutoMl.ListColumnSpecs][google.cloud.automl.v1beta1.AutoMl.ListColumnSpecs]."],["ListColumnSpecsResponse","Response message for [AutoMl.ListColumnSpecs][google.cloud.automl.v1beta1.AutoMl.ListColumnSpecs]."],["ListDatasetsRequest","Request message for [AutoMl.ListDatasets][google.cloud.automl.v1beta1.AutoMl.ListDatasets]."],["ListDatasetsResponse","Response message for [AutoMl.ListDatasets][google.cloud.automl.v1beta1.AutoMl.ListDatasets]."],["ListModelEvaluationsRequest","Request message for [AutoMl.ListModelEvaluations][google.cloud.automl.v1beta1.AutoMl.ListModelEvaluations]."],["ListModelEvaluationsResponse","Response message for [AutoMl.ListModelEvaluations][google.cloud.automl.v1beta1.AutoMl.ListModelEvaluations]."],["ListModelsRequest","Request message for [AutoMl.ListModels][google.cloud.automl.v1beta1.AutoMl.ListModels]."],["ListModelsResponse","Response message for [AutoMl.ListModels][google.cloud.automl.v1beta1.AutoMl.ListModels]."],["ListTableSpecsRequest","Request message for [AutoMl.ListTableSpecs][google.cloud.automl.v1beta1.AutoMl.ListTableSpecs]."],["ListTableSpecsResponse","Response message for [AutoMl.ListTableSpecs][google.cloud.automl.v1beta1.AutoMl.ListTableSpecs]."],["Model","API proto representing a trained machine learning model."],["ModelEvaluation","Evaluation results of a model."],["ModelExportOutputConfig","Output configuration for ModelExport Action."],["NormalizedVertex","A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane."],["OperationMetadata","Metadata used across all long running operations returned by AutoML API."],["OutputConfig","`translation.csv`"],["PredictRequest","Request message for [PredictionService.Predict][google.cloud.automl.v1beta1.PredictionService.Predict]."],["PredictResponse","Response message for [PredictionService.Predict][google.cloud.automl.v1beta1.PredictionService.Predict]."],["RegressionEvaluationMetrics","Metrics for regression problems."],["Row","A representation of a row in a relational table."],["StringStats","The data statistics of a series of STRING values."],["StructStats","The data statistics of a series of STRUCT values."],["StructType","`StructType` defines the DataType-s of a [STRUCT][google.cloud.automl.v1beta1.TypeCode.STRUCT] type."],["TableSpec","A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by:   *   Tables"],["TablesAnnotation","Contains annotation details specific to Tables."],["TablesDatasetMetadata","Metadata for a dataset used for AutoML Tables."],["TablesModelColumnInfo","An information specific to given column and Tables Model, in context of the Model and the predictions created by it."],["TablesModelMetadata","Model metadata specific to AutoML Tables."],["TextClassificationDatasetMetadata","Dataset metadata for classification."],["TextClassificationModelMetadata","Model metadata that is specific to text classification."],["TextExtractionAnnotation","Annotation for identifying spans of text."],["TextExtractionDatasetMetadata","Dataset metadata that is specific to text extraction"],["TextExtractionEvaluationMetrics","Model evaluation metrics for text extraction problems."],["TextExtractionModelMetadata","Model metadata that is specific to text extraction."],["TextSegment","A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding."],["TextSentimentAnnotation","Contains annotation details specific to text sentiment."],["TextSentimentDatasetMetadata","Dataset metadata for text sentiment."],["TextSentimentEvaluationMetrics","Model evaluation metrics for text sentiment problems."],["TextSentimentModelMetadata","Model metadata that is specific to text sentiment."],["TextSnippet","A representation of a text snippet."],["TimeSegment","A time period inside of an example that has a time dimension (e.g. video)."],["TimestampStats","The data statistics of a series of TIMESTAMP values."],["TranslationAnnotation","Annotation details specific to translation."],["TranslationDatasetMetadata","Dataset metadata that is specific to translation."],["TranslationEvaluationMetrics","Evaluation metrics for the dataset."],["TranslationModelMetadata","Model metadata that is specific to translation."],["UndeployModelOperationMetadata","Details of UndeployModel operation."],["UndeployModelRequest","Request message for [AutoMl.UndeployModel][google.cloud.automl.v1beta1.AutoMl.UndeployModel]."],["UpdateColumnSpecRequest","Request message for [AutoMl.UpdateColumnSpec][google.cloud.automl.v1beta1.AutoMl.UpdateColumnSpec]"],["UpdateDatasetRequest","Request message for [AutoMl.UpdateDataset][google.cloud.automl.v1beta1.AutoMl.UpdateDataset]"],["UpdateTableSpecRequest","Request message for [AutoMl.UpdateTableSpec][google.cloud.automl.v1beta1.AutoMl.UpdateTableSpec]"],["VideoClassificationAnnotation","Contains annotation details specific to video classification."],["VideoClassificationDatasetMetadata","Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label."],["VideoClassificationModelMetadata","Model metadata specific to video classification."],["VideoObjectTrackingAnnotation","Annotation details for video object tracking."],["VideoObjectTrackingDatasetMetadata","Dataset metadata specific to video object tracking."],["VideoObjectTrackingEvaluationMetrics","Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID)."],["VideoObjectTrackingModelMetadata","Model metadata specific to video object tracking."]]});