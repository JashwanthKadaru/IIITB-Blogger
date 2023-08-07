import '../css/HomeFeed.css'
import HomePost from './HomePost'

const HomeFeed = ({feed}) => {
    let i=0;
    return (
        <div className="home-feed">
            { 
                feed.map((item) => { 
                i++;
                console.log(feed.indexOf(item))
                return (
                    <HomePost key={i} head={"First Post Head. A Read About Your Blogger. First Post Head. A Read About Your BloggerFirst Post Head. A Read About Your Blogger"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat, totam nostrum et voluptate aspernatur libero non? Tempore earum beatae, obcaecati autem eos aspernatur cum nostrum cupiditate. Corporis, animi reprehenderit. quaerat, totam nostrum et voluptate aspernatur libero non? Tempore earum beatae, obcaecati autem eos aspernatur cum nostrum cupiditate. Corporis, animi reprehenderit."}
                    postee={"First User 1"} datetime={ Date()}
                    flags={[]} 
                    saved={true}
                    />
                ) 
              })
            }
        </div>
    )
}

export default HomeFeed;