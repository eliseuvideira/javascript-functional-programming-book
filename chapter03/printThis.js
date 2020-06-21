function PrintThis(identity) {
  this.identity = identity;

  (function () {
    console.log(1, this.identity);
  })();

  (() => {
    console.log(2, this.identity);
  })();

  const self = this;
  (function () {
    console.log(3, self.identity);
  })();

  (function () {
    console.log(4, this.identity);
  }.bind(this)());
}

const printThis = new PrintThis("this");
