// const heading = React.createElement(
//   "h2",
//   { id: "suleman", class: "shamoon" },
//   "hello iam from the react"
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

/*
<div id="parent">
     <div id="child">
          <h1></h1>
     </div>
</div>
*/

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "content" }, "suleman iam from the react"),
    React.createElement("h2", { id: "content" }, "suleman iam from the react"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", { id: "content" }, "suleman iam from the react"),
    React.createElement("h2", { id: "content" }, "suleman iam from the react"),
  ]),
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
