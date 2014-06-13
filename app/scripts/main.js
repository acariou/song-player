'use strict';
/** Ici on utilise pas un objet mais une closure déclaré à l'aide d'une 
  * variable afin d'émuler une notion de module
  */
var songPlayer = (function($) {

    /**
      * Constructeur de l'objet player
      */
    function MyPlayer (el) {
        
        this.el = el;
        this.$el = $(el);
        
        this.init = function () {
            console.log(this.$el);
            this._create();
        };
        this._create = function () {
            var player = document.querySelectorAll(this.el);
            console.log(player);
            player.pause();
        };
        
        return this.init();
    }
    
    return {
        MyPlayer: MyPlayer
    };
    
})(jQuery);
