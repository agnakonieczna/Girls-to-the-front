//styles
import BlueCircle from '../../common/BlueCircle';
import RedCircle from '../../common/RedCircle';
import CustomImage from '../../common/CustomImage';
import { Item, Title, Paragraph, Description } from './Zine.style';

const Zine = ({ id, title, description, img }) => {
  return (
    <Item id={id}>
      <Description>
        <Title id={id}>{title}</Title>
        <Paragraph id={id}>{description}</Paragraph>
      </Description>
      <CustomImage
        src={img.src}
        width={img.width}
        height={img.height}
        alt={img.alt}
        marginRight={id % 2 === 0}
        marginLeft={id % 2 !== 0}
      />
      {id % 2 !== 0 && <RedCircle />}
      {id % 2 === 0 && <BlueCircle />}
    </Item>
  );
};

export default Zine;
