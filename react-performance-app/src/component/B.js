import React, { useCallback } from 'react'

const Message = React.memo(({message}) => {
  return <p>{message}</p>;
})

const ListItem = React.memo(({post, testFuction}) => {
  return(
    <li key={post.id}>
      <p>
        {post.title}
      </p>
    </li>
  )
})

const List = React.memo(({ posts, testFuction }) => {
  console.log('List component is Rendering');
  return(
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post={post}/>
      ))}
    </ul>
  )
})



const B = React.memo(({ message, posts }) => {
  console.log('B component is Rendering');

  const testFuction = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message}/>
      <List posts={posts} testFuction={testFuction} />
    </div>
  )
})

export default B