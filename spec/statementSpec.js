'use strict';

describe('Statement', function(){

  var statement;

  beforeEach(function(){
    statement = new Statement();
  });

  describe('print', function(){
    it('add transaction into history', function(){
      statement.addTransaction('d', 1000, 1000, '02/02/2022')
      statement.addTransaction('w', 500, 500, '03/02/2022')
      var expectOutput =
        'date || credit || debit || balance' + "\n" +
        '03/02/2022 ||  || 500 || 500' + "\n" +
        '02/02/2022 || 1000 ||  || 1000'
      expect(statement.print()).toEqual(expectOutput);
    });
  });

});
