$(document).ready( function(){
  var books = [new Book('Moby Dick', 'Herman Melville'), new Book("Gulliver's Travels", 'Jonathan Swift'), new Book('Pride and Prejudice', 'Jane Austen'), new Book('To Kill a Mockingbird', 'Harper Lee')];
  var mediator = new Mediator($('#loading'), $('#list'), books);
  $('#search').click(function(){
    mediator.search($('#search_input').val().toLowerCase());
  });
});

var Mediator = function(loading, list, books) {
    this.loading = loading;
    this.list = list;
    this.books = books;
    this.init()
}

  Mediator.prototype = {
      init: function() {
        this.list.empty();
        for (x in this.books){
          this.list.append("<div class='item'><i class='large book middle aligned icon'></i><div class='content'><h4 class='header'>" + this.books[x].name + "</h4><p class='description'>" + this.books[x].author + "</p></div></div>");
        }
      },
      search: function(keyword) {
        this.loading.removeClass('disabled');
        this.loading.addClass('active');
        var array = [];
        for (x in this.books){
          if(this.books[x].search(keyword))
            array.push(this.books[x]);
        }
        var mediator = this;
        setTimeout(function(){ mediator.set_result(array) }, 500);
      },
      set_result: function(array) {
        this.list.empty();
        for (x in array){
          this.list.append("<div class='item'><i class='large book middle aligned icon'></i><div class='content'><h4 class='header'>" + array[x].name + "</h4><p class='description'>" + array[x].author + "</p></div></div>");
        }
        this.loading.removeClass('active');
        this.loading.addClass('disabled');
      }
  }

var Book = function(name, author) {
    this.name = name;
    this.author = author;
    this.search = function(keyword) {
        return !(this.name.toLowerCase().indexOf(keyword) == -1 && this.author.toLowerCase().indexOf(keyword) == -1);
    }
}
