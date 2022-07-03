import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>La Ode Muhamad Aslan</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem non
          error sequi, suscipit dolore quae ipsa libero! Voluptas aut
          exercitationem debitis maxime suscipit cumque placeat corrupti, vel
          consequatur ab. Facilis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem non error sequi, suscipit dolore quae ipsa
          libero! Voluptas aut exercitationem debitis maxime suscipit cumque
          placeat corrupti, vel consequatur ab. Facilis. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolorem non error sequi, suscipit
          dolore quae ipsa libero! Voluptas aut exercitationem debitis maxime
          suscipit cumque placeat corrupti, vel consequatur ab. Facilis. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Dolorem non error
          sequi, suscipit dolore quae ipsa libero! Voluptas aut exercitationem
          debitis maxime suscipit cumque placeat corrupti, vel consequatur ab.
          Facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolorem non error sequi, suscipit dolore quae ipsa libero! Voluptas
          aut exercitationem debitis maxime suscipit cumque placeat corrupti,
          vel consequatur ab. Facilis.
        </p>
      </div>
    </div>
  );
}
