'use strict';

(function(exports){

  function Statement(transactions){
    var display = 'date || credit || debit || balance'
    transactions.forEach(function(t){
      if (t._action === 'd'){
        display += ( "\n" + `${t._date} || ${t._amount} ||  || ${t._balance}` )
      }else if(t._action === 'w'){
        display += ( "\n" + `${t._date} ||  || ${t._amount} || ${t._balance}` )
      }
    });
    return display;
  };

  exports.Statement = Statement;

})(this);
