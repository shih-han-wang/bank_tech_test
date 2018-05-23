'use strict';

describe('Account', function(){

  var account;
  var history;
  var statement;
  var transactions;

  beforeEach(function(){
    history = {
      add: function(value){
        return value
      },
      _transactions:function(){
        return []
      }
    };
    transactions = {
      forEach: function(){
      }
    };
    account = new Account(0, history);
    spyOn(history, 'add')
    spyOn(history, '_transactions')
    spyOn(console, 'log');
  });

  describe('balance', function(){
    it('return balance', function(){
      expect(account.balance()).toEqual(0);
    });
  });

  describe('deposit', function(){
    it('return balance', function(){
      expect(account.deposit(10)).toEqual(10);
      expect(account._history.add).toHaveBeenCalled();
    });
  });

  describe('withdraw', function(){
    it('return balance', function(){
      account.deposit(1000)
      expect(account.withdraw(500)).toEqual(500);
      expect(account._history.add).toHaveBeenCalled();
    });
  });

  describe('print statement', function(){
    it('return the history statement', function(){
      account.printStatement(statement, transactions)
      expect(console.log).toHaveBeenCalled();
    });
  });
  
});
