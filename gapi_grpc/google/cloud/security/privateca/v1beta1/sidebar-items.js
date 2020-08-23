initSidebarItems({"enum":[["RevocationReason","A [RevocationReason][google.cloud.security.privateca.v1beta1.RevocationReason] indicates whether a [Certificate][google.cloud.security.privateca.v1beta1.Certificate] has been revoked, and the reason for revocation. These are standard revocation reasons from RFC 5280."]],"mod":[["certificate",""],["certificate_authority",""],["certificate_authority_service_client","Generated client implementations."],["certificate_config",""],["certificate_description",""],["certificate_revocation_list",""],["key_usage",""],["public_key",""],["reusable_config_values",""],["reusable_config_wrapper",""]],"struct":[["ActivateCertificateAuthorityRequest","Request message for [CertificateAuthorityService.ActivateCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ActivateCertificateAuthority]."],["Certificate","A [Certificate][google.cloud.security.privateca.v1beta1.Certificate] corresponds to a signed X.509 certificate issued by a [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority]."],["CertificateAuthority","A [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority] represents an individual Certificate Authority. A [CertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthority] can be used to create [Certificates][google.cloud.security.privateca.v1beta1.Certificate]."],["CertificateConfig","A [CertificateConfig][google.cloud.security.privateca.v1beta1.CertificateConfig] describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1."],["CertificateDescription","A [CertificateDescription][google.cloud.security.privateca.v1beta1.CertificateDescription] describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509."],["CertificateRevocationList","A [CertificateRevocationList][google.cloud.security.privateca.v1beta1.CertificateRevocationList] corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted."],["CreateCertificateAuthorityRequest","Request message for [CertificateAuthorityService.CreateCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificateAuthority]."],["CreateCertificateRequest","Request message for [CertificateAuthorityService.CreateCertificate][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificate]."],["CreateCertificateRevocationListRequest","Request message for [CertificateAuthorityService.CreateCertificateRevocationList][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateCertificateRevocationList]."],["CreateReusableConfigRequest","Request message for [CertificateAuthorityService.CreateReusableConfig][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.CreateReusableConfig]."],["DisableCertificateAuthorityRequest","Request message for [CertificateAuthorityService.DisableCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.DisableCertificateAuthority]."],["EnableCertificateAuthorityRequest","Request message for [CertificateAuthorityService.EnableCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.EnableCertificateAuthority]."],["GetCertificateAuthorityCsrRequest","Request message for [CertificateAuthorityService.GetCertificateAuthorityCsr][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateAuthorityCsr]."],["GetCertificateAuthorityCsrResponse","Response message for [CertificateAuthorityService.GetCertificateAuthorityCsr][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateAuthorityCsr]."],["GetCertificateAuthorityRequest","Request message for [CertificateAuthorityService.GetCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateAuthority]."],["GetCertificateRequest","Request message for [CertificateAuthorityService.GetCertificate][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificate]."],["GetCertificateRevocationListRequest","Request message for [CertificateAuthorityService.GetCertificateRevocationList][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetCertificateRevocationList]."],["GetReusableConfigRequest","Request message for [CertificateAuthorityService.GetReusableConfig][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.GetReusableConfig]."],["KeyUsage","A [KeyUsage][google.cloud.security.privateca.v1beta1.KeyUsage] describes key usage values that may appear in an X.509 certificate."],["ListCertificateAuthoritiesRequest","Request message for [CertificateAuthorityService.ListCertificateAuthorities][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateAuthorities]."],["ListCertificateAuthoritiesResponse","Response message for [CertificateAuthorityService.ListCertificateAuthorities][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateAuthorities]."],["ListCertificateRevocationListsRequest","Request message for [CertificateAuthorityService.ListCertificateRevocationLists][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateRevocationLists]."],["ListCertificateRevocationListsResponse","Response message for [CertificateAuthorityService.ListCertificateRevocationLists][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificateRevocationLists]."],["ListCertificatesRequest","Request message for [CertificateAuthorityService.ListCertificates][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificates]."],["ListCertificatesResponse","Response message for [CertificateAuthorityService.ListCertificates][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListCertificates]."],["ListReusableConfigsRequest","Request message for [CertificateAuthorityService.ListReusableConfigs][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListReusableConfigs]."],["ListReusableConfigsResponse","Response message for [CertificateAuthorityService.ListReusableConfigs][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ListReusableConfigs]."],["ObjectId","An [ObjectId][google.cloud.security.privateca.v1beta1.ObjectId] specifies an object identifier (OID). These provide context and describe types in ASN.1 messages."],["OperationMetadata","Represents the metadata of the long-running operation."],["PublicKey","A [PublicKey][google.cloud.security.privateca.v1beta1.PublicKey] describes a public key."],["RestoreCertificateAuthorityRequest","Request message for [CertificateAuthorityService.RestoreCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RestoreCertificateAuthority]."],["ReusableConfig","A [ReusableConfig][google.cloud.security.privateca.v1beta1.ReusableConfig] refers to a managed [ReusableConfigValues][google.cloud.security.privateca.v1beta1.ReusableConfigValues]. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions."],["ReusableConfigValues","A [ReusableConfigValues][google.cloud.security.privateca.v1beta1.ReusableConfigValues] is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions."],["ReusableConfigWrapper","A [ReusableConfigWrapper][google.cloud.security.privateca.v1beta1.ReusableConfigWrapper] describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values."],["RevokeCertificateRequest","Request message for [CertificateAuthorityService.RevokeCertificate][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.RevokeCertificate]."],["ScheduleDeleteCertificateAuthorityRequest","Request message for [CertificateAuthorityService.ScheduleDeleteCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.ScheduleDeleteCertificateAuthority]."],["Subject","[Subject][google.cloud.security.privateca.v1beta1.Subject] describes parts of a distinguished name that, in turn, describes the subject of the certificate."],["SubjectAltNames","[SubjectAltNames][google.cloud.security.privateca.v1beta1.SubjectAltNames] corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the \"common name\" in the distinguished name)."],["UpdateCertificateAuthorityRequest","Request message for [CertificateAuthorityService.UpdateCertificateAuthority][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateAuthority]."],["UpdateCertificateRequest","Request message for [CertificateAuthorityService.UpdateCertificate][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificate]."],["UpdateCertificateRevocationListRequest","Request message for [CertificateAuthorityService.UpdateCertificateRevocationList][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateCertificateRevocationList]."],["UpdateReusableConfigRequest","Request message for [CertificateAuthorityService.UpdateReusableConfig][google.cloud.security.privateca.v1beta1.CertificateAuthorityService.UpdateReusableConfig]."],["X509Extension","An [X509Extension][google.cloud.security.privateca.v1beta1.X509Extension] specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs."]]});