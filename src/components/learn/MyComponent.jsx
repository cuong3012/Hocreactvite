import './style.css'
const MyComponent = () => {

    // const tentui = "cuong123";
    // const tentui = 1;
    // const tentui = [1,2,3,4];
    const tentui = {
        name: "Cuong",
        age: 39
    };

    return (
        <>
            <div> {JSON.stringify(tentui)} & my component xys</div>
            <div>{console.log("ABSCS")}</div>
            <div className="child" style={{ borderRadius: "10px" }}> child</div>
        </>

    );
}
export default MyComponent;