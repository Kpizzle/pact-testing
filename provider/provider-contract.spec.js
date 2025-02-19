const { Verifier } = require('@pact-foundation/pact')

const port = '3001'

const options = {
    provider: 'MoviesAPI',
    providerBaseUrl: `http://localhost:${port}`,
    pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    providerVersion: '1.0.0',
    publishVerificationResult: true,
    consumerVersionTags: ['main']
}

const verifier = new Verifier(options)

describe('Pact Verification', () => {
    it('should validate the expectations of movie-consumer', () => {
        return verifier.verifyProvider().then(output => {
            console.log('Pact verification complete')
            console.log('Results', output)
        })
    });
});