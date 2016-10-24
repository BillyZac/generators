var Observable = Rx.Observable

var guy = document.getElementsByClassName('guy')[0]

var position = function() {
  var bottom = 0
  function _position() {
  }
  _position.bottom = function(value) {
    if (!arguments.length) return bottom + 'px'
    bottom = value
    return _position
  }
  _position.move = function(direction) {
    switch (direction) {
      case 'up': {
        bottom += 10
        break;
      }
      default:
    }
    return _position
  }
  return _position
}

var p = position()

var keyDowns = Observable.fromEvent(document, 'keydown')
var keyDownEvents = keyDowns.map(event => event.key)

keyDownEvents.subscribe(key => {
  switch (key) {
    case 'ArrowUp': {
      p.move('up')
      guy.style.bottom = p.bottom()
      break;
    }
    default: {
      console.log('nope');
    }

  }
  console.log(p.bottom());
})
