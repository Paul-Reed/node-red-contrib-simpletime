module.exports = function(RED) {
    function SimpleTimeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.mydate = config.mydate;
        if (this.mydate === undefined) { this.mydate = true; }
        this.myymd = (config.myymd === undefined) ? true : config.myymd;
        this.myyear = config.myyear;
        this.mymonth = config.mymonth;
        this.mymonthn = config.mymonthn;
        this.mydom = config.mydom;
        this.mydoy = config.mydoy;
        this.myday = config.myday;
        this.myhourpm = config.myhourpm;
        this.myhour = config.myhour;
        this.mytime = config.mytime;
        this.mytimes = config.mytimes;
        this.myminute = config.myminute;
        this.myminutes = config.myminutes;
        this.mysecond = config.mysecond;
        this.mymillis = config.mymillis;
        this.myepoch = config.myepoch;
        this.myrawdate = config.myrawdate;
        this.mypm = config.mypm;
        node.on('input', function(msg) {
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var d = new Date();
        dts = d.toDateString() ;
        e = d.getTime();
        mnu = pad(d.getMonth()+1, 2);
        mnt = (d.getMonth());
        mn = (monthNames[mnt]);
        dy = (dayNames[d.getDay()]);
        dt = pad(d.getDate(), 2);
        yr = d.getFullYear();
        hr = d.getHours();
        mi = d.getMinutes();
        ny = Math.ceil((d - new Date(d.getFullYear(),0,1)) / 86400000);
        h = pad(hr, 2);
        m = pad(mi, 2);
        s = pad(d.getSeconds(), 2);
        mil = pad(d.getMilliseconds(), 3);

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
        if (this.mydate) {
            msg.mydate = dts;
        };
        if (this.myymd) {
            msg.myymd = '' + yr + '-' + mnu + '-' + dt;
        };
        if (this.myyear) {
            msg.myyear = ''+yr;
        };
        if (this.mymonth) {
            msg.mymonth = mn;
        };
        if (this.mymonthn) {
            msg.mymonthn = mnu;
        };
        if (this.mydom) {
            msg.mydom = dt;
        };
        if (this.mydoy) {
            msg.mydoy = ''+ny;
        };
        if (this.myday) {
            msg.myday = dy;
        };
        if (this.myhourpm) {
            msg.myhourpm = thr;
        };
        if (this.myhour) {
            msg.myhour = h;
        };
        if (this.mytime) {
            msg.mytime = hm;
        };
        if (this.mytimes) {
            msg.mytimes = hms;
        };
        if (this.myminute) {
            msg.myminute = m;
        };
        if (this.myminutes) {
            msg.myminutes = ms;
        };
        if (this.mysecond) {
            msg.mysecond = s;
        };
        if (this.mymillis) {
            msg.mymillis = mil;
        };
        if (this.myepoch) {
            msg.myepoch = ''+e;
        };
        if (this.myrawdate) {
            msg.myrawdate = d;
        };
        if (this.mypm) {
            msg.mypm = amp;
        };
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
