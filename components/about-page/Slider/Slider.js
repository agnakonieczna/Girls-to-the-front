import { useRef } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import Container from '../../common/Container';
import FlexWrapper from '../../common/FlexWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import slider1 from '../../../public/images/slider-1.png';
import slider2 from '../../../public/images/slider-2.png';
import slider3 from '../../../public/images/slider-3.png';
import slider4 from '../../../public/images/slider-4.png';
import slider5 from '../../../public/images/slider-5.png';
import slider6 from '../../../public/images/slider-6.png';
import slider7 from '../../../public/images/slider-7.png';
import slider8 from '../../../public/images/slider-8.png';
import slider9 from '../../../public/images/slider-9.png';
import Image from 'next/image';

import ArrowSvg from '../../../public/images/arrow.svg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const sliderData = [
  { id: 1, img: slider1, alt: '' },
  { id: 2, img: slider2, alt: '' },
  { id: 3, img: slider3, alt: '' },
  { id: 4, img: slider4, alt: '' },
  { id: 5, img: slider5, alt: '' },
  { id: 6, img: slider6, alt: '' },
  { id: 7, img: slider7, alt: '' },
  { id: 8, img: slider8, alt: '' },
  { id: 9, img: slider9, alt: '' }
];

const Arrow = styled.button`
  display: none;

  @media (min-width: 625px) {
    display: block;
    border: none;
    background-color: transparent;
    position: absolute;
    right: ${({ type }) => type === 'next' && '5rem'};
    top: 50%;
    transform: translateY(-30px);
    left: ${({ type }) => type === 'prev' && '5rem'};
    z-index: 5;
    cursor: pointer;
  }

  svg {
    width: 60px;
    height: 100px;
    stroke: ${({ theme }) => theme.colors.pink};
    stroke-width: 2px;
    transform: ${({ type }) =>
      type === 'prev' ? 'translate(0, -50%) rotate(-90deg)' : 'translate(0, -50%) rotate(90deg)'};

    @media (min-width: 768px) {
      width: 100px;
      height: 180px;
    }
  }
`;

const SwiperWrapper = styled.div`
  @media (min-width: 958px) {
    display: none;
  }
`;

const BulletsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  span {
    background-color: ${({ theme }) => theme.colors.pink};
    margin: 0 0.5rem;
  }
`;

const ImagesWrapper = styled.div`
  display: none;

  @media (min-width: 958px) {
    display: block;
  }
`;

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const pagination = {
    clickable: true,
    type: 'bullets'
  };

  return (
    <>
      <SwiperWrapper>
        <Swiper
          autoplay
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={pagination}
        >
          {sliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id + 'jdk93kwiahsi9'}>
                <Slide img={slide.img} />
              </SwiperSlide>
            );
          })}
          <Arrow type='prev' ref={prevRef}>
            <ArrowSvg />
          </Arrow>
          <Arrow type='next' ref={nextRef}>
            <ArrowSvg />
          </Arrow>
          <BulletsList ref={paginationRef}></BulletsList>
        </Swiper>
      </SwiperWrapper>
      <ImagesWrapper>
        <Container>
          <FlexWrapper bottom>
            <Image src={slider1} width={206} height={309} alt=''/>
            <Image src={slider2} width={382} height={298} alt=''/>
            <Image src={slider3} width={274} height={314} alt=''/>
          </FlexWrapper>
          <FlexWrapper bottom>
            <Image src={slider4} width={268} height={179} alt=''/>
            <Image src={slider5} width={296} height={197} alt=''/>
            <Image src={slider6} width={299} height={200} alt=''/>
          </FlexWrapper>
          <FlexWrapper>
            <Image src={slider7} width={308} height={205} alt=''/>
            <Image src={slider8} width={178} height={215} alt=''/>
            <Image src={slider9} width={312} height={208} alt=''/>
          </FlexWrapper>
        </Container>
      </ImagesWrapper>
    </>
  );
};

export default Slider;
