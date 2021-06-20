
pub mod ccc {
    pub mod hosted {
        pub mod marketplace {
            pub mod v2 {
                tonic::include_proto!("ccc.hosted.marketplace.v2");
            }
        }
    }
}
pub mod google {
    pub mod actions {
        pub mod r#type {
            tonic::include_proto!("google.actions.r#type");
        }
        pub mod sdk {
            pub mod v2 {
                pub mod conversation {
                    tonic::include_proto!("google.actions.sdk.v2.conversation");
                }
                pub mod interactionmodel {
                    pub mod prompt {
                        tonic::include_proto!("google.actions.sdk.v2.interactionmodel.prompt");
                    }
                    pub mod r#type {
                        tonic::include_proto!("google.actions.sdk.v2.interactionmodel.r#type");
                    }
                    tonic::include_proto!("google.actions.sdk.v2.interactionmodel");
                }
                tonic::include_proto!("google.actions.sdk.v2");
            }
        }
    }
    pub mod ads {
        pub mod admob {
            pub mod v1 {
                tonic::include_proto!("google.ads.admob.v1");
            }
        }
        pub mod googleads {
            pub mod v4 {
                pub mod common {
                    tonic::include_proto!("google.ads.googleads.v4.common");
                }
                pub mod enums {
                    tonic::include_proto!("google.ads.googleads.v4.enums");
                }
                pub mod errors {
                    tonic::include_proto!("google.ads.googleads.v4.errors");
                }
                pub mod resources {
                    tonic::include_proto!("google.ads.googleads.v4.resources");
                }
                pub mod services {
                    tonic::include_proto!("google.ads.googleads.v4.services");
                }
            }
            pub mod v5 {
                pub mod common {
                    tonic::include_proto!("google.ads.googleads.v5.common");
                }
                pub mod enums {
                    tonic::include_proto!("google.ads.googleads.v5.enums");
                }
                pub mod errors {
                    tonic::include_proto!("google.ads.googleads.v5.errors");
                }
                pub mod resources {
                    tonic::include_proto!("google.ads.googleads.v5.resources");
                }
                pub mod services {
                    tonic::include_proto!("google.ads.googleads.v5.services");
                }
            }
            pub mod v6 {
                pub mod common {
                    tonic::include_proto!("google.ads.googleads.v6.common");
                }
                pub mod enums {
                    tonic::include_proto!("google.ads.googleads.v6.enums");
                }
                pub mod errors {
                    tonic::include_proto!("google.ads.googleads.v6.errors");
                }
                pub mod resources {
                    tonic::include_proto!("google.ads.googleads.v6.resources");
                }
                pub mod services {
                    tonic::include_proto!("google.ads.googleads.v6.services");
                }
            }
            pub mod v7 {
                pub mod common {
                    tonic::include_proto!("google.ads.googleads.v7.common");
                }
                pub mod enums {
                    tonic::include_proto!("google.ads.googleads.v7.enums");
                }
                pub mod errors {
                    tonic::include_proto!("google.ads.googleads.v7.errors");
                }
                pub mod resources {
                    tonic::include_proto!("google.ads.googleads.v7.resources");
                }
                pub mod services {
                    tonic::include_proto!("google.ads.googleads.v7.services");
                }
            }
            pub mod v8 {
                pub mod common {
                    tonic::include_proto!("google.ads.googleads.v8.common");
                }
                pub mod enums {
                    tonic::include_proto!("google.ads.googleads.v8.enums");
                }
                pub mod errors {
                    tonic::include_proto!("google.ads.googleads.v8.errors");
                }
                pub mod resources {
                    tonic::include_proto!("google.ads.googleads.v8.resources");
                }
                pub mod services {
                    tonic::include_proto!("google.ads.googleads.v8.services");
                }
            }
        }
    }
    pub mod analytics {
        pub mod admin {
            pub mod v1alpha {
                tonic::include_proto!("google.analytics.admin.v1alpha");
            }
        }
        pub mod data {
            pub mod v1alpha {
                tonic::include_proto!("google.analytics.data.v1alpha");
            }
            pub mod v1beta {
                tonic::include_proto!("google.analytics.data.v1beta");
            }
        }
    }
    pub mod api {
        pub mod expr {
            pub mod v1alpha1 {
                tonic::include_proto!("google.api.expr.v1alpha1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.api.expr.v1beta1");
            }
        }
        pub mod servicecontrol {
            pub mod v1 {
                tonic::include_proto!("google.api.servicecontrol.v1");
            }
        }
        pub mod servicemanagement {
            pub mod v1 {
                tonic::include_proto!("google.api.servicemanagement.v1");
            }
        }
        pub mod serviceusage {
            pub mod v1 {
                tonic::include_proto!("google.api.serviceusage.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.api.serviceusage.v1beta1");
            }
        }
        tonic::include_proto!("google.api");
    }
    pub mod appengine {
        pub mod legacy {
            tonic::include_proto!("google.appengine.legacy");
        }
        pub mod logging {
            pub mod v1 {
                tonic::include_proto!("google.appengine.logging.v1");
            }
        }
        pub mod v1 {
            tonic::include_proto!("google.appengine.v1");
        }
        pub mod v1beta {
            tonic::include_proto!("google.appengine.v1beta");
        }
    }
    pub mod apps {
        pub mod alertcenter {
            pub mod v1beta1 {
                tonic::include_proto!("google.apps.alertcenter.v1beta1");
            }
        }
        pub mod drive {
            pub mod activity {
                pub mod v2 {
                    tonic::include_proto!("google.apps.drive.activity.v2");
                }
            }
        }
        pub mod script {
            pub mod r#type {
                pub mod calendar {
                    tonic::include_proto!("google.apps.script.r#type.calendar");
                }
                pub mod docs {
                    tonic::include_proto!("google.apps.script.r#type.docs");
                }
                pub mod drive {
                    tonic::include_proto!("google.apps.script.r#type.drive");
                }
                pub mod gmail {
                    tonic::include_proto!("google.apps.script.r#type.gmail");
                }
                pub mod sheets {
                    tonic::include_proto!("google.apps.script.r#type.sheets");
                }
                pub mod slides {
                    tonic::include_proto!("google.apps.script.r#type.slides");
                }
                tonic::include_proto!("google.apps.script.r#type");
            }
        }
    }
    pub mod area120 {
        pub mod tables {
            pub mod v1alpha1 {
                tonic::include_proto!("google.area120.tables.v1alpha1");
            }
        }
    }
    pub mod assistant {
        pub mod embedded {
            pub mod v1alpha1 {
                tonic::include_proto!("google.assistant.embedded.v1alpha1");
            }
            pub mod v1alpha2 {
                tonic::include_proto!("google.assistant.embedded.v1alpha2");
            }
        }
    }
    pub mod bigtable {
        pub mod admin {
            pub mod v2 {
                tonic::include_proto!("google.bigtable.admin.v2");
            }
        }
        pub mod v2 {
            tonic::include_proto!("google.bigtable.v2");
        }
    }
    pub mod bytestream {
        tonic::include_proto!("google.bytestream");
    }
    pub mod chromeos {
        pub mod moblab {
            pub mod v1beta1 {
                tonic::include_proto!("google.chromeos.moblab.v1beta1");
            }
        }
    }
    pub mod cloud {
        pub mod accessapproval {
            pub mod v1 {
                tonic::include_proto!("google.cloud.accessapproval.v1");
            }
        }
        pub mod aiplatform {
            pub mod logging {
                tonic::include_proto!("google.cloud.aiplatform.logging");
            }
            pub mod v1 {
                pub mod schema {
                    pub mod predict {
                        pub mod instance {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1.schema.predict.instance"
                            );
                        }
                        pub mod params {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1.schema.predict.params"
                            );
                        }
                        pub mod prediction {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1.schema.predict.prediction"
                            );
                        }
                    }
                    pub mod trainingjob {
                        pub mod definition {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1.schema.trainingjob.definition"
                            );
                        }
                    }
                }
                tonic::include_proto!("google.cloud.aiplatform.v1");
            }
            pub mod v1beta1 {
                pub mod schema {
                    pub mod predict {
                        pub mod instance {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1beta1.schema.predict.instance"
                            );
                        }
                        pub mod params {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1beta1.schema.predict.params"
                            );
                        }
                        pub mod prediction {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1beta1.schema.predict.prediction"
                            );
                        }
                    }
                    pub mod trainingjob {
                        pub mod definition {
                            tonic::include_proto!(
                                "google.cloud.aiplatform.v1beta1.schema.trainingjob.definition"
                            );
                        }
                    }
                    tonic::include_proto!("google.cloud.aiplatform.v1beta1.schema");
                }
                tonic::include_proto!("google.cloud.aiplatform.v1beta1");
            }
        }
        pub mod apigateway {
            pub mod v1 {
                tonic::include_proto!("google.cloud.apigateway.v1");
            }
        }
        pub mod apigeeconnect {
            pub mod v1 {
                tonic::include_proto!("google.cloud.apigeeconnect.v1");
            }
        }
        pub mod asset {
            pub mod v1 {
                tonic::include_proto!("google.cloud.asset.v1");
            }
            pub mod v1p1beta1 {
                tonic::include_proto!("google.cloud.asset.v1p1beta1");
            }
            pub mod v1p2beta1 {
                tonic::include_proto!("google.cloud.asset.v1p2beta1");
            }
            pub mod v1p4beta1 {
                tonic::include_proto!("google.cloud.asset.v1p4beta1");
            }
            pub mod v1p5beta1 {
                tonic::include_proto!("google.cloud.asset.v1p5beta1");
            }
            pub mod v1p7beta1 {
                tonic::include_proto!("google.cloud.asset.v1p7beta1");
            }
        }
        pub mod assuredworkloads {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.assuredworkloads.v1beta1");
            }
        }
        pub mod audit {
            tonic::include_proto!("google.cloud.audit");
        }
        pub mod automl {
            pub mod v1 {
                tonic::include_proto!("google.cloud.automl.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.automl.v1beta1");
            }
        }
        pub mod bigquery {
            pub mod connection {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.bigquery.connection.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.bigquery.connection.v1beta1");
                }
            }
            pub mod datatransfer {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.bigquery.datatransfer.v1");
                }
            }
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.bigquery.logging.v1");
                }
            }
            pub mod migration {
                pub mod v2alpha {
                    tonic::include_proto!("google.cloud.bigquery.migration.v2alpha");
                }
            }
            pub mod reservation {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.bigquery.reservation.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.bigquery.reservation.v1beta1");
                }
            }
            pub mod storage {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.bigquery.storage.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.bigquery.storage.v1beta1");
                }
                pub mod v1beta2 {
                    tonic::include_proto!("google.cloud.bigquery.storage.v1beta2");
                }
            }
            pub mod v2 {
                tonic::include_proto!("google.cloud.bigquery.v2");
            }
        }
        pub mod billing {
            pub mod budgets {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.billing.budgets.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.billing.budgets.v1beta1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.billing.v1");
            }
        }
        pub mod binaryauthorization {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.binaryauthorization.v1beta1");
            }
        }
        pub mod channel {
            pub mod v1 {
                tonic::include_proto!("google.cloud.channel.v1");
            }
        }
        pub mod clouddms {
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.clouddms.logging.v1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.clouddms.v1");
            }
        }
        pub mod common {
            tonic::include_proto!("google.cloud.common");
        }
        pub mod contactcenterinsights {
            pub mod v1 {
                tonic::include_proto!("google.cloud.contactcenterinsights.v1");
            }
        }
        pub mod datacatalog {
            pub mod v1 {
                tonic::include_proto!("google.cloud.datacatalog.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.datacatalog.v1beta1");
            }
        }
        pub mod datalabeling {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.datalabeling.v1beta1");
            }
        }
        pub mod dataproc {
            pub mod logging {
                tonic::include_proto!("google.cloud.dataproc.logging");
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.dataproc.v1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.cloud.dataproc.v1beta2");
            }
        }
        pub mod dataqna {
            pub mod v1alpha {
                tonic::include_proto!("google.cloud.dataqna.v1alpha");
            }
        }
        pub mod datastream {
            pub mod v1alpha1 {
                tonic::include_proto!("google.cloud.datastream.v1alpha1");
            }
        }
        pub mod dialogflow {
            pub mod cx {
                pub mod v3 {
                    tonic::include_proto!("google.cloud.dialogflow.cx.v3");
                }
                pub mod v3beta1 {
                    tonic::include_proto!("google.cloud.dialogflow.cx.v3beta1");
                }
            }
            pub mod v2 {
                tonic::include_proto!("google.cloud.dialogflow.v2");
            }
            pub mod v2beta1 {
                tonic::include_proto!("google.cloud.dialogflow.v2beta1");
            }
        }
        pub mod documentai {
            pub mod v1 {
                tonic::include_proto!("google.cloud.documentai.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.documentai.v1beta1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.cloud.documentai.v1beta2");
            }
            pub mod v1beta3 {
                tonic::include_proto!("google.cloud.documentai.v1beta3");
            }
        }
        pub mod domains {
            pub mod v1alpha2 {
                tonic::include_proto!("google.cloud.domains.v1alpha2");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.domains.v1beta1");
            }
        }
        pub mod essentialcontacts {
            pub mod v1 {
                tonic::include_proto!("google.cloud.essentialcontacts.v1");
            }
        }
        pub mod eventarc {
            pub mod v1 {
                tonic::include_proto!("google.cloud.eventarc.v1");
            }
        }
        pub mod functions {
            pub mod v1 {
                tonic::include_proto!("google.cloud.functions.v1");
            }
        }
        pub mod gaming {
            pub mod v1 {
                tonic::include_proto!("google.cloud.gaming.v1");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.gaming.v1beta");
            }
        }
        pub mod gkeconnect {
            pub mod gateway {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.gkeconnect.gateway.v1");
                }
                pub mod v1alpha1 {
                    tonic::include_proto!("google.cloud.gkeconnect.gateway.v1alpha1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.gkeconnect.gateway.v1beta1");
                }
            }
        }
        pub mod gkehub {
            pub mod v1alpha2 {
                tonic::include_proto!("google.cloud.gkehub.v1alpha2");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.gkehub.v1beta1");
            }
        }
        pub mod gsuiteaddons {
            pub mod v1 {
                tonic::include_proto!("google.cloud.gsuiteaddons.v1");
            }
        }
        pub mod iot {
            pub mod v1 {
                tonic::include_proto!("google.cloud.iot.v1");
            }
        }
        pub mod kms {
            pub mod v1 {
                tonic::include_proto!("google.cloud.kms.v1");
            }
        }
        pub mod language {
            pub mod v1 {
                tonic::include_proto!("google.cloud.language.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.language.v1beta1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.cloud.language.v1beta2");
            }
        }
        pub mod lifesciences {
            pub mod v2beta {
                tonic::include_proto!("google.cloud.lifesciences.v2beta");
            }
        }
        pub mod location {
            tonic::include_proto!("google.cloud.location");
        }
        pub mod managedidentities {
            pub mod v1 {
                tonic::include_proto!("google.cloud.managedidentities.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.managedidentities.v1beta1");
            }
        }
        pub mod mediatranslation {
            pub mod v1alpha1 {
                tonic::include_proto!("google.cloud.mediatranslation.v1alpha1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.mediatranslation.v1beta1");
            }
        }
        pub mod memcache {
            pub mod v1 {
                tonic::include_proto!("google.cloud.memcache.v1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.cloud.memcache.v1beta2");
            }
        }
        pub mod metastore {
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.metastore.logging.v1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.metastore.v1");
            }
            pub mod v1alpha {
                tonic::include_proto!("google.cloud.metastore.v1alpha");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.metastore.v1beta");
            }
        }
        pub mod ml {
            pub mod v1 {
                tonic::include_proto!("google.cloud.ml.v1");
            }
        }
        pub mod networkconnectivity {
            pub mod v1alpha1 {
                tonic::include_proto!("google.cloud.networkconnectivity.v1alpha1");
            }
        }
        pub mod notebooks {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.notebooks.v1beta1");
            }
        }
        pub mod ondemandscanning {
            pub mod v1 {
                tonic::include_proto!("google.cloud.ondemandscanning.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.ondemandscanning.v1beta1");
            }
        }
        pub mod orgpolicy {
            pub mod v1 {
                tonic::include_proto!("google.cloud.orgpolicy.v1");
            }
            pub mod v2 {
                tonic::include_proto!("google.cloud.orgpolicy.v2");
            }
        }
        pub mod osconfig {
            pub mod agentendpoint {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.osconfig.agentendpoint.v1");
                }
                pub mod v1beta {
                    tonic::include_proto!("google.cloud.osconfig.agentendpoint.v1beta");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.osconfig.v1");
            }
            pub mod v1alpha {
                tonic::include_proto!("google.cloud.osconfig.v1alpha");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.osconfig.v1beta");
            }
        }
        pub mod oslogin {
            pub mod common {
                tonic::include_proto!("google.cloud.oslogin.common");
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.oslogin.v1");
            }
            pub mod v1alpha {
                tonic::include_proto!("google.cloud.oslogin.v1alpha");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.oslogin.v1beta");
            }
        }
        pub mod phishingprotection {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.phishingprotection.v1beta1");
            }
        }
        pub mod policytroubleshooter {
            pub mod v1 {
                tonic::include_proto!("google.cloud.policytroubleshooter.v1");
            }
        }
        pub mod privatecatalog {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.privatecatalog.v1beta1");
            }
        }
        pub mod pubsublite {
            pub mod v1 {
                tonic::include_proto!("google.cloud.pubsublite.v1");
            }
        }
        pub mod recaptchaenterprise {
            pub mod v1 {
                tonic::include_proto!("google.cloud.recaptchaenterprise.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.recaptchaenterprise.v1beta1");
            }
        }
        pub mod recommendationengine {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.recommendationengine.v1beta1");
            }
        }
        pub mod recommender {
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.recommender.logging.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.recommender.logging.v1beta1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.recommender.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.recommender.v1beta1");
            }
        }
        pub mod redis {
            pub mod v1 {
                tonic::include_proto!("google.cloud.redis.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.redis.v1beta1");
            }
        }
        pub mod resourcemanager {
            pub mod v2 {
                tonic::include_proto!("google.cloud.resourcemanager.v2");
            }
            pub mod v3 {
                tonic::include_proto!("google.cloud.resourcemanager.v3");
            }
        }
        pub mod resourcesettings {
            pub mod v1 {
                tonic::include_proto!("google.cloud.resourcesettings.v1");
            }
        }
        pub mod retail {
            pub mod v2 {
                tonic::include_proto!("google.cloud.retail.v2");
            }
            pub mod v2alpha {
                tonic::include_proto!("google.cloud.retail.v2alpha");
            }
            pub mod v2beta {
                tonic::include_proto!("google.cloud.retail.v2beta");
            }
        }
        pub mod runtimeconfig {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.runtimeconfig.v1beta1");
            }
        }
        pub mod saasaccelerator {
            pub mod management {
                pub mod logs {
                    pub mod v1 {
                        tonic::include_proto!("google.cloud.saasaccelerator.management.logs.v1");
                    }
                }
            }
        }
        pub mod scheduler {
            pub mod v1 {
                tonic::include_proto!("google.cloud.scheduler.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.scheduler.v1beta1");
            }
        }
        pub mod secretmanager {
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.secretmanager.logging.v1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.secretmanager.v1");
            }
        }
        pub mod secrets {
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.secrets.v1beta1");
            }
        }
        pub mod security {
            pub mod privateca {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.security.privateca.v1");
                }
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.security.privateca.v1beta1");
                }
            }
        }
        pub mod securitycenter {
            pub mod settings {
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.securitycenter.settings.v1beta1");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.securitycenter.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.securitycenter.v1beta1");
            }
            pub mod v1p1beta1 {
                tonic::include_proto!("google.cloud.securitycenter.v1p1beta1");
            }
        }
        pub mod servicedirectory {
            pub mod v1 {
                tonic::include_proto!("google.cloud.servicedirectory.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.servicedirectory.v1beta1");
            }
        }
        pub mod shell {
            pub mod v1 {
                tonic::include_proto!("google.cloud.shell.v1");
            }
        }
        pub mod speech {
            pub mod v1 {
                tonic::include_proto!("google.cloud.speech.v1");
            }
            pub mod v1p1beta1 {
                tonic::include_proto!("google.cloud.speech.v1p1beta1");
            }
        }
        pub mod sql {
            pub mod v1beta4 {
                tonic::include_proto!("google.cloud.sql.v1beta4");
            }
        }
        pub mod support {
            pub mod common {
                tonic::include_proto!("google.cloud.support.common");
            }
            pub mod v1alpha1 {
                tonic::include_proto!("google.cloud.support.v1alpha1");
            }
        }
        pub mod talent {
            pub mod v4 {
                tonic::include_proto!("google.cloud.talent.v4");
            }
            pub mod v4beta1 {
                tonic::include_proto!("google.cloud.talent.v4beta1");
            }
        }
        pub mod tasks {
            pub mod v2 {
                tonic::include_proto!("google.cloud.tasks.v2");
            }
            pub mod v2beta2 {
                tonic::include_proto!("google.cloud.tasks.v2beta2");
            }
            pub mod v2beta3 {
                tonic::include_proto!("google.cloud.tasks.v2beta3");
            }
        }
        pub mod texttospeech {
            pub mod v1 {
                tonic::include_proto!("google.cloud.texttospeech.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.texttospeech.v1beta1");
            }
        }
        pub mod tpu {
            pub mod v1 {
                tonic::include_proto!("google.cloud.tpu.v1");
            }
        }
        pub mod translation {
            pub mod v3 {
                tonic::include_proto!("google.cloud.translation.v3");
            }
            pub mod v3beta1 {
                tonic::include_proto!("google.cloud.translation.v3beta1");
            }
        }
        pub mod video {
            pub mod transcoder {
                pub mod v1beta1 {
                    tonic::include_proto!("google.cloud.video.transcoder.v1beta1");
                }
            }
        }
        pub mod videointelligence {
            pub mod v1 {
                tonic::include_proto!("google.cloud.videointelligence.v1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.cloud.videointelligence.v1beta2");
            }
            pub mod v1p1beta1 {
                tonic::include_proto!("google.cloud.videointelligence.v1p1beta1");
            }
            pub mod v1p2beta1 {
                tonic::include_proto!("google.cloud.videointelligence.v1p2beta1");
            }
            pub mod v1p3beta1 {
                tonic::include_proto!("google.cloud.videointelligence.v1p3beta1");
            }
        }
        pub mod vision {
            pub mod v1 {
                tonic::include_proto!("google.cloud.vision.v1");
            }
            pub mod v1p1beta1 {
                tonic::include_proto!("google.cloud.vision.v1p1beta1");
            }
            pub mod v1p2beta1 {
                tonic::include_proto!("google.cloud.vision.v1p2beta1");
            }
            pub mod v1p3beta1 {
                tonic::include_proto!("google.cloud.vision.v1p3beta1");
            }
            pub mod v1p4beta1 {
                tonic::include_proto!("google.cloud.vision.v1p4beta1");
            }
        }
        pub mod vpcaccess {
            pub mod v1 {
                tonic::include_proto!("google.cloud.vpcaccess.v1");
            }
        }
        pub mod webrisk {
            pub mod v1 {
                tonic::include_proto!("google.cloud.webrisk.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.cloud.webrisk.v1beta1");
            }
        }
        pub mod websecurityscanner {
            pub mod v1 {
                tonic::include_proto!("google.cloud.websecurityscanner.v1");
            }
            pub mod v1alpha {
                tonic::include_proto!("google.cloud.websecurityscanner.v1alpha");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.websecurityscanner.v1beta");
            }
        }
        pub mod workflows {
            pub mod executions {
                pub mod v1 {
                    tonic::include_proto!("google.cloud.workflows.executions.v1");
                }
                pub mod v1beta {
                    tonic::include_proto!("google.cloud.workflows.executions.v1beta");
                }
            }
            pub mod v1 {
                tonic::include_proto!("google.cloud.workflows.v1");
            }
            pub mod v1beta {
                tonic::include_proto!("google.cloud.workflows.v1beta");
            }
        }
        tonic::include_proto!("google.cloud");
    }
    pub mod container {
        pub mod v1 {
            tonic::include_proto!("google.container.v1");
        }
        pub mod v1alpha1 {
            tonic::include_proto!("google.container.v1alpha1");
        }
        pub mod v1beta1 {
            tonic::include_proto!("google.container.v1beta1");
        }
    }
    pub mod datastore {
        pub mod admin {
            pub mod v1 {
                tonic::include_proto!("google.datastore.admin.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.datastore.admin.v1beta1");
            }
        }
        pub mod v1 {
            tonic::include_proto!("google.datastore.v1");
        }
        pub mod v1beta3 {
            tonic::include_proto!("google.datastore.v1beta3");
        }
    }
    pub mod devtools {
        pub mod artifactregistry {
            pub mod v1beta2 {
                tonic::include_proto!("google.devtools.artifactregistry.v1beta2");
            }
        }
        pub mod build {
            pub mod v1 {
                tonic::include_proto!("google.devtools.build.v1");
            }
        }
        pub mod cloudbuild {
            pub mod v1 {
                tonic::include_proto!("google.devtools.cloudbuild.v1");
            }
        }
        pub mod clouddebugger {
            pub mod v2 {
                tonic::include_proto!("google.devtools.clouddebugger.v2");
            }
        }
        pub mod clouderrorreporting {
            pub mod v1beta1 {
                tonic::include_proto!("google.devtools.clouderrorreporting.v1beta1");
            }
        }
        pub mod cloudprofiler {
            pub mod v2 {
                tonic::include_proto!("google.devtools.cloudprofiler.v2");
            }
        }
        pub mod cloudtrace {
            pub mod v1 {
                tonic::include_proto!("google.devtools.cloudtrace.v1");
            }
            pub mod v2 {
                tonic::include_proto!("google.devtools.cloudtrace.v2");
            }
        }
        pub mod containeranalysis {
            pub mod v1 {
                tonic::include_proto!("google.devtools.containeranalysis.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.devtools.containeranalysis.v1beta1");
            }
        }
        pub mod remoteworkers {
            pub mod v1test2 {
                tonic::include_proto!("google.devtools.remoteworkers.v1test2");
            }
        }
        pub mod resultstore {
            pub mod v2 {
                tonic::include_proto!("google.devtools.resultstore.v2");
            }
        }
        pub mod source {
            pub mod v1 {
                tonic::include_proto!("google.devtools.source.v1");
            }
        }
        pub mod sourcerepo {
            pub mod v1 {
                tonic::include_proto!("google.devtools.sourcerepo.v1");
            }
        }
        pub mod testing {
            pub mod v1 {
                tonic::include_proto!("google.devtools.testing.v1");
            }
        }
    }
    pub mod example {
        pub mod endpointsapis {
            pub mod v1 {
                tonic::include_proto!("google.example.endpointsapis.v1");
            }
        }
        pub mod library {
            pub mod v1 {
                tonic::include_proto!("google.example.library.v1");
            }
        }
    }
    pub mod firestore {
        pub mod admin {
            pub mod v1 {
                tonic::include_proto!("google.firestore.admin.v1");
            }
            pub mod v1beta1 {
                tonic::include_proto!("google.firestore.admin.v1beta1");
            }
            pub mod v1beta2 {
                tonic::include_proto!("google.firestore.admin.v1beta2");
            }
        }
        pub mod bundle {
            tonic::include_proto!("google.firestore.bundle");
        }
        pub mod v1 {
            tonic::include_proto!("google.firestore.v1");
        }
        pub mod v1beta1 {
            tonic::include_proto!("google.firestore.v1beta1");
        }
    }
    pub mod genomics {
        pub mod v1 {
            tonic::include_proto!("google.genomics.v1");
        }
        pub mod v1alpha2 {
            tonic::include_proto!("google.genomics.v1alpha2");
        }
    }
    pub mod geo {
        pub mod r#type {
            tonic::include_proto!("google.geo.r#type");
        }
    }
    pub mod home {
        pub mod enterprise {
            pub mod sdm {
                pub mod v1 {
                    tonic::include_proto!("google.home.enterprise.sdm.v1");
                }
            }
        }
        pub mod graph {
            pub mod v1 {
                tonic::include_proto!("google.home.graph.v1");
            }
        }
    }
    pub mod iam {
        pub mod admin {
            pub mod v1 {
                tonic::include_proto!("google.iam.admin.v1");
            }
        }
        pub mod credentials {
            pub mod v1 {
                tonic::include_proto!("google.iam.credentials.v1");
            }
        }
        pub mod v1 {
            pub mod logging {
                tonic::include_proto!("google.iam.v1.logging");
            }
            tonic::include_proto!("google.iam.v1");
        }
        pub mod v1beta {
            tonic::include_proto!("google.iam.v1beta");
        }
    }
    pub mod identity {
        pub mod accesscontextmanager {
            pub mod r#type {
                tonic::include_proto!("google.identity.accesscontextmanager.r#type");
            }
            pub mod v1 {
                tonic::include_proto!("google.identity.accesscontextmanager.v1");
            }
        }
    }
    pub mod logging {
        pub mod r#type {
            tonic::include_proto!("google.logging.r#type");
        }
        pub mod v2 {
            tonic::include_proto!("google.logging.v2");
        }
    }
    pub mod longrunning {
        tonic::include_proto!("google.longrunning");
    }
    pub mod maps {
        pub mod playablelocations {
            pub mod v3 {
                pub mod sample {
                    tonic::include_proto!("google.maps.playablelocations.v3.sample");
                }
                tonic::include_proto!("google.maps.playablelocations.v3");
            }
        }
        pub mod roads {
            pub mod v1op {
                tonic::include_proto!("google.maps.roads.v1op");
            }
        }
        pub mod routes {
            pub mod v1 {
                tonic::include_proto!("google.maps.routes.v1");
            }
            pub mod v1alpha {
                tonic::include_proto!("google.maps.routes.v1alpha");
            }
        }
        pub mod unity {
            tonic::include_proto!("google.maps.unity");
        }
    }
    pub mod monitoring {
        pub mod dashboard {
            pub mod v1 {
                tonic::include_proto!("google.monitoring.dashboard.v1");
            }
        }
        pub mod v3 {
            tonic::include_proto!("google.monitoring.v3");
        }
    }
    pub mod partner {
        pub mod aistreams {
            pub mod v1alpha1 {
                tonic::include_proto!("google.partner.aistreams.v1alpha1");
            }
        }
    }
    pub mod privacy {
        pub mod dlp {
            pub mod v2 {
                tonic::include_proto!("google.privacy.dlp.v2");
            }
        }
    }
    pub mod pubsub {
        pub mod v1 {
            tonic::include_proto!("google.pubsub.v1");
        }
        pub mod v1beta2 {
            tonic::include_proto!("google.pubsub.v1beta2");
        }
    }
    pub mod r#type {
        tonic::include_proto!("google.r#type");
    }
    pub mod rpc {
        pub mod context {
            tonic::include_proto!("google.rpc.context");
        }
        tonic::include_proto!("google.rpc");
    }
    pub mod search {
        pub mod partnerdataingestion {
            pub mod logging {
                pub mod v1 {
                    tonic::include_proto!("google.search.partnerdataingestion.logging.v1");
                }
            }
        }
    }
    pub mod spanner {
        pub mod admin {
            pub mod database {
                pub mod v1 {
                    tonic::include_proto!("google.spanner.admin.database.v1");
                }
            }
            pub mod instance {
                pub mod v1 {
                    tonic::include_proto!("google.spanner.admin.instance.v1");
                }
            }
        }
        pub mod v1 {
            tonic::include_proto!("google.spanner.v1");
        }
    }
    pub mod storage {
        pub mod v1 {
            tonic::include_proto!("google.storage.v1");
        }
    }
    pub mod storagetransfer {
        pub mod v1 {
            tonic::include_proto!("google.storagetransfer.v1");
        }
    }
    pub mod streetview {
        pub mod publish {
            pub mod v1 {
                tonic::include_proto!("google.streetview.publish.v1");
            }
        }
    }
    pub mod watcher {
        pub mod v1 {
            tonic::include_proto!("google.watcher.v1");
        }
    }
}
pub mod grafeas {
    pub mod v1 {
        tonic::include_proto!("grafeas.v1");
    }
    pub mod v1beta1 {
        pub mod attestation {
            tonic::include_proto!("grafeas.v1beta1.attestation");
        }
        pub mod build {
            tonic::include_proto!("grafeas.v1beta1.build");
        }
        pub mod deployment {
            tonic::include_proto!("grafeas.v1beta1.deployment");
        }
        pub mod discovery {
            tonic::include_proto!("grafeas.v1beta1.discovery");
        }
        pub mod image {
            tonic::include_proto!("grafeas.v1beta1.image");
        }
        pub mod package {
            tonic::include_proto!("grafeas.v1beta1.package");
        }
        pub mod provenance {
            tonic::include_proto!("grafeas.v1beta1.provenance");
        }
        pub mod source {
            tonic::include_proto!("grafeas.v1beta1.source");
        }
        pub mod vulnerability {
            tonic::include_proto!("grafeas.v1beta1.vulnerability");
        }
        tonic::include_proto!("grafeas.v1beta1");
    }
}
pub mod maps {
    pub mod fleetengine {
        pub mod v1 {
            tonic::include_proto!("maps.fleetengine.v1");
        }
    }
}
