// use default as skillshub and argument as strack
var args = process.argv.slice(2);
var currentSettingsApp = { appname: '', port: 0 };
args.forEach(function (val, index, array) {
    if (val.indexOf('appname=') !== -1) {
        console.log('appname argument:', val)
        currentSettingsApp.appname = val.replace('appname=', '');
    }
    if (val.indexOf('port=') !== -1) {
        console.log('port argument:', val)
        currentSettingsApp.port = val.replace('port=', '');
    }
});
if (currentSettingsApp.appname === undefined) {
    currentSettingsApp.appname = 'skillshub';
}

//currentSettingsApp.port = process.env.PORT || (currentSettingsApp.appname === 'strack' ? 3535 : 2525);

console.log('setting:', currentSettingsApp)
module.exports.currentAppName = currentSettingsApp;




