module.exports = function(RED) {
    function SimpleTimeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
        var d = new Date();
        dt = d.toDateString();
        e = d.getTime();
        h = (d.getHours());
        m = (d.getMinutes());
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
