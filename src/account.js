'use strict';

(function(exports){

  function Account(INITIAL_BALAMCE = 0){
    this._balance = INITIAL_BALAMCE;
    this._history = [];
  };

  Account.prototype = {

    balance: function(){
      return this._balance
    },

    history: function(){
      return this._history
    },

    deposit: function(amount, date = new Date()){
      this._balance += amount
      this._history.push(
        [date, amount, '', this._balance]
      );
    },

    withdraw: function(amount, date = new Date()){
      this._balance -= amount
      this._history.push(
        [date, '', amount, this._balance]
      );
    }

  };

  exports.Account = Account;

})(this);
