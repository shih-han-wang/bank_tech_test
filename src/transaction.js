'use strict';

(function(exports){

  function Transaction(action, amount, balance, date){
    this._action = action;
    this._amount = amount;
    this._balance = balance;
    this._date = date;
  };

  exports.Transaction = Transaction;
})(this);
