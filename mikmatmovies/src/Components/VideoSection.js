import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import VideoData from "./VideoData.json";

import "./Videosection.css";
import "./Global.css";

export class VideoSection extends Component {
  render() {
    return (
      <div className="main-container">
        <Carousel
          interval={25000}
          autoPlay={true}
          prevIcon={false}
          keyboard={false}
        >
          {VideoData.map((video) => (
            <Carousel.Item id="item-data" key={video.id}>
              <div className="item-container">
                <div className="desc-container">
                  <div className="text-box">
                    <h3>{video.title}</h3>
                    <h6>{video.description}</h6>
                    <h6>Realease Year: {video.RealeaseYear}</h6>
                    <a href={video.VideoURL}>Watch whole trailer here</a>
                  </div>
                  <div className="Image-box">
                    <img src={video.ImageURL} alt="" />
                  </div>
                </div>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.VideoURL}
                    frameBorder="0"
                    gesture="media"
                    allow="autoplay; encrypted-media; fullscreen"
                  ></iframe>
                  <Carousel.Caption>
                    {/* <h3>RATING: {video.rating}</h3> */}
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default VideoSection;
