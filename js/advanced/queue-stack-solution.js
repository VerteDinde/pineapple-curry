// Implement a queue using two stacks.

// queuepop()
//   value ← stack.pop()
//   if stack is empty
//     return value
//   else
//     result ← queuepop()
//     stack.push(value)
//     return result

/**
 * Creates a queue implemented with two stacks.
 * @constructor
 */
function TwoStackQueue() {
  this.inbox = [];
  this.outbox = [];
}

/**
 * Push a value to the queue.
 * @param {*} value The value to push.
 */
TwoStackQueue.prototype.push = function (value) {
  this.inbox.push(value);
};

/**
 * Pops a value from the queue and returns it.
 * @return {*} The popped value.
 */
TwoStackQueue.prototype.pop = function () {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

module.exports = TwoStackQueue;