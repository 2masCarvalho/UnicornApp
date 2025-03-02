// is rendered in the browser -> they handle user interactions
"use client";
function Counter(props) {
    // This is JSX return everything that we want to show to the user
    return <div>{props.title}</div>;
}
// this line is to make it available to other files
export default Counter;