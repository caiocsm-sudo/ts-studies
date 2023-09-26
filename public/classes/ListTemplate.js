/*
 * 1 - Register a list component (ul);
 * 2 - Create a render method to render a new li to the container
 *     -- accept arguments: invoice or payment, a heading and a position
 *     -- create the new html template (li, h4, p)
 *     -- add the li template to the start or end of the list
 * */
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, position) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        var parag = document.createElement('p');
        parag.innerText = item.format();
        li.append(h4);
        li.append(parag);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
export { ListTemplate };
