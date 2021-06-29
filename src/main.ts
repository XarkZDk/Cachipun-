import * as readline  from "readline"
import * as process  from "process"
import {mainScreen} from "./modules/functions"

export let interf = readline.createInterface(process.stdin,process.stdout)

mainScreen()

















// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("ingrese opcion ",(option: string)=>{
//     console.log(`opcion elegida es ${option}`)
//     process.exit()
// })