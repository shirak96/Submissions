
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

tasks = [
  'task 1',
  'task 2',
  'task 3'
]

function onDataReceived(text)
{
  text= text.replace('\n','').trim();
  var commands = text.split(" ");
  //console.log(commands[1]);
 // console.log("THis is me:"+text)
 //console.log(commands)
  if( commands[0]=== 'hello'){
    hello( commands[1]);
  }
  else if  (commands[0] === 'quit') {
    quit();
  }
  
  else if(commands[0] === 'exit'){
    exit();
  }
  else if(commands[0] === 'help'){commands
      help();
  }

  else if(commands[0] === 'list'){
    list();
  }
  else if(commands[0] === 'add\n'){
    console.log("error")
  }
  else if(commands[0] === 'add' && commands.length >1 ){
    var myString = "";
    for(let i = 1; i < commands.length; i++){
      myString += commands[i] + " ";
    }
    tasks.push(myString)
  }

  else if  (commands[0] === 'remove') {
    remove(commands);}

  // else if  (commands[0] === 'remove1') {
  //   remove1();}

  // else if  (commands[0] === 'remove2') {
  //     remove2();}  
    
  
      else{
    unknownCommand(commands[0]);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x){
  if(!x){
    console.log('hello!')
  }
  else
    console.log('hello'+  " "  + x + '!')
}
/**
 * displays possible command options !
 *
 * @returns {void}
 */
function help(){
  console.log('possible commands are hello, hello "random name", remove, remove1, remove2, exit, & quit ')
}

function remove(e){
  var n = e[1];
  //console.log(n)
  if (e.length==1){
    tasks.pop()
  }
  else if (n<tasks.length){
    tasks.splice(n-1,1)
  }
  else{
    console.log('this number dose not exist')
  }
 
}

// function remove1(){
//   tasks.shift()
//  }

//  function remove2(){
//   tasks.splice(1, 1)
//  }

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function exit(){
  console.log('Exiting now, goodbye!')
  process.exit();
}

function list(){

  for(var i = 0; i < tasks.length; i++)
  {
  console.log((i+1)+ " " +tasks[i])
  }

}

// The following line starts the application
startApp("shirak kevork")
