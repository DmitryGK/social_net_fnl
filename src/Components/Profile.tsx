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
            <div className={c.posts}>
                My posts
                <div>
                    New post
                    <div className={c.item}>post 1</div>
                    <div className={c.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile