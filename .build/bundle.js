(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/carcare3/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/carcare3/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let carcare3_actions_application_appupdate_action = __webpack_require__(/*! ./carcare3/Actions/Application/AppUpdate.action */ "./build.definitions/carcare3/Actions/Application/AppUpdate.action")
let carcare3_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./carcare3/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/carcare3/Actions/Application/AppUpdateFailureMessage.action")
let carcare3_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./carcare3/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/carcare3/Actions/Application/AppUpdateProgressBanner.action")
let carcare3_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./carcare3/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/carcare3/Actions/Application/AppUpdateSuccessMessage.action")
let carcare3_actions_application_logout_action = __webpack_require__(/*! ./carcare3/Actions/Application/Logout.action */ "./build.definitions/carcare3/Actions/Application/Logout.action")
let carcare3_actions_application_navtoabout_action = __webpack_require__(/*! ./carcare3/Actions/Application/NavToAbout.action */ "./build.definitions/carcare3/Actions/Application/NavToAbout.action")
let carcare3_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./carcare3/Actions/Application/NavToActivityLog.action */ "./build.definitions/carcare3/Actions/Application/NavToActivityLog.action")
let carcare3_actions_application_navtosupport_action = __webpack_require__(/*! ./carcare3/Actions/Application/NavToSupport.action */ "./build.definitions/carcare3/Actions/Application/NavToSupport.action")
let carcare3_actions_application_onwillupdate_action = __webpack_require__(/*! ./carcare3/Actions/Application/OnWillUpdate.action */ "./build.definitions/carcare3/Actions/Application/OnWillUpdate.action")
let carcare3_actions_application_reset_action = __webpack_require__(/*! ./carcare3/Actions/Application/Reset.action */ "./build.definitions/carcare3/Actions/Application/Reset.action")
let carcare3_actions_application_resetmessage_action = __webpack_require__(/*! ./carcare3/Actions/Application/ResetMessage.action */ "./build.definitions/carcare3/Actions/Application/ResetMessage.action")
let carcare3_actions_application_usermenupopover_action = __webpack_require__(/*! ./carcare3/Actions/Application/UserMenuPopover.action */ "./build.definitions/carcare3/Actions/Application/UserMenuPopover.action")
let carcare3_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./carcare3/Actions/CloseModalPage_Cancel.action */ "./build.definitions/carcare3/Actions/CloseModalPage_Cancel.action")
let carcare3_actions_closemodalpage_complete_action = __webpack_require__(/*! ./carcare3/Actions/CloseModalPage_Complete.action */ "./build.definitions/carcare3/Actions/CloseModalPage_Complete.action")
let carcare3_actions_closepage_action = __webpack_require__(/*! ./carcare3/Actions/ClosePage.action */ "./build.definitions/carcare3/Actions/ClosePage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeoffline_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOffline.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOffline.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineFailureMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineFailureMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineSuccessMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadoffline_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadOffline.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadOffline.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadstartedmessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadStartedMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadStartedMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeoffline_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOffline.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOffline.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOfflineFailureMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncfailuremessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncstartedmessage_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncStartedMessage.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncStartedMessage.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_service_uploadoffline_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/UploadOffline.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/UploadOffline.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_detail_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action")
let carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_list_action = __webpack_require__(/*! ./carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action */ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action")
let carcare3_actions_createcustomer_entity_action = __webpack_require__(/*! ./carcare3/Actions/CreateCustomer_Entity.action */ "./build.definitions/carcare3/Actions/CreateCustomer_Entity.action")
let carcare3_actions_createcustomercancel_action = __webpack_require__(/*! ./carcare3/Actions/CreateCustomerCancel.action */ "./build.definitions/carcare3/Actions/CreateCustomerCancel.action")
let carcare3_actions_createcustomerentityfailuremessage_action = __webpack_require__(/*! ./carcare3/Actions/CreateCustomerEntityFailureMessage.action */ "./build.definitions/carcare3/Actions/CreateCustomerEntityFailureMessage.action")
let carcare3_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./carcare3/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/carcare3/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let carcare3_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./carcare3/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let carcare3_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./carcare3/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_List.action")
let carcare3_actions_genericbannermessage_action = __webpack_require__(/*! ./carcare3/Actions/GenericBannerMessage.action */ "./build.definitions/carcare3/Actions/GenericBannerMessage.action")
let carcare3_actions_genericmessagebox_action = __webpack_require__(/*! ./carcare3/Actions/GenericMessageBox.action */ "./build.definitions/carcare3/Actions/GenericMessageBox.action")
let carcare3_actions_genericnavigation_action = __webpack_require__(/*! ./carcare3/Actions/GenericNavigation.action */ "./build.definitions/carcare3/Actions/GenericNavigation.action")
let carcare3_actions_generictoastmessage_action = __webpack_require__(/*! ./carcare3/Actions/GenericToastMessage.action */ "./build.definitions/carcare3/Actions/GenericToastMessage.action")
let carcare3_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./carcare3/Actions/Logging/LogUploadFailure.action */ "./build.definitions/carcare3/Actions/Logging/LogUploadFailure.action")
let carcare3_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./carcare3/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/carcare3/Actions/Logging/LogUploadSuccessful.action")
let carcare3_actions_logging_uploadlog_action = __webpack_require__(/*! ./carcare3/Actions/Logging/UploadLog.action */ "./build.definitions/carcare3/Actions/Logging/UploadLog.action")
let carcare3_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./carcare3/Actions/Logging/UploadLogProgress.action */ "./build.definitions/carcare3/Actions/Logging/UploadLogProgress.action")
let carcare3_actions_navtocreatecustomer_action = __webpack_require__(/*! ./carcare3/Actions/NavToCreateCustomer.action */ "./build.definitions/carcare3/Actions/NavToCreateCustomer.action")
let carcare3_actions_navtodisplaycustomer_action = __webpack_require__(/*! ./carcare3/Actions/navToDisplayCustomer.action */ "./build.definitions/carcare3/Actions/navToDisplayCustomer.action")
let carcare3_actions_validationfailure_action = __webpack_require__(/*! ./carcare3/Actions/ValidationFailure.action */ "./build.definitions/carcare3/Actions/ValidationFailure.action")
let carcare3_globals_application_appdefinition_version_global = __webpack_require__(/*! ./carcare3/Globals/Application/AppDefinition_Version.global */ "./build.definitions/carcare3/Globals/Application/AppDefinition_Version.global")
let carcare3_globals_application_applicationname_global = __webpack_require__(/*! ./carcare3/Globals/Application/ApplicationName.global */ "./build.definitions/carcare3/Globals/Application/ApplicationName.global")
let carcare3_globals_application_supportemail_global = __webpack_require__(/*! ./carcare3/Globals/Application/SupportEmail.global */ "./build.definitions/carcare3/Globals/Application/SupportEmail.global")
let carcare3_globals_application_supportphone_global = __webpack_require__(/*! ./carcare3/Globals/Application/SupportPhone.global */ "./build.definitions/carcare3/Globals/Application/SupportPhone.global")
let carcare3_i18n_i18n_properties = __webpack_require__(/*! ./carcare3/i18n/i18n.properties */ "./build.definitions/carcare3/i18n/i18n.properties")
let carcare3_jsconfig_json = __webpack_require__(/*! ./carcare3/jsconfig.json */ "./build.definitions/carcare3/jsconfig.json")
let carcare3_pages_application_about_page = __webpack_require__(/*! ./carcare3/Pages/Application/About.page */ "./build.definitions/carcare3/Pages/Application/About.page")
let carcare3_pages_application_support_page = __webpack_require__(/*! ./carcare3/Pages/Application/Support.page */ "./build.definitions/carcare3/Pages/Application/Support.page")
let carcare3_pages_application_useractivitylog_page = __webpack_require__(/*! ./carcare3/Pages/Application/UserActivityLog.page */ "./build.definitions/carcare3/Pages/Application/UserActivityLog.page")
let carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_detail_page = __webpack_require__(/*! ./carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page */ "./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page")
let carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_list_page = __webpack_require__(/*! ./carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page */ "./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page")
let carcare3_pages_createcustomer_page = __webpack_require__(/*! ./carcare3/Pages/CreateCustomer.page */ "./build.definitions/carcare3/Pages/CreateCustomer.page")
let carcare3_pages_displaycustomer_page = __webpack_require__(/*! ./carcare3/Pages/DisplayCustomer.page */ "./build.definitions/carcare3/Pages/DisplayCustomer.page")
let carcare3_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./carcare3/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_Detail.page")
let carcare3_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./carcare3/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_List.page")
let carcare3_pages_landingscreen_page = __webpack_require__(/*! ./carcare3/Pages/LandingScreen.page */ "./build.definitions/carcare3/Pages/LandingScreen.page")
let carcare3_pages_main_page = __webpack_require__(/*! ./carcare3/Pages/Main.page */ "./build.definitions/carcare3/Pages/Main.page")
let carcare3_rules_application_appupdatefailure_js = __webpack_require__(/*! ./carcare3/Rules/Application/AppUpdateFailure.js */ "./build.definitions/carcare3/Rules/Application/AppUpdateFailure.js")
let carcare3_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./carcare3/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/carcare3/Rules/Application/AppUpdateSuccess.js")
let carcare3_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./carcare3/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/carcare3/Rules/Application/ClientIsMultiUserMode.js")
let carcare3_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./carcare3/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/carcare3/Rules/Application/GetClientSupportVersions.js")
let carcare3_rules_application_getclientversion_js = __webpack_require__(/*! ./carcare3/Rules/Application/GetClientVersion.js */ "./build.definitions/carcare3/Rules/Application/GetClientVersion.js")
let carcare3_rules_application_onwillupdate_js = __webpack_require__(/*! ./carcare3/Rules/Application/OnWillUpdate.js */ "./build.definitions/carcare3/Rules/Application/OnWillUpdate.js")
let carcare3_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./carcare3/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/carcare3/Rules/Application/ResetAppSettingsAndLogout.js")
let carcare3_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./carcare3/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/carcare3/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let carcare3_rules_fcsitevalidation_js = __webpack_require__(/*! ./carcare3/Rules/FCSiteValidation.js */ "./build.definitions/carcare3/Rules/FCSiteValidation.js")
let carcare3_rules_logging_loglevels_js = __webpack_require__(/*! ./carcare3/Rules/Logging/LogLevels.js */ "./build.definitions/carcare3/Rules/Logging/LogLevels.js")
let carcare3_rules_logging_settracecategories_js = __webpack_require__(/*! ./carcare3/Rules/Logging/SetTraceCategories.js */ "./build.definitions/carcare3/Rules/Logging/SetTraceCategories.js")
let carcare3_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./carcare3/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/carcare3/Rules/Logging/SetUserLogLevel.js")
let carcare3_rules_logging_togglelogging_js = __webpack_require__(/*! ./carcare3/Rules/Logging/ToggleLogging.js */ "./build.definitions/carcare3/Rules/Logging/ToggleLogging.js")
let carcare3_rules_logging_tracecategories_js = __webpack_require__(/*! ./carcare3/Rules/Logging/TraceCategories.js */ "./build.definitions/carcare3/Rules/Logging/TraceCategories.js")
let carcare3_rules_logging_userlogsetting_js = __webpack_require__(/*! ./carcare3/Rules/Logging/UserLogSetting.js */ "./build.definitions/carcare3/Rules/Logging/UserLogSetting.js")
let carcare3_rules_service_initialize_js = __webpack_require__(/*! ./carcare3/Rules/Service/Initialize.js */ "./build.definitions/carcare3/Rules/Service/Initialize.js")
let carcare3_rules_sitevalidation_js = __webpack_require__(/*! ./carcare3/Rules/SiteValidation.js */ "./build.definitions/carcare3/Rules/SiteValidation.js")
let carcare3_services_com_sap_mdk_eyasset_cloning_service = __webpack_require__(/*! ./carcare3/Services/com_sap_mdk_Eyasset_CLONING.service */ "./build.definitions/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service")
let carcare3_styles_styles_css = __webpack_require__(/*! ./carcare3/Styles/Styles.css */ "./build.definitions/carcare3/Styles/Styles.css")
let carcare3_styles_styles_json = __webpack_require__(/*! ./carcare3/Styles/Styles.json */ "./build.definitions/carcare3/Styles/Styles.json")
let carcare3_styles_styles_less = __webpack_require__(/*! ./carcare3/Styles/Styles.less */ "./build.definitions/carcare3/Styles/Styles.less")
let carcare3_styles_styles_nss = __webpack_require__(/*! ./carcare3/Styles/Styles.nss */ "./build.definitions/carcare3/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	carcare3_actions_application_appupdate_action : carcare3_actions_application_appupdate_action,
	carcare3_actions_application_appupdatefailuremessage_action : carcare3_actions_application_appupdatefailuremessage_action,
	carcare3_actions_application_appupdateprogressbanner_action : carcare3_actions_application_appupdateprogressbanner_action,
	carcare3_actions_application_appupdatesuccessmessage_action : carcare3_actions_application_appupdatesuccessmessage_action,
	carcare3_actions_application_logout_action : carcare3_actions_application_logout_action,
	carcare3_actions_application_navtoabout_action : carcare3_actions_application_navtoabout_action,
	carcare3_actions_application_navtoactivitylog_action : carcare3_actions_application_navtoactivitylog_action,
	carcare3_actions_application_navtosupport_action : carcare3_actions_application_navtosupport_action,
	carcare3_actions_application_onwillupdate_action : carcare3_actions_application_onwillupdate_action,
	carcare3_actions_application_reset_action : carcare3_actions_application_reset_action,
	carcare3_actions_application_resetmessage_action : carcare3_actions_application_resetmessage_action,
	carcare3_actions_application_usermenupopover_action : carcare3_actions_application_usermenupopover_action,
	carcare3_actions_closemodalpage_cancel_action : carcare3_actions_closemodalpage_cancel_action,
	carcare3_actions_closemodalpage_complete_action : carcare3_actions_closemodalpage_complete_action,
	carcare3_actions_closepage_action : carcare3_actions_closepage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeoffline_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeoffline_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinefailuremessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinefailuremessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinesuccessmessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_closeofflinesuccessmessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadoffline_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadoffline_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadstartedmessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_downloadstartedmessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeoffline_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeoffline_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeofflinefailuremessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_initializeofflinefailuremessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncfailuremessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncfailuremessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncstartedmessage_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_syncstartedmessage_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_service_uploadoffline_action : carcare3_actions_com_sap_mdk_eyasset_cloning_service_uploadoffline_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_detail_action : carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_detail_action,
	carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_list_action : carcare3_actions_com_sap_mdk_eyasset_cloning_zc_off_carcare_navtozc_off_carcare_list_action,
	carcare3_actions_createcustomer_entity_action : carcare3_actions_createcustomer_entity_action,
	carcare3_actions_createcustomercancel_action : carcare3_actions_createcustomercancel_action,
	carcare3_actions_createcustomerentityfailuremessage_action : carcare3_actions_createcustomerentityfailuremessage_action,
	carcare3_actions_errorarchive_errorarchive_syncfailure_action : carcare3_actions_errorarchive_errorarchive_syncfailure_action,
	carcare3_actions_errorarchive_navtoerrorarchive_detail_action : carcare3_actions_errorarchive_navtoerrorarchive_detail_action,
	carcare3_actions_errorarchive_navtoerrorarchive_list_action : carcare3_actions_errorarchive_navtoerrorarchive_list_action,
	carcare3_actions_genericbannermessage_action : carcare3_actions_genericbannermessage_action,
	carcare3_actions_genericmessagebox_action : carcare3_actions_genericmessagebox_action,
	carcare3_actions_genericnavigation_action : carcare3_actions_genericnavigation_action,
	carcare3_actions_generictoastmessage_action : carcare3_actions_generictoastmessage_action,
	carcare3_actions_logging_loguploadfailure_action : carcare3_actions_logging_loguploadfailure_action,
	carcare3_actions_logging_loguploadsuccessful_action : carcare3_actions_logging_loguploadsuccessful_action,
	carcare3_actions_logging_uploadlog_action : carcare3_actions_logging_uploadlog_action,
	carcare3_actions_logging_uploadlogprogress_action : carcare3_actions_logging_uploadlogprogress_action,
	carcare3_actions_navtocreatecustomer_action : carcare3_actions_navtocreatecustomer_action,
	carcare3_actions_navtodisplaycustomer_action : carcare3_actions_navtodisplaycustomer_action,
	carcare3_actions_validationfailure_action : carcare3_actions_validationfailure_action,
	carcare3_globals_application_appdefinition_version_global : carcare3_globals_application_appdefinition_version_global,
	carcare3_globals_application_applicationname_global : carcare3_globals_application_applicationname_global,
	carcare3_globals_application_supportemail_global : carcare3_globals_application_supportemail_global,
	carcare3_globals_application_supportphone_global : carcare3_globals_application_supportphone_global,
	carcare3_i18n_i18n_properties : carcare3_i18n_i18n_properties,
	carcare3_jsconfig_json : carcare3_jsconfig_json,
	carcare3_pages_application_about_page : carcare3_pages_application_about_page,
	carcare3_pages_application_support_page : carcare3_pages_application_support_page,
	carcare3_pages_application_useractivitylog_page : carcare3_pages_application_useractivitylog_page,
	carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_detail_page : carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_detail_page,
	carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_list_page : carcare3_pages_com_sap_mdk_eyasset_cloning_zc_off_carcare_zc_off_carcare_list_page,
	carcare3_pages_createcustomer_page : carcare3_pages_createcustomer_page,
	carcare3_pages_displaycustomer_page : carcare3_pages_displaycustomer_page,
	carcare3_pages_errorarchive_errorarchive_detail_page : carcare3_pages_errorarchive_errorarchive_detail_page,
	carcare3_pages_errorarchive_errorarchive_list_page : carcare3_pages_errorarchive_errorarchive_list_page,
	carcare3_pages_landingscreen_page : carcare3_pages_landingscreen_page,
	carcare3_pages_main_page : carcare3_pages_main_page,
	carcare3_rules_application_appupdatefailure_js : carcare3_rules_application_appupdatefailure_js,
	carcare3_rules_application_appupdatesuccess_js : carcare3_rules_application_appupdatesuccess_js,
	carcare3_rules_application_clientismultiusermode_js : carcare3_rules_application_clientismultiusermode_js,
	carcare3_rules_application_getclientsupportversions_js : carcare3_rules_application_getclientsupportversions_js,
	carcare3_rules_application_getclientversion_js : carcare3_rules_application_getclientversion_js,
	carcare3_rules_application_onwillupdate_js : carcare3_rules_application_onwillupdate_js,
	carcare3_rules_application_resetappsettingsandlogout_js : carcare3_rules_application_resetappsettingsandlogout_js,
	carcare3_rules_errorarchive_errorarchive_checkforsyncerror_js : carcare3_rules_errorarchive_errorarchive_checkforsyncerror_js,
	carcare3_rules_fcsitevalidation_js : carcare3_rules_fcsitevalidation_js,
	carcare3_rules_logging_loglevels_js : carcare3_rules_logging_loglevels_js,
	carcare3_rules_logging_settracecategories_js : carcare3_rules_logging_settracecategories_js,
	carcare3_rules_logging_setuserloglevel_js : carcare3_rules_logging_setuserloglevel_js,
	carcare3_rules_logging_togglelogging_js : carcare3_rules_logging_togglelogging_js,
	carcare3_rules_logging_tracecategories_js : carcare3_rules_logging_tracecategories_js,
	carcare3_rules_logging_userlogsetting_js : carcare3_rules_logging_userlogsetting_js,
	carcare3_rules_service_initialize_js : carcare3_rules_service_initialize_js,
	carcare3_rules_sitevalidation_js : carcare3_rules_sitevalidation_js,
	carcare3_services_com_sap_mdk_eyasset_cloning_service : carcare3_services_com_sap_mdk_eyasset_cloning_service,
	carcare3_styles_styles_css : carcare3_styles_styles_css,
	carcare3_styles_styles_json : carcare3_styles_styles_json,
	carcare3_styles_styles_less : carcare3_styles_styles_less,
	carcare3_styles_styles_nss : carcare3_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/AppUpdateFailure.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/AppUpdateFailure.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/carcare3/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/AppUpdateSuccess.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/AppUpdateSuccess.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/carcare3/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/carcare3/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/ClientIsMultiUserMode.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/ClientIsMultiUserMode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/GetClientSupportVersions.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/GetClientSupportVersions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/GetClientVersion.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/GetClientVersion.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/OnWillUpdate.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/OnWillUpdate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/carcare3/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Application/ResetAppSettingsAndLogout.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/carcare3/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/carcare3/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/FCSiteValidation.js":
/*!**************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/FCSiteValidation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FCSiteValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function FCSiteValidation(clientAPI) {

    //The following evaluateTargetPath will retrieve the current value of the email control
    if ((clientAPI.evaluateTargetPath('#Control:FCCreateSite/#Value').indexOf('@')) === '') {
        //If email value does not contain @ display a validation failure message to the end-user
        clientAPI.executeAction('/carcare3/Actions/ValidationFailure.action');
    } else {
        //If @ is present in the email value, return true to indicate validation is successful
        return true;
    }

}


/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/LogLevels.js":
/*!***************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/LogLevels.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/SetTraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/SetTraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/SetUserLogLevel.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/SetUserLogLevel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/ToggleLogging.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/ToggleLogging.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/TraceCategories.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/TraceCategories.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Logging/UserLogSetting.js":
/*!********************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Logging/UserLogSetting.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/Service/Initialize.js":
/*!****************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/Service/Initialize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _com_sap_mdk_Eyasset_CLONING = context.executeAction('/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_com_sap_mdk_Eyasset_CLONING]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/carcare3/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/carcare3/Rules/SiteValidation.js":
/*!************************************************************!*\
  !*** ./build.definitions/carcare3/Rules/SiteValidation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function SiteValidation(clientAPI) {

     //The following evaluateTargetPath will retrieve the current value of the email control
     if ((clientAPI.evaluateTargetPath('#Control:FCCreateSite/#Value')) === false) {
        //If email value does not contain @ display a validation failure message to the end-user
        clientAPI.executeAction('/carcare3/Actions/ValidationFailure.action');
    } else {
        //If @ is present in the email value, return true to indicate validation is successful
        return true;
    }
}


/***/ }),

/***/ "./build.definitions/carcare3/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/carcare3/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/carcare3/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/carcare3/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/carcare3/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/carcare3/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/carcare3/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/carcare3/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/carcare3/Pages/Application/About.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/Application/About.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/carcare3/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/carcare3/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/carcare3/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/carcare3/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/Application/Support.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/Application/Support.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/carcare3/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/carcare3/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/carcare3/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/carcare3/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/Application/UserActivityLog.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/Application/UserActivityLog.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/carcare3/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/carcare3/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/carcare3/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/carcare3/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/carcare3/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/carcare3/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/carcare3/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/carcare3/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/CreateCustomer.page":
/*!**************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/CreateCustomer.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateSite","IsVisible":true,"Separator":true,"Caption":"Site","PlaceHolder":"Enter Site","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePlateCode","IsVisible":true,"Separator":true,"Caption":"Plate Code","PlaceHolder":"Enter Code","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePlateNo","IsVisible":true,"Separator":true,"Caption":"Plate No","PlaceHolder":"Enter No","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreatePhone","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter No","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateModel","IsVisible":true,"Separator":true,"Caption":"Model","PlaceHolder":"Enter Email","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateCreatedOn","IsVisible":true,"Separator":true,"Caption":"Created On","IsEditable":true,"Mode":"Date"},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateCreatedAt","IsVisible":true,"Separator":true,"Caption":"Created At","IsEditable":true,"Mode":"Time"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"}]}],"_Type":"Page","_Name":"CreateCustomer","Caption":"CreateCustomer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Save","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/CreateCustomer_Entity.action"},{"_Name":"ActionBarItem1","Caption":"Cancel","SystemItem":"Cancel","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/CreateCustomerCancel.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/DisplayCustomer.page":
/*!***************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/DisplayCustomer.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"FastFilters":[{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter0"},{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter1","Label":"Site"},{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter2"},{"_Type":"Control.Type.FastFilterItem","_Name":"FastFilter3"}],"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","Function":{"Name":"/carcare3/Rules/FilteroDataRecord.js"}},"_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ZC_OFF_CARCARE"},"_Name":"SectionContactCell2","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true,"Items":"{PlateCode}"},"DetailImage":"res://contact.png","Headline":"{Site}","Subheadline":"{MobileNum}","Description":"{Model}"},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Please Wait..","PageSize":50},"Search":{"Enabled":true}},{"_Type":"Section.Type.DataTable","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ZC_OFF_CARCARE","ServerSidePaging":true},"_Name":"SectionDataTable0","Header":{"_Name":"SectionDataTableHeader1","AccessoryType":"None","UseTopPadding":true,"DataTable":{"Items":[{"Text":"Site","NumberOfLines":1},{"Text":"Plate No","NumberOfLines":1},{"Text":"Plate Code","NumberOfLines":1},{"Text":"Mobile","NumberOfLines":1}],"Layout":{"ColumnWidth":[]}}},"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"EditMode":"None","Row":{"Items":[{"Value":"{PlateNum}","DisplayType":"Text","EditType":"Text","NumberOfLines":1,"TextAlignment":"Left","ListPicker":{"PickerItems":[],"Value":"ZC_OFF_CARCAREType/PlateNum"}},{"Value":"{PlateCode}","DisplayType":"Text","EditType":"Text","NumberOfLines":1,"TextAlignment":"Left","ListPicker":{"PickerItems":[]}},{"Value":"{MobileNum}","DisplayType":"Text","EditType":"Text","NumberOfLines":1,"TextAlignment":"Left","ListPicker":{"PickerItems":[]}},{"Value":"{Site}","DisplayType":"Text","EditType":"Text","NumberOfLines":1,"TextAlignment":"Left","ListPicker":{"Caption":"ZC_OFF_CARCAREType/Site","PickerItems":[],"Value":"ZC_OFF_CARCAREType/Site"}}],"Layout":{"ColumnWidth":[]}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50}}]}],"_Type":"Page","_Name":"DisplayCustomer","Caption":"DisplayCustomer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","Icon":"sap-icon://key-user-settings","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/carcare3/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/LandingScreen.page":
/*!*************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/LandingScreen.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Create Customer","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","Enabled":true,"OnPress":"/carcare3/Actions/NavToCreateCustomer.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton1","IsVisible":true,"Separator":true,"Title":"Display Customer","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","Enabled":true,"OnPress":"/carcare3/Actions/navToDisplayCustomer.action"}]}]}],"_Type":"Page","_Name":"LandingScreen","Caption":"LandingScreen","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/Main.page":
/*!****************************************************!*\
  !*** ./build.definitions/carcare3/Pages/Main.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ZC_OFF_CARCARE"},"_Name":"SectionedTable0","Section":{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_com_sap_mdk_Eyasset_CLONING","Header":{"_Name":"SectionHeader_com_sap_mdk_Eyasset_CLONING","AccessoryType":"None","UseTopPadding":true,"Caption":"com_sap_mdk_Eyasset_CLONING"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"ZC_OFF_CARCARE","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action"},{"_Name":"SectionButton1","Title":"Create Customer","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://user-settings","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/carcare3/Actions/NavToCreateCustomer.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/carcare3/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARCAREType Detail","DesignTimeTarget":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ZC_OFF_CARCARE","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Site}","Subhead":"{PlateNum}","BodyText":"","Footnote":"{MobileNum}","Description":"{PlateCode}","StatusText":"{CreatedOn}","StatusImage":"","SubstatusImage":"","SubstatusText":"{CreatedAt}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Site","Value":"{Site}"},{"KeyName":"PlateNum","Value":"{PlateNum}"},{"KeyName":"PlateCode","Value":"{PlateCode}"},{"KeyName":"MobileNum","Value":"{MobileNum}"},{"KeyName":"CreatedOn","Value":"{CreatedOn}"},{"KeyName":"CreatedAt","Value":"{CreatedAt}"},{"KeyName":"Partner","Value":"{Partner}"},{"KeyName":"Model","Value":"{Model}"},{"KeyName":"Manufacture","Value":"{Manufacture}"},{"KeyName":"Createdby","Value":"{Createdby}"},{"KeyName":"Vir","Value":"{Vir}"},{"KeyName":"Salesorder","Value":"{Salesorder}"},{"KeyName":"Delivery","Value":"{Delivery}"},{"KeyName":"Invoice","Value":"{Invoice}"},{"KeyName":"Paymentdoc","Value":"{Paymentdoc}"},{"KeyName":"Completed","Value":"{Completed}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARCARE_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ZC_OFF_CARCARE","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{PlateCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action","StatusImage":"","Title":"{Site}","Footnote":"{MobileNum}","PreserveIconStackSpacing":false,"StatusText":"{CreatedOn}","Subhead":"{PlateNum}","SubstatusText":"{CreatedAt}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ZC_OFF_CARCARE","Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ZC_OFF_CARCARE_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/carcare3/Pages/LandingScreen.page","OnLaunch":["/carcare3/Rules/Service/Initialize.js"],"OnWillUpdate":"/carcare3/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/carcare3/Rules/Service/Initialize.js","Styles":"/carcare3/Styles/Styles.less","Version":"/carcare3/Globals/Application/AppDefinition_Version.global","Localization":"/carcare3/i18n/i18n.properties","_SchemaVersion":"24.4","_Name":"carcare3","StyleSheets":{"Styles":{"css":"/carcare3/Styles/Styles.css","ios":"/carcare3/Styles/Styles.nss","android":"/carcare3/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/AppUpdate.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/AppUpdate.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/carcare3/Rules/Application/AppUpdateFailure.js","OnSuccess":"/carcare3/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/AppUpdateFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/AppUpdateFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/AppUpdateProgressBanner.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/AppUpdateProgressBanner.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/carcare3/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/AppUpdateSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/AppUpdateSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/Logout.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/Logout.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/NavToAbout.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/NavToAbout.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/carcare3/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/NavToActivityLog.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/NavToActivityLog.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/carcare3/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/NavToSupport.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/NavToSupport.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/carcare3/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/OnWillUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/OnWillUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/Reset.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/Reset.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/ResetMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/ResetMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/carcare3/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Application/UserMenuPopover.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Application/UserMenuPopover.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/carcare3/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/carcare3/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/carcare3/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/carcare3/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/carcare3/Actions/Application/Logout.action","Title":"Logout","Visible":"/carcare3/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"NavigateBackToPage":"DisplayCustomer"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/CreateCustomerCancel.action":
/*!************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/CreateCustomerCancel.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CreateCustomerCancel"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"NavigateBackToPage":"LandingScreen"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/CreateCustomerEntityFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/CreateCustomerEntityFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateCustomerEntityFailureMessage"},"OnSuccess":"/carcare3/Actions/CloseModalPage_Complete.action","Message":"Failed to Create Customer record ","Title":"Create Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/CreateCustomer_Entity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/CreateCustomer_Entity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"CreateCustomer_Entity"},"OnFailure":"/carcare3/Actions/CreateCustomerEntityFailureMessage.action","OnSuccess":"/carcare3/Actions/CloseModalPage_Complete.action","ValidationRule":"/carcare3/Rules/SiteValidation.js","Target":{"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","EntitySet":"ZC_OFF_CARCARE"},"Properties":{"Site":"#Page:CreateCustomer/#Control:FCCreateSite/#Value","PlateNum":"#Page:CreateCustomer/#Control:FCCreatePlateNo/#Value","PlateCode":"#Page:CreateCustomer/#Control:FCCreatePlateCode/#Value","MobileNum":"#Page:CreateCustomer/#Control:FCCreatePhone/#Value","CreatedOn":"#Page:CreateCustomer/#Control:FCCreateCreatedOn/#Value","CreatedAt":"#Page:CreateCustomer/#Control:FCCreateCreatedAt/#Value","Model":"#Page:CreateCustomer/#Control:FCCreateModel/#Value"}}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/carcare3/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcare3/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcare3/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/GenericBannerMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/GenericBannerMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/GenericMessageBox.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/GenericMessageBox.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/GenericNavigation.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/GenericNavigation.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/carcare3/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/GenericToastMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/GenericToastMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Logging/LogUploadFailure.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Logging/LogUploadFailure.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Logging/LogUploadSuccessful.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Logging/LogUploadSuccessful.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Logging/UploadLog.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Logging/UploadLog.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/carcare3/Actions/Logging/LogUploadFailure.action","OnSuccess":"/carcare3/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/Logging/UploadLogProgress.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/Logging/UploadLogProgress.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/carcare3/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/NavToCreateCustomer.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/NavToCreateCustomer.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCreateCustomer"},"PageToOpen":"/carcare3/Pages/CreateCustomer.page"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/ValidationFailure.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/ValidationFailure.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"Site value is empty","Title":"Validate Site","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOffline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOffline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineSuccessMessage.action","OnFailure":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineFailureMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineFailureMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineSuccessMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/CloseOfflineSuccessMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadOffline.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadOffline.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","DefiningRequests":[{"Name":"ZC_OFF_CARCARE","Query":"ZC_OFF_CARCARE"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action","OnSuccess":"/carcare3/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadStartedMessage.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadStartedMessage.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOffline.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOffline.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","DefiningRequests":[{"Name":"ZC_OFF_CARCARE","Query":"ZC_OFF_CARCARE"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOfflineFailureMessage.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/InitializeOfflineFailureMessage.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncStartedMessage.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncStartedMessage.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/UploadOffline.action","OnFailure":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/UploadOffline.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/UploadOffline.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/DownloadStartedMessage.action","OnFailure":"/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_Detail.action ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_Detail.page"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/com_sap_mdk_Eyasset_CLONING/ZC_OFF_CARCARE/NavToZC_OFF_CARCARE_List.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/carcare3/Pages/com_sap_mdk_Eyasset_CLONING_ZC_OFF_CARCARE/ZC_OFF_CARCARE_List.page"}

/***/ }),

/***/ "./build.definitions/carcare3/Actions/navToDisplayCustomer.action":
/*!************************************************************************!*\
  !*** ./build.definitions/carcare3/Actions/navToDisplayCustomer.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToDisplayCustomer"},"PageToOpen":"/carcare3/Pages/DisplayCustomer.page"}

/***/ }),

/***/ "./build.definitions/carcare3/Globals/Application/AppDefinition_Version.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/carcare3/Globals/Application/AppDefinition_Version.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcare3/Globals/Application/ApplicationName.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/carcare3/Globals/Application/ApplicationName.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcare3/Globals/Application/SupportEmail.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Globals/Application/SupportEmail.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcare3/Globals/Application/SupportPhone.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/carcare3/Globals/Application/SupportPhone.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service":
/*!*********************************************************************************!*\
  !*** ./build.definitions/carcare3/Services/com_sap_mdk_Eyasset_CLONING.service ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"com_sap_mdk_Eyasset_CLONING","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/carcare3/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/carcare3/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/carcare3/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/carcare3/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map