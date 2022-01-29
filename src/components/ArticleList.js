import Article from "./Article";
const ArticleList = ({posts}) => {

    const articlesList = posts.map((post) => {
        return (<Article title={post.title} date={post.date} preview={post.preview} key={post.id} minutes={post.minutes}></Article>)
    })
    return(
        <main>
            {articlesList}
        </main>
    )
}

export default ArticleList;