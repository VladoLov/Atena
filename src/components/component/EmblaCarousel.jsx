"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options }, [
    Autoplay({ delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla bg-crimson-50 z-[-2]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex flex-row">
          {slides.map((imageSrc, index) => (
            <div
              className="embla__slide flex-shrink-0 w-full h-[50vh] lg:mt-12"
              key={index}
            >
              <div className="embla__slide__img-wrapper ease-out duration-1000 transition relative h-[50vh]">
                <Image
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="embla__slide__img bg-black-50  object-cover w-[100vw] h-full"
                  width={1000}
                  height={600}
                />
                <div className="embla__slide__text flex items-center justify-center flex-col gap-5 absolute inset-0 p-4 bg-black bg-opacity-50 text-white">
                  <h3 className="text-lg">Slide {index + 1}</h3>
                  <p>Your descriptive text here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="embla__controls flex items-center justify-center z-20">
          <div className="embla__buttons  bg-black text-black">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots flex flex-row absolute items-center justify-center pb-6">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
