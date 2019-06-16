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
        hr = d.getHours();
        mi = d.getMinutes();
        
        h = pad(hr, 2);
        m = pad(mi, 2);
        s = pad(d.getSeconds(), 2);
       
        // Get hour in 12hr format 
        if (hr===0){thr=12;}
            else if (hr>12){thr=hr-12;}
                else {thr=hr;}
                thr='' + thr;

        // Calculate if AM or PM
        var amp = ((hr*60)+mi);
            if (amp<720){amp="AM";}
                else {amp="PM";}
        
        var hm = (h+":"+m);
        var hms = (h+":"+m+":"+s);
        var ms = (m+":"+s);
        
        msg.mydate = dts;
        msg.myyear = ''+yr;
        msg.mymonth = mn;
        msg.mymonthn = mnu;
        msg.mydom = dt;
        msg.myday = dy;
        msg.myhourpm = thr;
        msg.myhour = h;
        msg.mytime = hm;
        msg.mytimes = hms;
        msg.myminute = m;
        msg.myminutes = ms;
        msg.mysecond = s;
        msg.myepoch = ''+e;
        msg.myrawdate = d;
        msg.mypm = amp;
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
