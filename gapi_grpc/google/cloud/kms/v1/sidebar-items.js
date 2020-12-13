initSidebarItems({"enum":[["ProtectionLevel","[ProtectionLevel][google.cloud.kms.v1.ProtectionLevel] specifies how cryptographic operations are performed. For more information, see [Protection levels] (https://cloud.google.com/kms/docs/algorithms#protection_levels)."]],"mod":[["crypto_key",""],["crypto_key_version",""],["digest",""],["import_crypto_key_version_request",""],["import_job",""],["key_management_service_client","Generated client implementations."],["key_operation_attestation",""]],"struct":[["AsymmetricDecryptRequest","Request message for [KeyManagementService.AsymmetricDecrypt][google.cloud.kms.v1.KeyManagementService.AsymmetricDecrypt]."],["AsymmetricDecryptResponse","Response message for [KeyManagementService.AsymmetricDecrypt][google.cloud.kms.v1.KeyManagementService.AsymmetricDecrypt]."],["AsymmetricSignRequest","Request message for [KeyManagementService.AsymmetricSign][google.cloud.kms.v1.KeyManagementService.AsymmetricSign]."],["AsymmetricSignResponse","Response message for [KeyManagementService.AsymmetricSign][google.cloud.kms.v1.KeyManagementService.AsymmetricSign]."],["CreateCryptoKeyRequest","Request message for [KeyManagementService.CreateCryptoKey][google.cloud.kms.v1.KeyManagementService.CreateCryptoKey]."],["CreateCryptoKeyVersionRequest","Request message for [KeyManagementService.CreateCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.CreateCryptoKeyVersion]."],["CreateImportJobRequest","Request message for [KeyManagementService.CreateImportJob][google.cloud.kms.v1.KeyManagementService.CreateImportJob]."],["CreateKeyRingRequest","Request message for [KeyManagementService.CreateKeyRing][google.cloud.kms.v1.KeyManagementService.CreateKeyRing]."],["CryptoKey","A [CryptoKey][google.cloud.kms.v1.CryptoKey] represents a logical key that can be used for cryptographic operations."],["CryptoKeyVersion","A [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] represents an individual cryptographic key, and the associated key material."],["CryptoKeyVersionTemplate","A [CryptoKeyVersionTemplate][google.cloud.kms.v1.CryptoKeyVersionTemplate] specifies the properties to use when creating a new [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion], either manually with [CreateCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.CreateCryptoKeyVersion] or automatically as a result of auto-rotation."],["DecryptRequest","Request message for [KeyManagementService.Decrypt][google.cloud.kms.v1.KeyManagementService.Decrypt]."],["DecryptResponse","Response message for [KeyManagementService.Decrypt][google.cloud.kms.v1.KeyManagementService.Decrypt]."],["DestroyCryptoKeyVersionRequest","Request message for [KeyManagementService.DestroyCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.DestroyCryptoKeyVersion]."],["Digest","A [Digest][google.cloud.kms.v1.Digest] holds a cryptographic message digest."],["EncryptRequest","Request message for [KeyManagementService.Encrypt][google.cloud.kms.v1.KeyManagementService.Encrypt]."],["EncryptResponse","Response message for [KeyManagementService.Encrypt][google.cloud.kms.v1.KeyManagementService.Encrypt]."],["ExternalProtectionLevelOptions","ExternalProtectionLevelOptions stores a group of additional fields for configuring a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] that are specific to the [EXTERNAL][google.cloud.kms.v1.ProtectionLevel.EXTERNAL] protection level."],["GetCryptoKeyRequest","Request message for [KeyManagementService.GetCryptoKey][google.cloud.kms.v1.KeyManagementService.GetCryptoKey]."],["GetCryptoKeyVersionRequest","Request message for [KeyManagementService.GetCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.GetCryptoKeyVersion]."],["GetImportJobRequest","Request message for [KeyManagementService.GetImportJob][google.cloud.kms.v1.KeyManagementService.GetImportJob]."],["GetKeyRingRequest","Request message for [KeyManagementService.GetKeyRing][google.cloud.kms.v1.KeyManagementService.GetKeyRing]."],["GetPublicKeyRequest","Request message for [KeyManagementService.GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey]."],["ImportCryptoKeyVersionRequest","Request message for [KeyManagementService.ImportCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.ImportCryptoKeyVersion]."],["ImportJob","An [ImportJob][google.cloud.kms.v1.ImportJob] can be used to create [CryptoKeys][google.cloud.kms.v1.CryptoKey] and [CryptoKeyVersions][google.cloud.kms.v1.CryptoKeyVersion] using pre-existing key material, generated outside of Cloud KMS."],["KeyOperationAttestation","Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key)."],["KeyRing","A [KeyRing][google.cloud.kms.v1.KeyRing] is a toplevel logical grouping of [CryptoKeys][google.cloud.kms.v1.CryptoKey]."],["ListCryptoKeyVersionsRequest","Request message for [KeyManagementService.ListCryptoKeyVersions][google.cloud.kms.v1.KeyManagementService.ListCryptoKeyVersions]."],["ListCryptoKeyVersionsResponse","Response message for [KeyManagementService.ListCryptoKeyVersions][google.cloud.kms.v1.KeyManagementService.ListCryptoKeyVersions]."],["ListCryptoKeysRequest","Request message for [KeyManagementService.ListCryptoKeys][google.cloud.kms.v1.KeyManagementService.ListCryptoKeys]."],["ListCryptoKeysResponse","Response message for [KeyManagementService.ListCryptoKeys][google.cloud.kms.v1.KeyManagementService.ListCryptoKeys]."],["ListImportJobsRequest","Request message for [KeyManagementService.ListImportJobs][google.cloud.kms.v1.KeyManagementService.ListImportJobs]."],["ListImportJobsResponse","Response message for [KeyManagementService.ListImportJobs][google.cloud.kms.v1.KeyManagementService.ListImportJobs]."],["ListKeyRingsRequest","Request message for [KeyManagementService.ListKeyRings][google.cloud.kms.v1.KeyManagementService.ListKeyRings]."],["ListKeyRingsResponse","Response message for [KeyManagementService.ListKeyRings][google.cloud.kms.v1.KeyManagementService.ListKeyRings]."],["LocationMetadata","Cloud KMS metadata for the given [google.cloud.location.Location][google.cloud.location.Location]."],["PublicKey","The public key for a given [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion]. Obtained via [GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey]."],["RestoreCryptoKeyVersionRequest","Request message for [KeyManagementService.RestoreCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.RestoreCryptoKeyVersion]."],["UpdateCryptoKeyPrimaryVersionRequest","Request message for [KeyManagementService.UpdateCryptoKeyPrimaryVersion][google.cloud.kms.v1.KeyManagementService.UpdateCryptoKeyPrimaryVersion]."],["UpdateCryptoKeyRequest","Request message for [KeyManagementService.UpdateCryptoKey][google.cloud.kms.v1.KeyManagementService.UpdateCryptoKey]."],["UpdateCryptoKeyVersionRequest","Request message for [KeyManagementService.UpdateCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.UpdateCryptoKeyVersion]."]]});