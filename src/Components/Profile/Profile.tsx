import { MyPosts } from './MyPosts/MyPosts'
import c from './Profile.module.css'
import bg from './../Profile/MyPosts/Post/images/photo-1535136104956-115a2cd67fc4.avif'

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src={bg}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile