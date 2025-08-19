param (
    [string]$AppName
)

Write-Output "🛑 Cancelling bandwidth control for $AppName..."

# Remove firewall rules
Get-NetFirewallRule -DisplayName "Block All Outbound" -ErrorAction SilentlyContinue | Remove-NetFirewallRule
Get-NetFirewallRule -DisplayName "Allow $AppName" -ErrorAction SilentlyContinue | Remove-NetFirewallRule

# Remove scheduled tasks
$tasks = @("Revert_$AppName", "Monitor_$AppName")
foreach ($task in $tasks) {
    Unregister-ScheduledTask -TaskName $task -Confirm:$false -ErrorAction SilentlyContinue
}

# Log cancellation
$logPath = "$env:USERPROFILE\Documents\SmartBandwidthLog.txt"
Add-Content $logPath "$(Get-Date): Cancelled bandwidth control for $AppName"

Write-Output "✅ Bandwidth control cancelled for $AppName."
