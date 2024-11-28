export var hasError = function hasError() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var showErrorOnTouched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var submitError = meta.submitError,
      dirtySinceLastSubmit = meta.dirtySinceLastSubmit,
      error = meta.error,
      touched = meta.touched;
  return (!!error || !!submitError && !dirtySinceLastSubmit) && (!!showErrorOnTouched ? !!touched : true);
};
export var getError = function getError(meta) {
  var showErrorOnTouched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (hasError(meta, showErrorOnTouched)) {
    var submitError = meta.submitError,
        error = meta.error;
    return error || submitError;
  }
};