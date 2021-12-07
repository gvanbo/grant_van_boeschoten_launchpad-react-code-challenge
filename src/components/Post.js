import React from "react";
import { Panel, Button, ButtonToolbar} from 'rsuite'

const Post = ({ post }) => {
    return (
        <Panel header={post.name} bordered style={{margin : 20}}>
            {post.body}
            <ButtonToolbar style={{marginTop: 10}}>
                <Button size="lg" color="red" >Delete</Button>
                <Button size="lg" color="cyan">Edit</Button>
            </ButtonToolbar>
        </Panel>
    )
   
}

export default Post