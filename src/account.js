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
      this._historyUpdate('d', amount, date)
    },

    withdraw: function(amount, date = new Date()){
      this._balance -= amount
      this._historyUpdate('w', amount, date)
    },

    _historyUpdate: function(action, amount, date){
      if(action === 'd'){
        this._history.push(
          [date, amount, '', this._balance]
        );
      }else if(action === 'w'){
        this._history.push(
          [date, '', amount, this._balance]
        );
      };
    }

  };

  exports.Account = Account;

})(this);
