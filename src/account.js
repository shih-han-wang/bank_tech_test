'use strict';

(function(exports){

  function Account(INITIAL_BALAMCE = 0, statement = new Statement()){
    this._balance = INITIAL_BALAMCE;
    this._statement = statement;
  };

  Account.prototype = {

    balance: function(){
      return this._balance
    },

    deposit: function(amount, date = new Date()){
      this._balance += amount;
      this._statement.addTransaction("d", amount, this._balance, date);
    },

    withdraw: function(amount, date = new Date()){
      this._balance -= amount;
      this._statement.addTransaction("w", amount, this._balance, date);
    },

    printStatement: function(){
      console.log(this._statement.print());
    }

  };

  exports.Account = Account;

})(this);
