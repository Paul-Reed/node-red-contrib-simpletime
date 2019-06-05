module.exports = function(RED) {
    function SimpleTimeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
        dts = d.toDateString();
        e = d.getTime();
        mnu = pad(d.getMonth()+1, 2);
        mnt = (d.getMonth());
        mn = (monthNames[mnt]);
        dy = (dayNames[d.getDay()]);
        dt = pad(d.getDate(), 2);
        yr = d.getFullYear();

        h = pad(d.getHours(), 2);
        m = pad(d.getMinutes(), 2);
        s = pad(d.getSeconds(), 2);

        var hm = (h+":"+m);
        var hms = (h+":"+m+":"+s);
        var ms = (m+":"+s);
        
        msg.mydate = dts;
        msg.myyear = yr;
        msg.mymonth = mn;
        msg.mymonthn = mnu;
        msg.mydom = dt;
        msg.myday = dy;
        msg.myhour = h;
        msg.mytime = hm;
        msg.mytimes = hms;
        msg.myminute = m;
        msg.myminutes = ms;
        msg.mysecond = s;
        msg.myepoch = e;
        msg.myrawdate = d;

        node.send(msg);
        });
    }
 
    function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
    }
    
    RED.nodes.registerType("simpletime",SimpleTimeNode);
}
