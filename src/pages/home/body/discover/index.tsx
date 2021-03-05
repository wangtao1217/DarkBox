import React,{useEffect, useState} from "react";
import { H1 } from "../../../../styles";
import PageCard from "./PageCard";
import NewSongs from "./NewSongs"
import { AlbumnType } from "../index";
import { new_song } from "../../../../api/songs"
import { homepage } from '../../../../api/home'


const Discover = ({ albumns }: { albumns: Array<AlbumnType> }) => {
 const [songs, setSongs] = useState()
  useEffect(() => {
  new_song(0).then(res=>{
    console.log(res);
    setSongs(res.data.slice(0,5))
  })
  homepage().then(res=>{
    console.log(res); 
    
  })
 }, [new_song])
  return (
    <>
      <section className="container">
        <PageCard albumns={albumns} />
        <NewSongs songs={songs}/>
      </section>
    </>
  );
};

export default Discover;
