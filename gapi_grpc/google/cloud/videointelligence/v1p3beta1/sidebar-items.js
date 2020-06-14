initSidebarItems({"enum":[["Feature","Video annotation feature."],["LabelDetectionMode","Label detection mode."],["Likelihood","Bucketized representation of likelihood."],["StreamingFeature","Streaming video annotation feature."]],"mod":[["celebrity_track",""],["object_tracking_annotation",""],["streaming_annotate_video_request",""],["streaming_video_config",""],["streaming_video_intelligence_service_client","Generated client implementations."],["video_intelligence_service_client","Generated client implementations."]],"struct":[["AnnotateVideoProgress","Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service."],["AnnotateVideoRequest","Video annotation request."],["AnnotateVideoResponse","Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service."],["Celebrity","Celebrity definition."],["CelebrityRecognitionAnnotation","Celebrity recognition annotation per video."],["CelebrityTrack","The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities."],["DetectedAttribute","A generic detected attribute represented by name in string format."],["DetectedLandmark","A generic detected landmark represented by name in string format and a 2D location."],["Entity","Detected entity from video analysis."],["ExplicitContentAnnotation","Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame."],["ExplicitContentDetectionConfig","Config for EXPLICIT_CONTENT_DETECTION."],["ExplicitContentFrame","Video frame level annotation results for explicit content."],["FaceDetectionAnnotation","Face detection annotation."],["FaceDetectionConfig","Config for FACE_DETECTION."],["LabelAnnotation","Label annotation."],["LabelDetectionConfig","Config for LABEL_DETECTION."],["LabelFrame","Video frame level annotation results for label detection."],["LabelSegment","Video segment level annotation results for label detection."],["LogoRecognitionAnnotation","Annotation corresponding to one detected, tracked and recognized logo class."],["NormalizedBoundingBox","Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]."],["NormalizedBoundingPoly","Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like:         0----1         |    |         3----2"],["NormalizedVertex","A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1."],["ObjectTrackingAnnotation","Annotations corresponding to one tracked object."],["ObjectTrackingConfig","Config for OBJECT_TRACKING."],["ObjectTrackingFrame","Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence."],["PersonDetectionAnnotation","Person detection annotation per video."],["PersonDetectionConfig","Config for PERSON_DETECTION."],["ShotChangeDetectionConfig","Config for SHOT_CHANGE_DETECTION."],["SpeechContext","Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results."],["SpeechRecognitionAlternative","Alternative hypotheses (a.k.a. n-best list)."],["SpeechTranscription","A speech recognition result corresponding to a portion of the audio."],["SpeechTranscriptionConfig","Config for SPEECH_TRANSCRIPTION."],["StreamingAnnotateVideoRequest","The top-level message sent by the client for the `StreamingAnnotateVideo` method. Multiple `StreamingAnnotateVideoRequest` messages are sent. The first message must only contain a `StreamingVideoConfig` message. All subsequent messages must only contain `input_content` data."],["StreamingAnnotateVideoResponse","`StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client."],["StreamingAutomlActionRecognitionConfig","Config for STREAMING_AUTOML_ACTION_RECOGNITION."],["StreamingAutomlClassificationConfig","Config for STREAMING_AUTOML_CLASSIFICATION."],["StreamingAutomlObjectTrackingConfig","Config for STREAMING_AUTOML_OBJECT_TRACKING."],["StreamingExplicitContentDetectionConfig","Config for STREAMING_EXPLICIT_CONTENT_DETECTION."],["StreamingLabelDetectionConfig","Config for STREAMING_LABEL_DETECTION."],["StreamingObjectTrackingConfig","Config for STREAMING_OBJECT_TRACKING."],["StreamingShotChangeDetectionConfig","Config for STREAMING_SHOT_CHANGE_DETECTION."],["StreamingStorageConfig","Config for streaming storage option."],["StreamingVideoAnnotationResults","Streaming annotation results corresponding to a portion of the video that is currently being processed."],["StreamingVideoConfig","Provides information to the annotator that specifies how to process the request."],["TextAnnotation","Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection."],["TextDetectionConfig","Config for TEXT_DETECTION."],["TextFrame","Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets."],["TextSegment","Video segment level annotation results for text detection."],["TimestampedObject","For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box."],["Track","A track of an object instance."],["VideoAnnotationProgress","Annotation progress for a single video."],["VideoAnnotationResults","Annotation results for a single video."],["VideoContext","Video context and/or feature-specific parameters."],["VideoSegment","Video segment."],["WordInfo","Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`."]]});