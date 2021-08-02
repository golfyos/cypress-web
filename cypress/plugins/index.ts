/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    const env = config.env.environment
    const url = config.env.url

    if (env === 'integration') {
        config.baseUrl ??= url
    } else {
        config.baseUrl ??= `http://${env}-${url}`
    }

    return config
}
