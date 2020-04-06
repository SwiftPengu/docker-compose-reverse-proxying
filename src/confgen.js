const fs = require('fs').promises
const { EnvParser } = require('./env')

const pRedirTemplate = fs.readFile('./http_redirect.template', 'utf8')
const pServerTemplate = fs.readFile('./http_server.template', 'utf8')
const pServiceTemplate = fs.readFile('./http_service.template', 'utf8')

const main = async () => {
    try {
        // const redirTemplate = await pRedirTemplate
        // const serverTemplate = await pServerTemplate
        // const serviceTemplate = await pServiceTemplate

        const envParser = new EnvParser()
        console.log(envParser.findServices())
    } catch (err) {
        console.log(err)
        console.error(err)
        process.exit(1)
    }
    return "Config generated!"
}

main().then(console.log).catch(console.error).then(() => process.exit(0))
console.log('Started!')