import '../css/FeedButtons.css'

const FeedButtons = ({btnList}) => {
    let i=0;
    return (
        <div className='feed-btns'>
                {
                    
                    btnList.map((btn) => {
                        i++;
                        return (
                        <div className='fbtn-div' key={i}>
                            <button className='fbtn' onClick={() => btn.handler()}> {btn.name} </button>
                        </div>
                        )
                    })
                }
        </div>
    )
}

export default FeedButtons;