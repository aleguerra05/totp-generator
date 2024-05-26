import {TOTP} from 'totp-generator'
import { readFileSync } from 'fs'
import { exit } from 'process'

let keys = [{
    account: 'UNDEFINED',
    token: 'CCCCCCCCCCCCCCCC'
}]

try {
    const settings = readFileSync('./settings.json')
    keys = JSON.parse(settings).keys
} catch (error) {
    console.log('No settings file found (settings.json)')
    exit(0)
}

while (true) {
    console.clear()
    console.log('.........TOTP GENERATOR.........')
    keys.forEach(element => {
        GenerateOTP(element.account, element.token)
    })

    let nextIn = 0
    let secondsNow = new Date().getSeconds()
    nextIn = secondsNow < 30 ? 30 - secondsNow : 60 - secondsNow
    while (nextIn > 1) {
        secondsNow = new Date().getSeconds()
        nextIn = secondsNow < 30 ? 30 - secondsNow : 60 - secondsNow
        process.stdout.write('\r'+new Date().toTimeString()+' Next in: '+nextIn+' seconds...')
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}

function GenerateOTP(account, token) {
    const { otp } = TOTP.generate(token)
    console.log(account)
    console.log(otp)
}

