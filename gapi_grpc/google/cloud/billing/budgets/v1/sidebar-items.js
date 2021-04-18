initSidebarItems({"enum":[["CalendarPeriod","A `CalendarPeriod` represents the abstract concept of a time period that has a canonical start. Grammatically, \"the start of the current `CalendarPeriod`\". All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8)."]],"mod":[["budget_amount",""],["budget_service_client","Generated client implementations."],["filter",""],["threshold_rule",""]],"struct":[["Budget","A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period."],["BudgetAmount","The budgeted amount for each usage period."],["CreateBudgetRequest","Request for CreateBudget"],["CustomPeriod","All date times begin at 12 AM US and Canadian Pacific Time (UTC-8)."],["DeleteBudgetRequest","Request for DeleteBudget"],["Filter","A filter for a budget, limiting the scope of the cost to calculate."],["GetBudgetRequest","Request for GetBudget"],["LastPeriodAmount","Describes a budget amount targeted to the last [Filter.calendar_period][google.cloud.billing.budgets.v1.Filter.calendar_period] spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. Future configuration options will be described here (for example, configuring a percentage of last period's spend). LastPeriodAmount cannot be set for a budget configured with a [Filter.custom_period][google.cloud.billing.budgets.v1.Filter.custom_period]."],["ListBudgetsRequest","Request for ListBudgets"],["ListBudgetsResponse","Response for ListBudgets"],["NotificationsRule","NotificationsRule defines notifications that are sent based on budget spend and thresholds."],["ThresholdRule","ThresholdRule contains a definition of a threshold which triggers an alert (a notification of a threshold being crossed) to be sent when spend goes above the specified amount. Alerts are automatically e-mailed to users with the Billing Account Administrator role or the Billing Account User role. The thresholds here have no effect on notifications sent to anything configured under `Budget.all_updates_rule`."],["UpdateBudgetRequest","Request for UpdateBudget"]]});