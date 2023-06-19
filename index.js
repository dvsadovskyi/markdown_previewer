
marked.setOptions({
    breaks: true
})
const renderer = new marked.Renderer();

const text = `
# A first-level heading
## A second-level heading 
[Link](https://www.example.com)
\`<div></div>\`
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (x==1) {
    return multiLineCode;
  }
}
\`\`\`
> Block Quotes!
1. And there are numbered lists too.
- And of course there are lists.
You can also make text **bold**... whoa!
![freeCodeCamp Logo](https://example.com)
`

function App() {
    const [markup, setMarkup] = React.useState(text);

    function handleChange(event) {
        setMarkup(event.target.value);
    }

    return (
        <div className="container">
            <div className="editor">
                <p className="header">Editor</p>
                <textarea name="editor" id="editor" cols="30" rows="10" value={markup} onChange={handleChange}></textarea>
            </div>
            <div className="previwer">
                <p className="previwhead">Previwer</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: marked(markup, { renderer: renderer }),
                    }}
                    id="preview" ></div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)