import React from "react";
import { Panel, Button, ButtonToolbar} from 'rsuite'

const Post = ({ post, onDelete }) => {
    return (
        <Panel header={<h3>{post.title}</h3>} bordered style={{margin : 20}}>
            {post.body}
            <ButtonToolbar style={{marginTop: 10}}>
                <Button size="lg" color="red" onClick= {() => onDelete(post.id)}>Delete</Button>
                <Button size="lg" color="cyan">Edit</Button>
            </ButtonToolbar>
        </Panel>
    )
   
}

export default Post