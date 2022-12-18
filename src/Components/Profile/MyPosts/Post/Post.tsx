import i from './Post.module.css'



type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={i.item}>
            <img src='./images/01f1a5fb119543d29c04c714710e9c46.jpg'/>
            {props.message}
            <div>
                like
            </div>
        </div>
    )
}