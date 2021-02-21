import React, { useEffect, useState, useMemo } from "react";
import { useAsyncFn } from "react-use";
import { useParams } from "react-router-dom";

// import { getAlbumn } from '../../api/album'
import { song } from "../../api/songs";
import Songlist from "../../components/songlist";
import Info from "./info/index";
import { Container } from "./styles";
import { getAlbum } from "../../api/album";

export type AlbumType = {
  name: string;
  description: string;
  trackIds?: Array<any>;
  trackCount?: number;
  coverImgUrl?: string;
  tags?: string[];
};
const defaultValue = {
  name: null,
  description: null,
};

const Detail = () => {
  const [album, setAlbum] = useState<AlbumType>(defaultValue);
  const [state, getSongs] = useAsyncFn(song);
  const { albumId } = useParams();

  const { name, description, trackIds, trackCount, coverImgUrl, tags } = album;
  
useMemo(()=>{
  getAlbum(Number(albumId)).then((res) => {
    setAlbum(() => res.playlist);
  });
},[albumId])

useMemo(() => {
    if(trackIds){
      getSongs(trackIds.map((i) => i.id).join(','));
    }
  }, [album]);

  const InfoProps = {
    name,
    description,
    tags,
    coverImgUrl,
  };
  return (
    <Container>
      <Info {...InfoProps} />
     { trackCount}
      <Songlist data={state.value} width={["0 40px", 2, "0 70px"]} />
    </Container> 
  );
};

export default Detail;
