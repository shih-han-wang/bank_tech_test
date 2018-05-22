'use strict';

describe('History', function(){

  var history;
  var fakeTransaction = {
    _action: 'd',
    _amount: 100,
    _balance: 100,
    _date: '22/05/2018'
  }

  beforeEach(function(){
    history = new History();
  });

  describe('add function', function(){
    it('push fakeTransaction object to array', function(){
      history.add('d', 100, 100, '22/05/2018', fakeTransaction)
      console.log(history._transactions)
      expect(history._transactions[0]).toEqual(fakeTransaction);
    });
  });

});
