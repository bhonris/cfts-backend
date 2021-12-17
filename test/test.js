let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let utilFunc = require('../utilFunc');
chai.use(chaiHttp);
const {request, expect} = chai
describe("Test API calls", () => {
  it("it should GET all the books", (done) => {
    request(server)
        .get('/getOldestPerson')
        .end((err, res) => {
              expect(res).have.status(200);
              expect(res.body).be.a('object');
              expect(res.body.age).eql(25);
          done();
        });
  });
});

const { add } = utilFunc
describe("Test Util Functions", () => {
  it("Can add two numbers", () => {
    const result = add(2,2);
    expect(result).equal(4)
  })

  it("should be able to handle 1 number", () => {
    const result = add(2);
    expect(result).equal(2)
  })
})