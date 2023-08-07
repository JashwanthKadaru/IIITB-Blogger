import '../css/HomePost.css'
import {MdLibraryAdd, MdLibraryAddCheck} from 'react-icons/md' 

const HomePost = ({key, head, body, postee, datetime, flags, saved}) => {


    return (
        <div className='home-post' key={key}>
            <div className='post-head'> 
                <div className='phead'>
                    <h3> {head} </h3>

                    <p> 
                        written by <span>{postee}</span>, posted on <span>Monday, 07 Aug 2023 11:24:37</span> 
                    </p>
                </div>

                <div className='paction'>
                    {(saved)? <MdLibraryAdd className=
                    "save" size={24} color='white'/>: <MdLibraryAddCheck className=
                    "saved" size={24} color='white'/>}
                </div>
            </div>

            <div className='post-body'>
                <p className='post-text'>
                   { body.slice(0,400) + ' . . .'}
                </p>
            </div>
        </div>
    )
}

export default HomePost;