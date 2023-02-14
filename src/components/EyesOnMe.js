// Code EyesOnMe Component Here

function focusHandler() {
    console.log('Good!')
}

function blurHandler() {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return (
        <button 
        onFocus={focusHandler} 
        onBlur={blurHandler}>
            Eyes on me</button>
    )
}

export default EyesOnMe