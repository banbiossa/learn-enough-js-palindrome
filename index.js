module.exports = Phrase;

String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// Phrase object
function Phrase(content){
  this.content = content;

  this.processor = function(string){
    return string.toLowerCase();
  }

  // processed
  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  // is palindrome
  this.palindrome = function palindrome(){
    // return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  }

}
