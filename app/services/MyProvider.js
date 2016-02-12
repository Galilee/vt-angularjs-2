module.exports = function() {
    var value = 'my default value';
    this.setValue = function(newValue) {
        value = newValue;
    };

    this.$get = function() {
        return {
                getValue: function() {
                    return value;
            }
        }
    }
}