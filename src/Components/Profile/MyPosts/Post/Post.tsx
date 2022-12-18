import i from './Post.module.css'
import ava from './images/01f1a5fb119543d29c04c714710e9c46.jpg'


type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={i.item}>
            <img src={ava}/>
            {props.message}
            <div>
                like
            </div>
        </div>
    )
}