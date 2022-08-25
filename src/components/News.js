import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import noImage from "../assets/noImage.jpg";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    let apiUrl = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&country=${props.country}&category=${props.category}&page=${page}&language=en`;

    setLoading(true);
    props.setProgress(30);
    let data = await fetch(apiUrl);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async() =>{
    let apiUrl = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&country=${props.country}&category=${props.category}&page=${page+1}&language=en`;
    
    setPage(page+1);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);

  }

  useEffect(() => {
    document.title = `Top ${capitalize(props.category)} News - NewPanda`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  return (
      <>
        <h1 className="text-center" style={{marginTop:"70px"}}>NewsPanda - Top {capitalize(props.category)} News</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-4">
            <div className="row my-2">
              {articles.map((element) => {
                return <div className="col-md-4 mb-4" key={element.id}>
                    <NewsItem
                      title={element.title?element.title:"Sorry No Title Found"}
                      description={element.description?element.description:"Sorry No Description Found. Click On Read More To Know More"}
                      imageUrl={element.image_url?element.image_url:noImage}
                      newsUrl={element.link}
                      author={element.creator}
                      postDate={element.pubDate}
                      source={element.source_id}
                    />
                  </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
  );

}

News.defaultProps = {
  country: 'in',
  category: 'top'
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News;
