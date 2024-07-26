function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)
    // container.appendChild(domElement)

    const domElementOne = document.createElement(reactElement.type)
    domElementOne.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
      if(prop === 'children') continue;
      domElementOne.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElementOne)
}






const reactElement = {
    type: 'a',
    props: {
        href: "https://www.youtube.com",
        target: "_blank"
    },
    children: "Click to visit youtube"
}





const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer)