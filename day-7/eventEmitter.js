/* Problem 34: Event Emitter  [Medium]
Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
Example:
const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
Hint: Store listeners in an object where keys are event names and values are arrays of functions.
 */

