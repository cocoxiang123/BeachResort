import React, { useState, useEffect } from "react";
import items from "./data";

export const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };


  const [rooms, setRooms] = useState(() => formatData(items));
  const [sortedRooms, setsortedRooms] = useState(rooms);
  const [featuredRooms, setFeaturedRooms] = useState(() => rooms.filter((room) => room.featured === true));
  const [loading, setLoading] = useState(false);
  const [minPrice, setMinPrice] = useState(() => Math.min(...rooms.map((item) => item.price)));
  const [maxPrice, setMaxPrice] = useState(() => Math.max(...rooms.map((item) => item.price)));
  const initialValues = { type: "all", capacity: 1, price: maxPrice, minSize: 0, maxSize: 1000, breakfast: false, pets: false };
  const [values, setValues] = useState(initialValues)
  //getData
  const { type, capacity, price, minSize, maxSize, breakfast, pets } = values;

  useEffect(() => {
    filterRooms();
    setMinPrice(() => Math.min(...rooms.map((item) => item.price)));
    setMaxPrice(() => Math.max(...rooms.map((item) => item.price)));
  }, [values])
  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  const handleChange = e => {
    const { name } = e.target;
    const value = e.target.value;
    const check = e.target.checked;
    if (e.target.type === "checkbox") {
      setValues({ ...values, [name]: check })
    }
    else {
      setValues({ ...values, [name]: value })
    }
  };
  const onHandleBtnClick = e => {
    e.preventDefault();
    setValues(initialValues)
  }
  const filterRooms = () => {
    let tempRooms = [...rooms];
    tempRooms = tempRooms.filter(room => room.price <= price);
    tempRooms = tempRooms.filter(room => room.size <= maxSize);
    tempRooms = tempRooms.filter(room => room.size >= minSize);

    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
      setsortedRooms(tempRooms);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (capacity >= 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= parseInt(capacity));
      setsortedRooms(tempRooms);
    }
    else {
      setsortedRooms(tempRooms);
    };

  };
  const state = {
    rooms,
    sortedRooms,
    featuredRooms,
    loading,
    values,
    minPrice,
    maxPrice,
    getRoom,
    handleChange,
    filterRooms,
    onHandleBtnClick
  };
  return <RoomContext.Provider value={state}>{children}</RoomContext.Provider>;
}

export default RoomProvider;
