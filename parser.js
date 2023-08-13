function loopOverDOMElements(html, callback) {
    
    const doc = parser.parseFromString(html, 'text/html');
    const allElements = doc.querySelectorAll('*');

    allElements.forEach(element => {
        callback(element);
    });

    return doc.documentElement.outerHTML;
}

function replaceXDataAttributeValue(element) {
    const xForValue = element.getAttribute('x-for');
    if (xForValue !== null) {
        const [itemName, iterableName] = xForValue.split(' in ');

        const dataArray = JSON.parse(iterableName);
        const itemTemplate = element.innerHTML;

        element.innerHTML = '';

        dataArray.forEach(item => {
            const clonedElement = element.cloneNode(true);
            clonedElement.innerHTML = itemTemplate.replace(new RegExp(`\\b${itemName}\\b`, 'g'), item);
            element.parentNode.insertBefore(clonedElement, element);
        });

        element.remove();
    }
}

// Example usage:
const inputHTML = '<div><div x-for="item in [1, 2, 3]">{{ item }}</div></div>';
const transformedHTML = loopOverDOMElements(inputHTML, replaceXDataAttributeValue);

console.log(transformedHTML);
