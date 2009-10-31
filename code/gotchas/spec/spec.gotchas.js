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
end

