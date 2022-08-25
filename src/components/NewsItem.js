import React from 'react'
import Spinner from "./Spinner";

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,postDate,source} = props;
        return (
            <div>
                <div className="card">
                    <div className="d-flex" style={{justifyContent:"flex-end", position:"absolute", right:"0", zIndex:"1"}}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <div className="d-flex flex-wrap" style={{width: "300px", height: "200px"}}>
                        <img src={ imageUrl} alt="..." style={{position:"absolute" , width: "100%", height: "inherit", left:"0"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"Unkown"}</small><br/><small className="text-muted">On {new Date(postDate).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
