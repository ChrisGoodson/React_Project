export function AgeCounter(props){
    let age = 30;

    function increaseAge(){
        age++;
        console.log(age);
    }
    return (
        <div>
            <button onClick={increaseAge}>Increase Age</button>
            <p>Age: {age}</p>
        </div>
    )



}