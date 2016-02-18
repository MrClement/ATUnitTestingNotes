var unirest = require('unirest');
var expect = require('chai').expect;


describe('API Status', function() {
  it('should be live', function(done) {
    unirest.get('http://localhost:8001/pun-database').end(function(res){
      expect(res.status).to.equal(200);
      done();
    });
  });
  it('gets a random pun', function(done){
    unirest.get('http://localhost:8001/pun-database/random').end(function(res){
      expect(res.body.pun).to.not.be.undefined;
      done();
    });
  });
});
