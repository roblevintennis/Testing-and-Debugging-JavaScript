describe 'JavaScript Gotchas'
    before
	gotchas = new Gotchas 
    end
    describe 'parseInt Weirdness'
	it 'should ignore any non-integer characters and discard anything after first non-integer' 
	    gotchas.callParseInt('82I_AM_IGNORED_1234', 10).should.eql 82
	    gotchas.callParseInt('82#$I_AM_IGNORED_1234', 10).should.eql 82
	    gotchas.callParseInt('1010_binary_too!_1234', 2).should.eql 10
	end
	it 'should return zero for 08 and 09' 
	    gotchas.callParseInt('08', undefined).should.eql 0
	    gotchas.callParseInt('09', undefined).should.eql 0
	    gotchas.callParseInt('09').should.eql 0
	    gotchas.callParseInt('09000', undefined).should.eql 0
	    gotchas.callParseInt('090jibberish00', undefined).should.eql 0
	    gotchas.callParseInt('08', 10).should.eql 8 
	end
    end
    describe '== type coercion example from Crockford Good Parts'
	it 'should show that double equals type coercion is complicated and "unmemorable"'
	    ('' == '0').should.eql false
	    (0 == '').should.eql true
	    ('0' == 0).should.eql true
	    (false == 'false').should.eql false
	    (false == '0').should.eql true
	    (false == undefined).should.eql false
	    (false == null).should.eql false
	    (null == undefined).should.eql true
	    (' \t\r\n ' == 0).should.eql true
	end
    end
    describe 'reserved words in object literals'
	it 'should not allow reserved words to be used as names in object literals'
	    var obj = {
	      'case': 'case',
	      'return': 'return'
	    };
	    obj['case'].should.eql 'case'
	    obj['return'].should.eql 'return'
	end
    end
end

