import express from 'express';
import { Issuer } from 'openid-client';

const app = express();
const port = 8080;

Issuer.discover('https://keycloak-keycloak.devops-prereqs-44-a01ee4194ed985a1e32b1d96fd4ae346-0000.us-east.containers.appdomain.cloud/auth/realms/master/.well-known/openid-configuration')
    .then(keycloakIssuer => {
        console.log('Discovered issuer %s %O', keycloakIssuer.issuer, keycloakIssuer.metadata);

        const client = keycloakIssuer.Client({
            client_id: ``,
            client_secret: ``,
            
        })
    })

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})