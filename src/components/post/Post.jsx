import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postKategori">
          <span className="postKategoriList">Sport</span>
          <span className="postKategoriList">Tech</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </span>
        <span className="postDate">1 jam yang lalu</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        recusandae ducimus voluptatum illo. Ipsa consequatur similique
        laudantium fugiat quasi tenetur et in dignissimos rem. Tempora ducimus
        quasi quia adipisci aspernatur? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio recusandae ducimus voluptatum illo. Ipsa
        consequatur similique laudantium fugiat quasi tenetur et in dignissimos
        rem. Tempora ducimus quasi quia adipisci aspernatur? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Optio recusandae ducimus
        voluptatum illo. Ipsa consequatur similique laudantium fugiat quasi
        tenetur et in dignissimos rem. Tempora ducimus quasi quia adipisci
        aspernatur?
      </p>
    </div>
  );
}
