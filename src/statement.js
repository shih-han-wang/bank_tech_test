'use strict';

(function(exports){

  function Statement(history){
    this._history = history.reverse();
  };

  Statement.prototype = {

    print: function(){
     console.log(this._headline() + this._historyTable())
    },

    _headline: function(){
      return 'date || credit || debit || balance'
    },

    _historyTable: function(){
      var output = '';
      this._history.forEach(function(history){
        output += ( "\n" + `${history[0]} || ${history[1]} || ${history[2]} || ${history[3]}` )
      })
      return output
    }

  };

  exports.Statement = Statement;

})(this);
