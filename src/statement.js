'use strict';

(function(exports){

  function Statement(transactions){
    var display = 'date || credit || debit || balance'
    transactions.forEach(function(t){
      if (t._action === 'd'){
        display += ( "\n" + `${t._date} || ${floatToTwo(t._amount)} ||  || ${floatToTwo(t._balance)}` )
      }else if(t._action === 'w'){
        display += ( "\n" + `${t._date} ||  || ${floatToTwo(t._amount)} || ${floatToTwo(t._balance)}` )
      }
    });
    return display;
  };

  function floatToTwo(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  exports.Statement = Statement;

})(this);
