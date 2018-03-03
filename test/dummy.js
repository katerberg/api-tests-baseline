import chakram, {expect} from 'chakram';

describe('Dummy', () => {
    it('can connect ot the internet', () => {
        const response = chakram.get('http://www.google.com');
        return expect(response).to.have.status(200);
    });
});
