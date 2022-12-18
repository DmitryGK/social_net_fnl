import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <div>
                    <button>send</button>
                </div>
            </div>
            <div>
                <Post message='go go'/>
                <Post message='hello'/>
                <Post message='by by'/>
                <Post message='oo oo'/>
                <Post message='i am stronger i am better i am better'/>
            </div>
        </div>
    )
}

