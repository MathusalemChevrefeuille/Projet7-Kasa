import "./tags.css"

function Tags ({tags}) {
    return(
        <div className="tags">
            {
                tags.map(tag => (<p key={tag}>{tag}</p>))
            }
        </div>
    )
}

export default Tags