class Service {
    constructor({ location, path = '/', targetHost = '$hostname', targetPort }) {
        this.path = path
        this.targetHost = targetHost
        this.targetPort = targetPort
        this.location = location
    }

    isValid() {
        return !!(this.location && this.targetPort)
    }
}

const envPatterns = {
    location: /SERVICE_(\w+)_LOCATION/,
    path: /SERVICE_(\w+)_PATH/,
    host: /SERVICE_(\w+)_HOST/,
    port: /SERVICE_(\w+)_PORT/,
}

function execRegexSafe(regex, target) {
    const result = regex.exec(target)
    return result !== null ? result[1] : null
}

class EnvParser {
    findServices () {
        const services = {}
        Object.keys(process.env).forEach(varName => {
            Object.keys(envPatterns).forEach(pattern => {
                const service = execRegexSafe(envPatterns[pattern], varName)
                if (varName.startsWith('SERVICE')) {
                    console.log(varName, service, pattern)
                }
                if (service) {
                    if (!services[service]) {
                       services[service] = new Service({})
                       console.log('Adding service', service)
                    }
                    services[service][pattern] = process.env[varName]
                }
            })
        })
        Object.entries(services).forEach(([serviceName, service]) => {
           console.log(service, service.isValid())
           if(!service.isValid()) {
               delete services[serviceName]
           }
        })
        return services
    }
}

module.exports = {
    Service,
    EnvParser
}