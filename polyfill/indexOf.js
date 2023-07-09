if (!String.prototype.indexOf) {
    String.prototype.indexOf = function(searchValue, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or undefined');
      }
  
      var str = String(this);
      var len = str.length;
      var startIndex = fromIndex || 0;
  
      if (startIndex < 0) {
        startIndex = Math.max(0, len + startIndex);
      }
  
      for (var i = startIndex; i < len; i++) {
        if (str.charAt(i) === searchValue) {
          return i;
        }
      }
  
      return -1;
    };
  }