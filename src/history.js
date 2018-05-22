'use strict';

(function(exports){

  function History(){
    this._transactions = []
  };

  History.prototype = {

    add: function(action, amount, balance, date, transaction = new Transaction(action, amount, balance, date)){
      this._transactions.unshift(transaction)
    }

  };

  exports.History = History;

})(this);
