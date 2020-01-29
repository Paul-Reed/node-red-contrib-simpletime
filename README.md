node-red-contrib-simpletime
====================
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads per month][npm-downloads-month-image]][npm-url]
[![NPM downloads total][npm-downloads-total-image]][npm-url]
[![MIT License][license-image]][license-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

* msg.mydate: "Tue Sep 11 2018"
* msg.myyear: "2018"
* msg.mymonth: "Sep"
* msg.mymonthn: "09"
* msg.mydom: "11"
* msg.myday: "Tue"
* msg.myhourpm: "7"
* msg.myhour: "19"
* msg.mytime: "19:51"
* msg.mytimes: "19:51:17"
* msg.myminute: "51"
* msg.myminutes: "51:17"
* msg.mysecond: "17"
* msg.mymillis: "985"
* msg.myepoch: "1536691877064"
* msg.myrawdate: "2018-09-11T18:51:17.064Z"
* msg.mypm: "PM"

To introduce any of the messages into a flow, simply assign any, or any combination of the messages into a variable, such as; <code>var seconds = msg.myseconds;</code> or to use in a ui_text node add via mustache <code>{{mytimes}}</code>  
More advanced date formats can also be constructed, such as <code>{{mytime}}hrs - {{mydom}}/{{mymonth}}</code> to get "20:10hrs - 11/Sep", or <code>{{myhourpm}}:{{myminute}}{{mypm}}</code> to get "8.10PM"

For more advanced timezone handling, <code>node-red-contrib-moment</code> is recommended.

[license-image]: https://img.shields.io/badge/license-Apache%202-blue
[license-url]: https://github.com/Paul-Reed/node-red-contrib-simpletime/master/LICENSE
[npm-url]: https://www.npmjs.com/package/node-red-contrib-simpletime
[npm-version-image]: https://img.shields.io/npm/v/node-red-contrib-simpletime.svg
[npm-downloads-month-image]: https://img.shields.io/npm/dm/node-red-contrib-simpletime.svg
[npm-downloads-total-image]: https://img.shields.io/npm/dt/node-red-contrib-simpletime.svg
