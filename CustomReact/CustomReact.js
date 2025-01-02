
const mainContainer = document.querySelector('#root')

//ye humlog ek apna object banaye ki karna kya chahte hai html me uske liye 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//here we make a function taki usko rule de ki wo kam kaise kare (yani custom render function kaise kam kart ahai yha usko diya gaya hai)
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


//ye main function hai jo render karega html ko ki kya karna hai ji
customRender(reactElement, mainContainer)