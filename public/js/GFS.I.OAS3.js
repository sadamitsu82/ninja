/*////////////////////////////////////////////

GFS.I.OAS3

Connecting Socket.IO <--> AS3
Make It Easy!

I'm respect...
http://www.isosio.com/

Autor	glassesfactory
Date	2011/10/15

twitter:@glasses_factory
github:https://github.com/glassesfactory

Copyright 2011 glasses factory
http://glasses-factory.net

/*////////////////////////////////////////////

(function(){
    if(window.GFSIOAS3){
        return;
    }
    else{
        var GFSIOAS3 = window.GFSIOAS3 = function(swfID) {
            this.swfID = swfID;
            this.sockets = {};
            this.hosts = {};
            this.listeners = {};
        };

        GFSIOAS3.prototype.createSocket = function(ns, host, socketPort, connectFunc ) {
            if( ns == '' || ns == undefined ){
                ns = '/';
            }

            if( !(host in this.hosts )) {
                this.hosts[ns] = { host:host, port:socketPort };
            }

            var socket = io.connect('http://' + host + ns, {port:socketPort});
            if( connectFunc == undefined ) {
                socket.on('connect', function(){
                    GFSIOAS3.dispatch( 'connect', ns );
                });
            }
            this.sockets[ns] = socket;
        };

        GFSIOAS3.prototype.disconnect = function(ns) {
            if( ns == "" || ns == undefined ) {
                ns = "/";
            }
            if( !( ns in this.sockets )){ return; }
            this.sockets[ns].disconnect();
            delete this.sockets[ns];
        };


        GFSIOAS3.prototype.emit = function( event, msg, ns) {
            if( ns == undefined || ns == "") { ns = "/"; }

            if(!(ns in this.sockets)) {
               this.createSocket( ns, this.hosts[ns].host, this.hosts[ns].port);
            }

            if( 'object' == typeof msg && event == null ){ return; }
            if( 'string' == typeof msg && event == null ){ this.sockets[ns].emit(msg);}
            else{
                this.sockets[ns].emit(event, msg);
            }
        };

        GFSIOAS3.prototype.isInit = function(){
            var result = false;
            if( window.io != undefined || io != undefined ){
                result = true;
            }
            this.__swfName(this.swfID).isInit(result);
        }

        GFSIOAS3.prototype.send = function( data, ns ) {
            if( ns == undefined || ns == '') { ns = '/'; }
            if( !( ns in this.sockets )){ return; }

            this.sockets[ns].send(data);
        };


        GFSIOAS3.prototype.addEvent = function(type, listener, ns) {
            if( ns == undefined  || ns == ''){ ns = '/'; }
            if( listener == undefined || listener == null ){
                listener = function(data){
                    GFSIOAS3.dispatch(type, ns, data);
                };
                this.listeners[ns] = { type:type, listener:listener };
            }
            this.sockets[ns].on(type, this.listeners[ns].listener );
        };

        GFSIOAS3.prototype.removeEvent = function(type, listener, ns ) {
            if( ns == undefined || ns == '' ){ ns = '/' ;}
            if( !(ns in this.listeners)){ return; }
            else{
                if( type in this.listeners[ns] ){
                    if( this.listeners[ns].listener == listener ) {
                        this.sockets[ns].removeListener(this.listeners[ns].type, this.listenres[ns].listener );
                    }
                    else{
                        return;
                    }
                }
                else{
                    return;
                }
            }
        };

        GFSIOAS3.prototype.dispatch = function(event, ns, data) {
            this.__swfName(this.swfID).dispatchAS3(event, ns, data);
        };

        GFSIOAS3.prototype.__swfName = function(name) {
            return navigator.appName.indexOf('Microsoft')!=-1?window[name]:document[name];
        };

        GFSIOAS3.init = function(swfID) {
            GFSIOAS3 = window.GFSIOAS3 = new GFSIOAS3(swfID);
        };
    }
})();