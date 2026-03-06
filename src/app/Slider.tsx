"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import Link from "next/link";
import { projects } from "./projects/DATAprojects";

import "swiper/css";
import "swiper/css/effect-cards";

export default function CardSliderWithText() {
  const images = [
    "/officers/Abla_Aliya.png",
    "/officers/Akula_Arnav.jpg",
    "/officers/Arif_Ariba.jpeg",
    "/officers/Chen_Cody.jpg",
    "/officers/Busche_Ben.jpg",
    "/officers/Chiv_Sumain.jpeg",
    "/officers/Chou_maya.jpeg",
  ];

  const links = projects.map((p) => `/projects/${p.slug}`);

  const descriptions = [
    "What if I make this text really long will it successfully resize this. air hockey",
    "oooo look at this project 2, air plane launcher",
    "wow and this is a third project??, advertising rover",
    "more descriptions for a 4th, drink-dispenser",
    "a 5th? absolutely incredible, card-shuffler-dealer",
    "6th windtraxxxxx",
    "7th tabling machine",
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    let timer: NodeJS.Timeout;

    const handleDragStart = () => {
      setDragging(true);
      swiper.autoplay.stop(); // pause while dragging
      clearTimeout(timer);
    };

    const handleDragEnd = () => {
      setDragging(false);
      clearTimeout(timer);
      timer = setTimeout(() => {
        swiper.autoplay.start(); // resume 10s after drag ends
      }, 10000);
    };

    // Touch events
    swiper.on("touchStart", handleDragStart);
    swiper.on("touchEnd", handleDragEnd);

    // Mouse events
    const el = swiper.el;
    el.addEventListener("mousedown", handleDragStart);
    el.addEventListener("mouseup", handleDragEnd);

    return () => {
      swiper.off("touchStart", handleDragStart);
      swiper.off("touchEnd", handleDragEnd);
      el.removeEventListener("mousedown", handleDragStart);
      el.removeEventListener("mouseup", handleDragEnd);
      clearTimeout(timer);
    };
  }, []);

  const cursorStyle = dragging ? "grabbing" : hovering ? "pointer" : "default";

  return (
    <div
      className="slider-wrapper"
      style={{ cursor: cursorStyle }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Image slider */}
      <div className="slider-viewport">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="cards"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          grabCursor={false}
          direction="vertical"
          initialSlide={1}
          modules={[EffectCards, Autoplay]}
          cardsEffect={{ perSlideOffset: 40, perSlideRotate: -1 }}
          style={{ width: "100%", height: "100%", cursor: cursorStyle }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{
            delay: 5000, //wait 5s
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="custom-slide"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{ cursor: cursorStyle }}
            >
              <img
                src={img}
                alt={`Card ${i}`}
                className="slide-img cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text */}
      <div className="text-slider-container">
        {descriptions.map((desc, i) => (
          <div
            key={i}
            className={`slider-text transition-opacity ${
              i === activeIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-100"
            }`}
            style={{ transform: `translateY(${(i - activeIndex) * 250}%)` }}
          >
            {desc}
          </div>
        ))}
        <Link href={links[activeIndex]}>
          <button className="learn-more-btn">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
