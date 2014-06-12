'use strict';
// Récupération du namespace
var songPlayer = (function($) {

    function MyPlayer (el) {
        
        this.el = el;
        
        this.init = function () {
            console.log(this.el);
        };
        
        return this.init();
    };
    
    return {
        MyPlayer: MyPlayer
    };
    
})(jQuery);
