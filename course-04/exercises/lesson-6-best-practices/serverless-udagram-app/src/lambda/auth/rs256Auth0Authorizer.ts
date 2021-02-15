import 'source-map-support/register'
import { APIGatewayTokenAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda';
import { verify } from 'jsonwebtoken'
import { JwtToken } from '../../auth/JwtToken'

const cert = '-----BEGIN CERTIFICATE-----\n' +
    'MIIDDTCCAfWgAwIBAgIJGPmXQ75ZSiVxMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV\n' +
    'BAMTGWRldi1qZWFuZXR0ZS51cy5hdXRoMC5jb20wHhcNMjEwMTIzMjI1NjAxWhcN\n' +
    'MzQxMDAyMjI1NjAxWjAkMSIwIAYDVQQDExlkZXYtamVhbmV0dGUudXMuYXV0aDAu\n' +
    'Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkoAMSoKalik8MsRe\n' +
    '7T/08krbmj1EmVh2RqOKVSoZFiHHfPlXwbsgwIiJ5U6/nHeKgV89RKREkhWPtSCh\n' +
    'KEMpT9OlTMndflDcyKIxbAljbK4WiPQuXIpkTrp8j3AuZNZze4gbQCvTPiy68ygr\n' +
    '4qFN9AbbKK9W4d6ywx4q+8bgfA3aokxLC7jGUulGzmuLmeB7rxflgsaIC319jyj4\n' +
    '6gIYzuxkWh9QwkvQWtRkCgPUO+/8SZsfjsEdPI/5MOwJ92AvDul8wV41y0fFRuh1\n' +
    'yOAzLk+vIpAaX1TCpsMpq/myHrjoBmnr1mHXVdqiwXPIlOYLBnu8cxSSJ6hAB9CN\n' +
    'jQL04wIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQZ4E2S9KkV\n' +
    'i4wRbgn5Enk57vCzADAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB\n' +
    'AHId/Ea4iD2pTN3h9g+0yLQRBTO4qflQ0vpafTt7B6Wlrbd3Fu0JDiIllXb95CoQ\n' +
    'xnkwUMl30Z6DrYv65Ax0JuyxoB7Edvm/RT2II8nWk1Hah3S9Q8y1hl6zRwTlZzHF\n' +
    '5Gs20H1DKig6bkeCU+uJ9KR7+DBxbgQMfjZWiCFxzZC7E1Nn5Ticw08xw3X+JplJ\n' +
    'frEIgMeksaDZX2ymt9HJ44RkTkrN8q39cl+ev/SrHFdc4ndUEBxjDG0iFyEEUad4\n' +
    '8FKZsJLKfBzhNMfIwg60fjtwYqSBOQ0MFVEZfwo+FlRXQAmgdQexsLDPF9Wqbbx2\n' +
    'tORpIe6vj+z6oeS0fkZGjfA=\n' +
    '-----END CERTIFICATE-----'

export const handler = async(event: APIGatewayTokenAuthorizerEvent): Promise<CustomAuthorizerResult> => {
    try {
        const decodedToken = verifyToken(event.authorizationToken)
        console.log('User was authorized', decodedToken)

        return {
            principalId: decodedToken.sub,
            policyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Action: 'execute-api:Invoke',
                        Effect: 'Allow',
                        Resource: '*'
                    }
                ]
            }
        }
    } catch (e) {
        console.log('User was not authorized', e.message)

        return {
            principalId: 'user',
            policyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Action: 'execute-api:Invoke',
                        Effect: 'Deny',
                        Resource: '*'
                    }
                ]
            }
        }
    }
}


function verifyToken(authHeader: string): JwtToken {
    if (!authHeader)
        throw new Error('No authentication header')

    if (!authHeader.toLowerCase().startsWith('bearer '))
        throw new Error('Invalid authentication header')

    const split = authHeader.split(' ')
    const token = split[1]

    return verify(token, cert, { algorithms: ['RS256'] }) as JwtToken
}




