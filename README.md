node-red-contrib-simpletime
====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node that is extremely lightweight and which can be inserted in any running flow, and adds time and date payloads with various formatting options, which can be retreived and used later in the flow.

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-simpletime


Usage
-----


### Inputs

Any existing payloads or topics being injected into simpletime will pass unaltered through the node.

### Outputs

In addition to any existing payloads, a number of additional payloads will be added, which can be utilised later in the flow.

### Details

The additional payloads added to the flow, and their typical content format are;

* msg.myrawdate: "2017-11-08T20:36:26.257Z"
* <li>msg.myepoch: 1510173386257
* <li>msg.mydate: "Wed Nov 08 2017"
* <li>msg.myhours: "20"
* <li>msg.myminutes: "36"
* <li>msg.myseconds: "26"
* <li>msg.mytime: "20:36"
* <li>msg.mytimes: "20:36:26"

To introduce any of the messages into a flow, simply assign any, or any combination of the messages into a variable, such as; <code>var seconds = msg.myseconds;</code> or to use in a ui_text node add via mustache <code>{{msg.mytimes}}</code>

For more advanced timezone handling, <code>node-red-contrib-moment</code> is recommended.
