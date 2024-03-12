function EvenOdd() {
    let n = Math.floor(Math.random()*100) + 1;

    const st1 = {
        backgroundColor: "lightskyblue",
        color: "blue"
    }
    const st2 = {
        backgroundColor: "lightskyblue",
        color: "red"
    }

    return (
        <h1 style = {n % 2 === 0 ? st1 : st2}> {n < 10 ? "0"+n : n} is {n%2 === 1 ? " odd" : "even"}
        {n % 2 === 0 && "🍕"}
        {n % 2 === 1 && "🍔"}
        !</h1>
        
    );
}

export default EvenOdd