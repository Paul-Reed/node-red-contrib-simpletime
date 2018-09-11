module.exports = function(RED) {
    function SimpleTimeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
        dt = d.toDateString();
        e = d.getTime();
        h = (d.getHours());
        m = (d.getMinutes());
        mn = (monthNames[d.getMonth()]);
        dy = (dayNames[d.getDay()]);
        dt = d.getDate();
        yr = d.getFullYear();
        
        if (m < 10) {
           var min = '0' + m;
           }
           else (min = m);
        s = (d.getSeconds());
        if (s < 10) {
           var sec = '0' + s;
           }
           else (sec = s);
        var tm = (h+":"+min);
        var tms = (h+":"+min+":"+sec);
        var ms = (min+":"+sec);

        msg.myyear = yr;
        msg.mymonth = mn;
        msg.mydom = dt;
        msg.myday = dy;
        msg.myhour = h;
        msg.mytime = tm;
        msg.mytimes = tms;
        msg.myminute = m;
        msg.myminutes = ms;
        msg.mysecond = s;
        msg.myepoch = e;
        msg.myrawdate = d;

        node.send(msg);
        });
    }
    RED.nodes.registerType("simpletime",SimpleTimeNode);
}
