import React from "react";

import Post from "../Post";

const arrayPost = [
  {
    title: "Ejemplo",
    subtitle: "Hola",
    text: "Hola de nuevo",
    image:
      "https://i.picsum.photos/id/726/200/300.jpg?hmac=9WbqvM6W7D0BwVEyvVbC2xL9ulSQpXyoTcL3O89modM",
  },
  {
    title: "Ejemplo2",
    subtitle: "Hola2",
    text: "Hola de nuevo2",
    image:
      "https://i.picsum.photos/id/726/200/300.jpg?hmac=9WbqvM6W7D0BwVEyvVbC2xL9ulSQpXyoTcL3O89modM",
  },
  {
    title: "Ejemplo3",
    subtitle: "Hola3",
    text: "Hola de nuevo3",
    image:
      "https://i.picsum.photos/id/726/200/300.jpg?hmac=9WbqvM6W7D0BwVEyvVbC2xL9ulSQpXyoTcL3O89modM",
  },
];

function PostContainer() {
  const NewArray = arrayPost.map(({ title, subtitle, text, image }, idx) => (
    <Post
      title={title}
      subtitle={subtitle}
      text={text}
      image={image}
      key={idx}
    />
  ));
  return <div className="stylecards">{NewArray}</div>;
}

export default PostContainer;
