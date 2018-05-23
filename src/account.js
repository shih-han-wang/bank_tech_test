'use strict';

(function(exports){

  function Account(INITIAL_BALAMCE = 0, history = new History() ){
    this._balance = INITIAL_BALAMCE;
    this._history = history;
  };

  Account.prototype = {

    balance: function(){
      return this._balance
    },

    deposit: function(amount, date = new Date()){
      this._balance += amount;
      this._history.add("d", amount, this._balance, date);
      return this._balance
    },

    withdraw: function(amount, date = new Date()){
      this._balance -= amount;
      this._history.add("w", amount, this._balance, date);
      return this._balance
    },

    printStatement: function(statement = Statement, transactions = this._history._transactions){
      console.log(statement(transactions));
    }

  };

  exports.Account = Account;

})(this);
