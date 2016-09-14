var Noodle = require('./core');
var each = require('array-like/utils').each;
Noodle.setAccessor('addEventListener',function(eventType,fn,options){
    var events = eventType.split(" ");
    var args = arguments;
    this.forEach(function(item){
        each(events,function(event){
            item.addEventListener(event,fn,options);
        });
    });
    return fn;
});
Noodle.setAccessor('removeEventListener',function(eventType, fn,options){
    var events = eventType.split(" ");
    this.forEach(function(item){
        each(events,function(event){
            item.removeEventListener(event,fn,options);
        });
    });
});
Noodle.setMutator('one',function(eventType,fn,options){
    var events = eventType.split(" ");
    var eventCb = function(event){
        fn.call(this, event);
        this.$removeEventListener(eventType,eventCb,options);
    };
    var args = arguments;
    this.$addEventListener(eventType,eventCb,options);
    return eventCb;
});
Noodle.setMutator('on',function(eventType, elementQuerySelector, fn,options){
    var eventCb = function(event){
        var qs = this.querySelectorAll(elementQuerySelector);
        if (qs) {
            var el = event.target, index = -1;
            while(el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                el = el.parentElement;
            }
            if (index > -1) {
                fn.call(el, event);
            }
        }
    };
    this.$addEventListener(eventType,eventCb,options);
    return eventCb;
});
