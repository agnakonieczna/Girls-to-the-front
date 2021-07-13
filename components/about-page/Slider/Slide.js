import styled from 'styled-components';

const SlideWrapper = styled.div`
  width: 100%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #000;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }


  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* max-width: auto; */
    max-height: 315px;
/* 
    @media (min-width: 768px) {
      width: auto;
      height: 100%;
    } */
  }
`;

const SlideItem = ({img, alt}) => {
  return (
    <SlideWrapper>
      <img src={img} alt={alt}/>
    </SlideWrapper>
  );
};

export default SlideItem;
