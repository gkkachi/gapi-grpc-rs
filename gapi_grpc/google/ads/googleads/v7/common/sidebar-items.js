initSidebarItems({"mod":[["cpc_bid_simulation_point",""],["display_upload_ad_info",""],["image_ad_info",""],["lead_form_delivery_method",""],["lead_form_field",""],["listing_dimension_info",""],["operand",""],["policy_topic_constraint",""],["policy_topic_evidence",""],["promotion_asset",""],["promotion_feed_item",""],["rule_based_user_list_info",""],["target_cpa_simulation_point",""],["target_restriction_operation",""],["user_identifier",""],["user_list_action_info",""],["user_list_rule_item_info",""],["value",""],["video_ad_info",""]],"struct":[["AdAssetPolicySummary","Contains policy information for an asset inside an ad."],["AdImageAsset","An image asset used inside an ad."],["AdMediaBundleAsset","A media bundle asset used inside an ad."],["AdScheduleInfo","Represents an AdSchedule criterion."],["AdTextAsset","A text asset used inside an ad."],["AdVideoAsset","A video asset used inside an ad."],["AddressInfo","Address for proximity criterion."],["AffiliateLocationFeedItem","Represents an affiliate location extension."],["AgeRangeInfo","An age range criterion."],["AppAdInfo","An app ad."],["AppEngagementAdInfo","App engagement ads allow you to write text encouraging a specific action in the app, like checking in, making a purchase, or booking a flight. They allow you to send users to a specific part of your app where they can find what they’re looking for easier and faster."],["AppFeedItem","Represents an App extension."],["AppPaymentModelInfo","An app payment model criterion."],["BasicUserListInfo","User list targeting as a collection of conversions or remarketing actions."],["BidModifierSimulationPoint","Projected metrics for a specific bid modifier amount."],["BidModifierSimulationPointList","A container for simulation points for simulations of type BID_MODIFIER."],["BookOnGoogleAsset","A Book on Google asset. Used to redirect user to book through Google. Book on Google will change the redirect url to book directly through Google."],["BudgetCampaignAssociationStatus","A BudgetCampaignAssociationStatus segment."],["BudgetSimulationPoint","Projected metrics for a specific budget amount."],["BudgetSimulationPointList","A container for simulation points for simulations of type BUDGET."],["BusinessNameFilter","Represents a business name filter on locations in a FeedItemSet."],["CallFeedItem","Represents a Call extension."],["CallOnlyAdInfo","A call-only ad."],["CalloutAsset","A Callout asset."],["CalloutFeedItem","Represents a callout extension."],["CarrierInfo","Represents a Carrier Criterion."],["ClickLocation","Location criteria associated with a click."],["CombinedAudienceInfo","A combined audience criterion."],["CombinedRuleUserListInfo","User lists defined by combining two rules, left operand and right operand. There are two operators: AND where left operand and right operand have to be true; AND_NOT where left operand is true but right operand is false."],["Commission","Commission is an automatic bidding strategy in which the advertiser pays a certain portion of the conversion value."],["ConceptGroup","The concept group for the keyword concept."],["ContentLabelInfo","Content Label for category exclusion."],["CpcBidSimulationPoint","Projected metrics for a specific CPC bid amount."],["CpcBidSimulationPointList","A container for simulation points for simulations of type CPC_BID."],["CpvBidSimulationPoint","Projected metrics for a specific CPV bid amount."],["CpvBidSimulationPointList","A container for simulation points for simulations of type CPV_BID."],["CriterionCategoryAvailability","Information of category availability, per advertising channel."],["CriterionCategoryChannelAvailability","Information of advertising channel type and subtypes a category is available in."],["CriterionCategoryLocaleAvailability","Information about which locales a category is available in."],["CrmBasedUserListInfo","UserList of CRM users provided by the advertiser."],["CustomAffinityInfo","A custom affinity criterion. A criterion of this type is only targetable."],["CustomAudienceInfo","A custom audience criterion."],["CustomIntentInfo","A custom intent criterion. A criterion of this type is only targetable."],["CustomParameter","A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`."],["CustomerMatchUserListMetadata","Metadata for customer match user list."],["DateRange","A date range."],["DateSpecificRuleUserListInfo","Visitors of a page during specific dates."],["DeviceInfo","A device criterion."],["DisplayCallToAction","Data for display call to action. The call to action is a piece of the ad that prompts the user to do something. Like clicking a link or making a phone call."],["DisplayUploadAdInfo","A generic type of display ad. The exact ad format is controlled by the display_upload_product_type field, which determines what kinds of data need to be included with the ad."],["DynamicAffiliateLocationSetFilter","Represents a filter on affiliate locations in a FeedItemSet. Only applicable if the parent Feed of the FeedItemSet is an AFFILIATE_LOCATION feed."],["DynamicLocationSetFilter","Represents a filter on locations in a feed item set. Only applicable if the parent Feed of the FeedItemSet is a LOCATION feed."],["EnhancedCpc","An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely."],["ExpandedDynamicSearchAdInfo","An expanded dynamic search ad."],["ExpandedTextAdInfo","An expanded text ad."],["ExplorerAutoOptimizerSetting","Settings for the Display Campaign Optimizer, initially named “Explorer”. Learn more about automatic targeting."],["ExpressionRuleUserListInfo","Visitors of a page. The page visit is defined by one boolean rule expression."],["FinalAppUrl","A URL for deep linking into an app for the given operating system."],["FrequencyCapEntry","A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period."],["FrequencyCapKey","A group of fields used as keys for a frequency cap. There can be no more than one frequency cap with the same key."],["GenderInfo","A gender criterion."],["GeoPointInfo","Geo point for proximity criterion."],["GmailAdInfo","A Gmail ad."],["GmailTeaser","Gmail teaser data. The teaser is a small header that acts as an invitation to view the rest of the ad (the body)."],["HistoricalMetricsOptions","Historical metrics options."],["HotelAdInfo","A hotel ad."],["HotelAdvanceBookingWindowInfo","Criterion for number of days prior to the stay the booking is being made."],["HotelCalloutFeedItem","Represents a hotel callout extension."],["HotelCheckInDateRangeInfo","Criterion for a check-in date range."],["HotelCheckInDayInfo","Criterion for day of the week the booking is for."],["HotelCityInfo","City the hotel is located in."],["HotelClassInfo","Class of the hotel as a number of stars 1 to 5."],["HotelCountryRegionInfo","Country or Region the hotel is located in."],["HotelDateSelectionTypeInfo","Criterion for hotel date selection (default dates vs. user selected)."],["HotelIdInfo","Advertiser-specific hotel ID."],["HotelLengthOfStayInfo","Criterion for length of hotel stay in nights."],["HotelStateInfo","State the hotel is located in."],["ImageAdInfo","An image ad."],["ImageAsset","An Image asset."],["ImageDimension","Metadata for an image at a certain size, either original or resized."],["ImageFeedItem","Represents an advertiser provided image extension."],["IncomeRangeInfo","An income range criterion."],["InteractionTypeInfo","Criterion for Interaction Type."],["IpBlockInfo","An IpBlock criterion used for IP exclusions. We allow:"],["Keyword","A Keyword criterion segment."],["KeywordAnnotations","The Annotations for the Keyword plan keywords."],["KeywordConcept","The concept for the keyword."],["KeywordInfo","A keyword criterion."],["KeywordPlanAggregateMetricResults","The aggregated historical metrics for keyword plan keywords."],["KeywordPlanAggregateMetrics","The aggregate metrics specification of the request."],["KeywordPlanDeviceSearches","The total searches for the device type during the specified time period."],["KeywordPlanHistoricalMetrics","Historical metrics specific to the targeting options selected. Targeting options include geographies, network, etc. Refer to https://support.google.com/google-ads/answer/3022575 for more details."],["LanguageInfo","A language criterion."],["LeadFormAsset","A Lead Form asset."],["LeadFormDeliveryMethod","A configuration of how leads are delivered to the advertiser."],["LeadFormField","One input field instance within a form."],["LeadFormSingleChoiceAnswers","Defines possible answers for a single choice question, usually presented as a single-choice drop-down list."],["LegacyAppInstallAdInfo","A legacy app install ad that only can be used by a few select customers."],["LegacyResponsiveDisplayAdInfo","A legacy responsive display ad. Ads of this type are labeled ‘Responsive ads’ in the Google Ads UI."],["ListingDimensionInfo","Listing dimensions for listing group criterion."],["ListingGroupInfo","A listing group criterion."],["ListingScopeInfo","A listing scope criterion."],["LocalAdInfo","A local ad."],["LocationFeedItem","Represents a location extension."],["LocationGroupInfo","A radius around a list of locations specified via a feed."],["LocationInfo","A location criterion."],["LogicalUserListInfo","Represents a user list that is a custom combination of user lists."],["LogicalUserListOperandInfo","Operand of logical user list that consists of a user list."],["ManualCpc","Manual click-based bidding where user pays per click."],["ManualCpm","Manual impression-based bidding where user pays per thousand impressions."],["ManualCpv","View based bidding where user pays per video view."],["MatchingFunction","Matching function associated with a CustomerFeed, CampaignFeed, or AdGroupFeed. The matching function is used to filter the set of feed items selected."],["MaximizeConversionValue","An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget."],["MaximizeConversions","An automated bidding strategy to help get the most conversions for your campaigns while spending your budget."],["MediaBundleAsset","A MediaBundle asset."],["Metrics","Metrics data."],["MobileAppCategoryInfo","A mobile app category criterion."],["MobileApplicationInfo","A mobile application criterion."],["MobileDeviceInfo","A mobile device criterion."],["Money","Represents a price in a particular currency."],["MonthlySearchVolume","Monthly search volume."],["OfflineUserAddressInfo","Address identifier of offline data."],["Operand","An operand in a matching function."],["OperatingSystemVersionInfo","Represents an operating system version to be targeted."],["ParentalStatusInfo","A parental status criterion."],["PercentCpc","A bidding strategy where bids are a fraction of the advertised price for some good or service."],["PercentCpcBidSimulationPoint","Projected metrics for a specific percent CPC amount. Only Hotel advertising channel type supports this field."],["PercentCpcBidSimulationPointList","A container for simulation points for simulations of type PERCENT_CPC_BID."],["PlacementInfo","A placement criterion. This can be used to modify bids for sites when targeting the content network."],["PolicyTopicConstraint","Describes the effect on serving that a policy topic entry will have."],["PolicyTopicEntry","Policy finding attached to a resource (e.g. alcohol policy associated with a site that sells alcohol)."],["PolicyTopicEvidence","Additional information that explains a policy finding."],["PolicyValidationParameter","Parameter for controlling how policy exemption is done."],["PolicyViolationKey","Key of the violation. The key is used for referring to a violation when filing an exemption request."],["PreferredContentInfo","A preferred content criterion."],["PriceFeedItem","Represents a Price extension."],["PriceOffer","Represents one price offer in a price extension."],["ProductBiddingCategoryInfo","Bidding category of a product offer."],["ProductBrandInfo","Brand of the product."],["ProductChannelExclusivityInfo","Availability of a product offer."],["ProductChannelInfo","Locality of a product offer."],["ProductConditionInfo","Condition of a product offer."],["ProductCustomAttributeInfo","Custom attribute of a product offer."],["ProductImage","Product image specific data."],["ProductItemIdInfo","Item id of a product offer."],["ProductTypeInfo","Type of a product offer."],["ProductVideo","Product video specific data."],["PromotionAsset","A Promotion asset."],["PromotionFeedItem","Represents a Promotion extension."],["ProximityInfo","A Proximity criterion. The geo point and radius determine what geographical area is included. The address is a description of the geo point that does not affect ad serving."],["RealTimeBiddingSetting","Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network."],["ResponsiveDisplayAdControlSpec","Specification for various creative controls for a responsive display ad."],["ResponsiveDisplayAdInfo","A responsive display ad."],["ResponsiveSearchAdInfo","A responsive search ad."],["RuleBasedUserListInfo","Representation of a userlist that is generated by a rule."],["Segments","Segment only fields."],["ShoppingComparisonListingAdInfo","A Shopping Comparison Listing ad."],["ShoppingProductAdInfo","A standard Shopping ad."],["ShoppingSmartAdInfo","A Smart Shopping ad."],["SimilarUserListInfo","SimilarUserList is a list of users which are similar to users from another UserList. These lists are read-only and automatically created by Google."],["SitelinkAsset","A Sitelink asset."],["SitelinkFeedItem","Represents a sitelink extension."],["StoreAttribute","Store attributes of the transaction."],["StoreSalesMetadata","Metadata for Store Sales Direct."],["StoreSalesThirdPartyMetadata","Metadata for a third party Store Sales. This product is only for customers on the allow-list. Please contact your Google business development representative for details on the upload configuration."],["StructuredSnippetAsset","A Structured Snippet asset."],["StructuredSnippetFeedItem","Represents a structured snippet extension."],["TagSnippet","The site tag and event snippet pair for a TrackingCodeType."],["TargetCpa","An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set."],["TargetCpaSimulationPoint","Projected metrics for a specific target CPA amount."],["TargetCpaSimulationPointList","A container for simulation points for simulations of type TARGET_CPA."],["TargetCpm","Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set."],["TargetImpressionShare","An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location)."],["TargetImpressionShareSimulationPoint","Projected metrics for a specific target impression share value."],["TargetImpressionShareSimulationPointList","A container for simulation points for simulations of type TARGET_IMPRESSION_SHARE."],["TargetRestriction","The list of per-targeting-dimension targeting settings."],["TargetRestrictionOperation","Operation to be performed on a target restriction list in a mutate."],["TargetRoas","An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS)."],["TargetRoasSimulationPoint","Projected metrics for a specific target ROAS amount."],["TargetRoasSimulationPointList","A container for simulation points for simulations of type TARGET_ROAS."],["TargetSpend","An automated bid strategy that sets your bids to help get as many clicks as possible within your budget."],["TargetingSetting","Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594"],["TextAdInfo","A text ad."],["TextAsset","A Text asset."],["TextLabel","A type of label displaying text on a colored background."],["TextMessageFeedItem","An extension that users can click on to send a text message to the advertiser."],["TopicInfo","A topic criterion. Use topics to target or exclude placements in the Google Display Network based on the category into which the placement falls (for example, “Pets & Animals/Pets/Dogs”)."],["TransactionAttribute","Attribute of the store sales transaction."],["UnknownListingDimensionInfo","Unknown listing dimension."],["UrlCollection","Collection of urls that is tagged with a unique identifier."],["UserAttribute","User attribute, can only be used with CUSTOMER_MATCH_WITH_ATTRIBUTES job type."],["UserData","User data holding user identifiers and attributes."],["UserIdentifier","Hashed user identifying information."],["UserInterestInfo","Represents a particular interest-based topic to be targeted."],["UserListActionInfo","Represents an action type used for building remarketing user lists."],["UserListDateRuleItemInfo","A rule item composed of a date operation."],["UserListInfo","A User List criterion. Represents a user list that is defined by the advertiser to be targeted."],["UserListLogicalRuleInfo","A user list logical rule. A rule has a logical operator (and/or/not) and a list of user lists as operands."],["UserListNumberRuleItemInfo","A rule item composed of a number operation."],["UserListRuleInfo","A client defined rule based on custom parameters sent by web sites or uploaded by the advertiser."],["UserListRuleItemGroupInfo","A group of rule items."],["UserListRuleItemInfo","An atomic rule item."],["UserListStringRuleItemInfo","A rule item composed of a string operation."],["Value","A generic data container."],["VideoAdInfo","A video ad."],["VideoBumperInStreamAdInfo","Representation of video bumper in-stream ad format (very short in-stream non-skippable video ad)."],["VideoNonSkippableInStreamAdInfo","Representation of video non-skippable in-stream ad format (15 second in-stream non-skippable video ad)."],["VideoOutstreamAdInfo","Representation of video out-stream ad format (ad shown alongside a feed with automatic playback, without sound)."],["VideoResponsiveAdInfo","A video responsive ad."],["VideoTrueViewDiscoveryAdInfo","Representation of video TrueView discovery ad format."],["VideoTrueViewInStreamAdInfo","Representation of video TrueView in-stream ad format (ad shown during video playback, often at beginning, which displays a skip button a few seconds into the video)."],["WebhookDelivery","Google notifies the advertiser of leads by making HTTP calls to an endpoint they specify. The requests contain JSON matching a schema that Google publishes as part of form ads documentation."],["WebpageConditionInfo","Logical expression for targeting webpages of an advertiser’s website."],["WebpageInfo","Represents a criterion for targeting webpages of an advertiser’s website."],["WebpageSampleInfo","List of sample urls that match the website target"],["YearMonth","Year month."],["YearMonthRange","The year month range inclusive of the start and end months. Eg: A year month range to represent Jan 2020 would be: (Jan 2020, Jan 2020)."],["YouTubeChannelInfo","A YouTube Channel criterion."],["YouTubeVideoInfo","A YouTube Video criterion."],["YoutubeVideoAsset","A YouTube asset."]]});