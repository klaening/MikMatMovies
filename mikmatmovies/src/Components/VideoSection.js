import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import VideoData from "./VideoData.json";

import "./Videosection.css";
import "./Global.css";

export class VideoSection extends Component {
  render() {
    return (
      <Carousel interval={15000}>
        {VideoData.map((video) => (
          <Carousel.Item id="item-data" data-interval="100">
            <div className="item-container">
              <div className="desc-container">
                <h3>{video.title}</h3>
                <h6>{video.description}</h6>
                <a href={video.VideoURL}>Watch whole trailer here</a>
                <h6>Realease Year: {video.RealeaseYear}</h6>
                <img src={video.ImageURL} alt="" />
              </div>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.VideoURL}
                  frameborder="0"
                  gesture="media"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
                <Carousel.Caption id="caro-capt">
                  {/* <h3>RATING: {video.rating}</h3> */}
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default VideoSection;
