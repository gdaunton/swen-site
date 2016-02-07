$(document).ready( function(){
  var books = [new Book('Moby Dick', 'Herman Melville'), new Book("Gulliver's Travels", 'Jonathan Swift'), new Book('Pride and Prejudice', 'Jane Austen'), new Book('To Kill a Mockingbird', 'Harper Lee')];
  var films = [new Film('Die Hard', 'John McTiernan'), new Film('The Terminator', 'James Cameron'), new Film('Jurassic Park', 'Steven Spielberg'), new Film('Mission: Impossible', 'Brian De Palma')];
  var adapter = new Adapter($('#loading'), $('#list'), books.concat(films));
  $('#search').click(function(){
    adapter.search($('#search_input').val().toLowerCase());
  });
});

var Adapter = function(loading, list, items) {
    this.item = items;
    this.list = list;
    this.loading = loading;
    this.adapters = [];
    for(x in items){
      if(items[x] instanceof Book)
        this.adapters.push(new BookAdapter(items[x]));
      else if (items[x] instanceof Film)
        this.adapters.push(new FilmAdapter(items[x]));
    }
    this.init();
}

  Adapter.prototype = {
    render_list: function(array) {
      this.list.empty();
      for (x in array)
        this.list.append(array[x].get_display());
    },
    init: function() {
      this.render_list(this.adapters);
    },
    search: function(keyword) {
      this.loading.removeClass('disabled');
      this.loading.addClass('active');
      var array = [];
      for (x in this.adapters){
        if(this.adapters[x].search(keyword))
          array.push(this.adapters[x]);
      }
      var adapter = this;
      setTimeout(function(){ adapter.set_result(array) }, 500);
    },
    set_result: function(array) {
      this.render_list(array)
      this.loading.removeClass('active');
      this.loading.addClass('disabled');
    }
  }

var BookAdapter = function(book) {
    this.get_display = function(){
      return "<div class='item'><i class='large book middle aligned icon'></i><div class='content'><h4 class='header'>" + book.name + "</h4><p class='description'>" + book.author + "</p></div></div>";
    }
    this.search = function(keyword){
      return !(book.name.toLowerCase().indexOf(keyword) == -1 && book.author.toLowerCase().indexOf(keyword) == -1)
    }
}

var Book = function(name, author) {
    this.name = name;
    this.author = author;
}

var FilmAdapter = function(film) {
  this.get_display = function(){
    return "<div class='item'><i class='large film middle aligned icon'></i><div class='content'><h4 class='header'>" + film.name + "</h4><p class='description'>" + film.director + "</p></div></div>";
  }
  this.search = function(keyword){
    return !(film.name.toLowerCase().indexOf(keyword) == -1 && film.director.toLowerCase().indexOf(keyword) == -1)
  }
}

var Film = function(name, director) {
  this.name = name;
  this.director = director;
}
