'use strict';

(function(exports){

  function Account(INITIAL_BALAMCE = 0){
    this._balance = INITIAL_BALAMCE
  };

  Account.prototype = {

    balance: function(){
      return this._balance
    }

  };

  exports.Account = Account;

})(this);
