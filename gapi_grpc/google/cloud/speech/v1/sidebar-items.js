initSidebarItems({"mod":[["recognition_audio",""],["recognition_config",""],["recognition_metadata",""],["speech_client","Generated client implementations."],["streaming_recognize_request",""],["streaming_recognize_response",""]],"struct":[["LongRunningRecognizeMetadata","Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service."],["LongRunningRecognizeRequest","The top-level message sent by the client for the `LongRunningRecognize` method."],["LongRunningRecognizeResponse","The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service."],["RecognitionAudio","Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns [google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT]. See content limits."],["RecognitionConfig","Provides information to the recognizer that specifies how to process the request."],["RecognitionMetadata","Description of audio data to be recognized."],["RecognizeRequest","The top-level message sent by the client for the `Recognize` method."],["RecognizeResponse","The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages."],["SpeakerDiarizationConfig","Config to enable speaker diarization."],["SpeechContext","Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results."],["SpeechRecognitionAlternative","Alternative hypotheses (a.k.a. n-best list)."],["SpeechRecognitionResult","A speech recognition result corresponding to a portion of the audio."],["StreamingRecognitionConfig","Provides information to the recognizer that specifies how to process the request."],["StreamingRecognitionResult","A streaming speech recognition result corresponding to a portion of the audio that is currently being processed."],["StreamingRecognizeRequest","The top-level message sent by the client for the `StreamingRecognize` method. Multiple `StreamingRecognizeRequest` messages are sent. The first message must contain a `streaming_config` message and must not contain `audio_content`. All subsequent messages must contain `audio_content` and must not contain a `streaming_config` message."],["StreamingRecognizeResponse","`StreamingRecognizeResponse` is the only message returned to the client by `StreamingRecognize`. A series of zero or more `StreamingRecognizeResponse` messages are streamed back to the client. If there is no recognizable audio, and `single_utterance` is set to false, then no messages are streamed back to the client."],["WordInfo","Word-specific information for recognized words."]]});