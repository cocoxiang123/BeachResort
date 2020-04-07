import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

function FeaturedRooms() {
  const rooms = useContext(RoomContext);
  let { loading, featuredRooms } = rooms;
  let room = featuredRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : room}
      </div>
    </section>
  );
}

export default FeaturedRooms;
