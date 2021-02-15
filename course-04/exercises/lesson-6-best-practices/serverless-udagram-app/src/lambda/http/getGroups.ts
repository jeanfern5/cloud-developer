import 'source-map-support/register'
import { getAllGroups } from '../../businessLogic/groups';
import * as express from 'express'
import * as cors from 'cors';
import * as awsServerlessExpress from 'aws-serverless-express'

const app = express()
app.use(cors())

app.get('/groups', async (_req, res) => {
    // TODO: get all groups as before - completed
    const groups = await getAllGroups()

    // Return a list of groups
    res.json({
        items: groups
    })
})

// Create Express server
const server = awsServerlessExpress.createServer(app)
// Pass API Gateway events to the Express server
exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }

