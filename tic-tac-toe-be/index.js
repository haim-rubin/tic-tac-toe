import { run } from './src/server.js'
import { runDotenvOnDev } from './util/helpers.js'
runDotenvOnDev()
run({ port: process.env.PORT })
