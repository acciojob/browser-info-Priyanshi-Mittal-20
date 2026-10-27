//your JS code here. If required.
function browserInfo()
{
	let name=navigator.appName
	let version=navigator.appVersion
	let item= document.getElementById("browser-info")
	item.innerText=`You are using ${name} version ${version}`
}