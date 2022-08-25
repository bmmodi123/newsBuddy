import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(apiUrl);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    console.log(articles.length);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async() =>{
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(apiUrl);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  }

  useEffect(() => {
    document.title = `Top ${capitalize(props.category)} News - NewPanda`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  // const handlePrevClick = async() =>{
  //   updateNews(page-1);
  //   setPage(page-1);
  // }

  // const handleNextClick = async() =>{
  //   updateNews(page+1);
  //   setPage(page+1);
  // }

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
                return <div className="col-md-4 mb-4">
                    <NewsItem
                      title={element.title?element.title:"Sorry No Title Found"}
                      description={element.description?element.description:"Sorry No Description Found. Click On Read More To Know More"}
                      imageUrl={element.urlToImage?element.urlToImage:"https://picsum.photos/300/200?grayscale"}
                      newsUrl={element.url}
                      author={element.author}
                      postDate={element.publishedAt}
                      source={element.source.name}
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
  pagesize: 12,
  category: 'general'
  // apikey: '7e8d4647f41847db8f6a2481520cf616' 
  //2debe3e76976453b9438220bf99c1004
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string
}

export default News;
