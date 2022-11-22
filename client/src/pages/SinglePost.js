import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        ></img>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=POSTNUMBER`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          distinctio!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          praesentium eaque quas quidem qui minima at laboriosam incidunt, eum
          fugiat assumenda tenetur omnis obcaecati sapiente autem voluptatem
          aliquid vel repellat sit hic nam? Laborum voluptatem repudiandae,
          itaque et minus ea id alias quas? Eum corporis rem sapiente excepturi
          temporibus quia asperiores repellat velit. Sit laudantium facilis
          nisi. Fugit, culpa quasi! Quis velit voluptatem, eos error harum
          aspernatur esse suscipit ex cupiditate asperiores culpa nulla
          blanditiis eveniet! Ab incidunt eos rerum voluptas dolorum adipisci
          perspiciatis aspernatur fugiat assumenda ipsum! Ipsa fugit harum
          exercitationem sit nostrum blanditiis accusamus in temporibus, tempora
          maiores inventore nesciunt impedit sed cumque non rem voluptatum
          praesentium fugiat porro atque ex? Aut impedit sit, quidem, possimus
          nam illo et aliquid deserunt minima deleniti maxime quos error vitae
          hic odit beatae eos? Sit totam similique dolore rerum cum dicta sed
          vel. Doloremque vitae accusamus ducimus laborum aliquam numquam
          architecto eveniet, excepturi modi expedita. Tenetur repudiandae
          aliquam harum sequi, temporibus culpa deserunt et reprehenderit earum
          modi quos sunt dolores ratione doloribus praesentium delectus, vero
          libero officiis perferendis accusamus, ut quia assumenda dolor! Veniam
          beatae nostrum sint nobis dignissimos cum consequatur illum, natus
          expedita placeat neque possimus. Ullam, odit? Temporibus, quia.
          <br /> <br />
          Corporis, autem at soluta voluptatem dolorem aperiam, voluptate
          excepturi quisquam illo eaque, recusandae tempore voluptates
          asperiores. Ea labore distinctio voluptas possimus pariatur. Aperiam
          dolorem sapiente vitae magni cupiditate, non laboriosam? Esse
          voluptatum quasi molestias nisi cum! Fuga illum dignissimos aliquid
          dicta cum praesentium veritatis. Deserunt, vero, quod vel animi quas
          quasi corporis quisquam impedit mollitia commodi assumenda numquam
          tenetur optio perferendis, odit ipsam illo eius ab? Adipisci
          blanditiis magni voluptatibus qui dignissimos temporibus rem, hic
          voluptas molestiae sequi dolore animi similique voluptatum facere nemo
          vitae, dolor praesentium sed! Quo quis provident ipsa, aspernatur
          dolorem magni ex voluptatum alias veniam dicta debitis maiores hic cum
          iure? Similique aliquam dolorem repellat nisi eaque! Hic maxime
          similique eos, excepturi, laudantium officiis nemo laboriosam
          voluptates voluptatibus sunt eaque dolore voluptate aliquam! Cumque
          exercitationem deserunt illum, quisquam ea, quos reprehenderit
          repellendus incidunt porro rem impedit, et reiciendis. Incidunt iure
          vel repudiandae distinctio atque reiciendis laboriosam facilis
          commodi, itaque error blanditiis ipsa numquam explicabo sequi rem
          ipsam dignissimos? Mollitia sequi quasi reprehenderit dolor libero
          adipisci iusto a, similique obcaecati itaque, expedita labore placeat
          tenetur quibusdam officia non voluptatum? Assumenda eaque nostrum
          consequuntur excepturi temporibus soluta tempora voluptate quasi nisi
          voluptas quia nesciunt nulla, dolore libero explicabo cumque dolores
          eveniet magni eum dolor mollitia, deleniti quos at. Unde tempore
          harum, qui animi deleniti voluptate eveniet sunt accusantium ad
          praesentium, laudantium iste quaerat. Repellat molestiae doloribus
          minima consequuntur, sed nemo rem exercitationem nam nisi tempora
          beatae labore incidunt animi. Sunt vero illo temporibus, nostrum
          cumque laboriosam fugit reiciendis est neque modi voluptas amet, harum
          nihil fuga! Totam ex natus molestias? Harum, perferendis? Aliquam,
          assumenda debitis sunt ipsum dolore iste culpa, dolorem, laborum nisi
          nobis temporibus rem repellat aperiam minus! Mollitia at commodi
          aliquid, dignissimos eaque numquam delectus vel veritatis porro quam
          eligendi, aperiam quae quod perspiciatis, iusto a.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;
