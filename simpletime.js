module.exports = function(RED) {
    function SimpleTimeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
        var ts = msg.timestamp || Date.now();
        var d = new Date(ts);
        dt = d.toDateString();
        e= d.getTime();
        var a = d.toJSON().split(/\D+/);
        var h = a[3];
        var m = a[4];
        var s = a[5];
        var tm = (h+":"+m);
        var tms = (h+":"+m+":"+s);
        var ms = (m+":"+s);
        msg.myrawdate = d;
        msg.myepoch = e;
        msg.mysecond = s;
        msg.myminute = m;
        msg.myminutes = ms;
        msg.myhour = h;
        msg.mytime = tm;
        msg.mytimes = tms;
        msg.mydate = dt;

        node.send(msg);
        });
    }
    RED.nodes.registerType("simpletime",SimpleTimeNode);
}
