const appTitle = "Visibility Toggle";
let buttonTitle  = "REVEAL THE TROOF"; 
let visible = false;
let upper = true;
const buttonPlacer = () => {
    if (buttonTitle.length > 14){

    }
}

const revealButton = () => {
//    visible ? visible === true : visibile === false;
    if(visible === false){
        visible = true;
        upper = false;
        buttonTitle = 'hide that shit bro';
    } else { 
        visible = false;
        upper = true;
        buttonTitle = "REVEAL THE TROOF";
    }
    renderTemplate();
}
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{appTitle}</h1>
            {upper && <button onClick = {revealButton}> {buttonTitle}</button>}
            {visible && <div>
                <p>This app sucks tho. </p>
                 <button onClick = {revealButton}> {buttonTitle} </button>
            </div>} 
        </div>
    );

    ReactDOM.render(
        template,
        appRoot
    );
};



const appRoot = document.getElementById('app');
renderTemplate();