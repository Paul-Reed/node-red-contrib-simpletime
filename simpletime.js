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
        msg.myrawdate = d;
        msg.myepoch = e;
        msg.mydate = dt;
        msg.myhours = h;
        msg.myminutes = m;
        msg.myseconds = s;
        msg.mytime = tm;
        msg.mytimes = tms;

        node.send(msg);
        });
    }
    RED.nodes.registerType("simpletime",SimpleTimeNode);
}
