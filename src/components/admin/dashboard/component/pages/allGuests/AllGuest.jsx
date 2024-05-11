import React, { useEffect, useState } from "react";
import GuestsTable from "./GuestsTable";
import axios from "axios";
import { Spin, notification } from "antd";
import {  useMutation, useQuery, useQueryClient } from "react-query";
// import GuestListTable from "./GuestListTable";


const AllGuest = () => {
 
  
const fetchGuests = async () => {
  // const { data } = await axios.get("http://localhost:5000/api/user", {
  const { data } = await axios.get("https://type-script-server.vercel.app/api/user", {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  return data.data;
};

const deleteGuest = async (guestId) => {
  // await axios.delete(`http://localhost:5000/api/user/${guestId}`, {
  await axios.delete(`https://type-script-server.vercel.app/api/user/${guestId}`, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
};


  const { data, isLoading, isError } = useQuery('guests', fetchGuests);
  const queryClient = useQueryClient();

  // console.log(allGuests);
  // console.log(isError);

  const { mutate } = useMutation(deleteGuest, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('guests');
    },
  });

  if (isLoading)  return (
    <div className="w-full flex  justify-center items-center py-10 ">
      <Spin />{" "}
    </div>
  );

  const handleDelete = (guestId) => {
    mutate(guestId);
  };

  // if (allGuestLoading) {
  //   return (
  //     <div className="w-full flex  justify-center items-center py-10 ">
  //       <Spin />{" "}
  //     </div>
  //   );
  // }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="py-10 ">
            <GuestsTable allGuests={data} deleteGuest={handleDelete} />
            {/* <GuestListTable allGuests={data} deleteGuest={handleDelete} /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllGuest;
