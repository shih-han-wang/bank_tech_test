'use strict';

(function(exports){

  function Statement(history = new History()){
    this._history = history;
  };

  Statement.prototype = {

    addTransaction: function(action, amount, balance, date){
      this._history.add(action, amount, balance, date)
    },

    print: function(){
      var display = 'date || credit || debit || balance'
      this._history._transactions.forEach(function(t){
        if (t._action === 'd'){
          display += ( "\n" + `${t._date} || ${t._amount} ||  || ${t._balance}` )
        }else if(t._action === 'w'){
          display += ( "\n" + `${t._date} ||  || ${t._amount} || ${t._balance}` )
        }
      });
      return display;
    }

  };

  exports.Statement = Statement;

})(this);
