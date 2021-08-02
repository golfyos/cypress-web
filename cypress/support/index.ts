import './commands.ts'

const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test: Cypress.ObjectLike, runnable: Mocha.Test) => {
    if (test.state === 'failed') {
        const screenshotFileName: string = `${runnable.parent.title} -- ${test.title} (failed).png`
        addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
    }
})
