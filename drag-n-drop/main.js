var Observable = Rx.Observable

var parent = document.getElementById('parent')
var widget = document.getElementById('widget')

var mouseDowns = Observable.fromEvent(widget, 'mousedown')
var parentMouseMoves = Observable.fromEvent(parent, 'mousemove')
var parentMouseUps = Observable.fromEvent(parent, 'mouseup')

var drags = mouseDowns.map(function(event) {
  return parentMouseMoves.takeUntil(parentMouseUps)
}).concatAll()

var subscription = drags.forEach(function onNext(event) {
  widget.style.left = event.clientX + 'px'
  widget.style.top = event.clientY + 'px'
})
