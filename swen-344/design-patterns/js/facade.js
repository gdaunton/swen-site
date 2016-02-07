$('#submit').click(function(){
  var mortgage = new Mortgage($('#name').val());
  var result = mortgage.applyFor($('#value').val());
  $('#output').text(result);
});

var Mortgage = function(name) {
        this.name = name;
    }

    Mortgage.prototype = {
        applyFor: function(amount) {

            // access multiple subsystems...

            var result = this.name + " has been approved for a $" + amount + " mortgage";
            if (!new Bank().verify(this.name, amount)) {
                result = "Dan is not allowed morgages after last time.";
            } else if (!new Credit().get(this.name)) {
                result = "Dan is not allowed morgages after last time.";
            } else if (!new Background().check(this.name)) {
                result = "Dan is not allowed morgages after last time.";
            }

            return result;
        }
    }

    var Bank = function() {
        this.verify = function(name, amount) {
            return name.indexOf("dan") == -1 && name.indexOf("Dan") == -1;
        }
    }
    var Credit = function() {
        this.get = function(name) {
            // complex logic ...
            return name.indexOf("dan") == -1 && name.indexOf("Dan") == -1;
        }
    }
    var Background = function() {
        this.check = function(name) {
            // complex logic ...
            return name.indexOf("dan") == -1 && name.indexOf("Dan") == -1;
        }
    }
