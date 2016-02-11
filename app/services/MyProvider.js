module.exports = function() {
    this.value = 'my default value';
    this.setValue = function(value) {
        this.value = value;
    };

    this.$get = function() {
        return this.value;
    }
}