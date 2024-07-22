//We need to render this object on our root
function customRender(container, reactElement)
{
    //create a dom element.

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childen
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    //Jisme render karana hai usme append krdo
    container.appendChild(domElement)
}



//How react Injects Elemets or Objects in HTML;

//1. get reference of root or that element from HTML jisme inject karna hai.

const container = document.querySelector("#root");

//2.react mai sab objects hota hai: Jo render karan hai usko object ki trah bnao

const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target : '_blank',


    },
    childen : "Click Me to visit Google"

}






//5.Call the function

customRender(container,reactElement);