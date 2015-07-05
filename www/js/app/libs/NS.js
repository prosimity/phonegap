/*
 * This class is used for handling Javascript namespacing.
 *
 * @author Chris Santos
 */
var NS = (function() {

    /**
     * Class definitions.
     *
     * @type {{}}
     */
    var classes = {};

    return {

        /**
         * Creates a namespace and puts the defined function in it.
         *
         * @param namespace_string
         * @param func
         */
        define: function(namespace_string, func) {

            this._addFunction(namespace_string, func);
        },

        create: function() {

            var class_string = arguments[0];

            arguments = Array.prototype.slice.call(arguments, 0, 1);

            var func = this._getFunction(class_string);
            var tmp = Object.create(func.prototype);
            var concrete = func.apply(tmp, arguments);

            return Object(concrete) === concrete ? concrete : tmp;
        },

        stringToFunction: function(string_function) {

            var arr = string_function.split(".");

            var fn = (window || this);
            for (var i = 0, len = arr.length; i < len; i++) {
                fn = fn[arr[i]];
            }

            if (typeof fn !== "function") {
                throw string_function + ' is not a function.';
            }

            return fn;
        },

        /**
         * Parses the namespace string and returns the Javascript function.
         *
         * @param string class_string
         * @returns Function
         * @private
         */
        _getFunction: function(class_string) {

            var ref = classes;
            var pieces = class_string.split('.');

            for(var i=0; i < pieces.length - 1; i++) {

                if(ref[pieces[i]] === undefined) {
                    ref = ref[pieces[i]] = {};

                } else {
                    ref = ref[pieces[i]];
                }
            }

            return ref[pieces[i]];
        },

        /**
         * Adds a Javascript function to a namespace.
         *
         * @param string class_string
         * @param Function func
         * @private
         */
        _addFunction: function(class_string, func) {

            var ref = window;
            var pieces = class_string.split('.');

            for(var i=0; i < pieces.length - 1; i++) {

                if(ref[pieces[i]] === undefined) {
                    ref = ref[pieces[i]] = {};

                } else {
                    ref = ref[pieces[i]];
                }
            }

            ref[pieces[i]] = func;
        }
    };

})();