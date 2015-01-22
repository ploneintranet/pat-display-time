# pat-display-time
A pattern to make use of moment.js ([momentjs.com](http://momentjs.com), [github](https://github.com/moment/moment/)) with PatternsLib.

This pattern's name is pat-display-time. It is activated on a DOM element by giving the element the HTML class `pat-display-time` and a `datetime` attribute.


For example:
```html
    <time class="pat-display-time" datetime="2015-01-20T08:00Z">20 January 2015, 08:00</time>
```

## Development

For standalone development run (installation and starting a server):
```shell
    > make all
```
To clean up local directory (after running make all) run:
```shell
    > make clean
```
### Testing
```shell
    > make check
```
