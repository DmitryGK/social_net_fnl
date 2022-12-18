import { MyPosts } from './MyPosts/MyPosts'
import c from './Profile.module.css'

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                img
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile