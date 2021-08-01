//styles
import BlueCircle from '../../common/BlueCircle';
import RedCircle from '../../common/RedCircle';
import CustomImage from '../../common/CustomImage';
import { Item, Title, Paragraph, Description } from './Zine.style';

const Zine = ({ id, title, description, src, width, height }) => {
  return (
    <Item id={id}>
      <Description>
        <Title id={id}>{title}</Title>
        <Paragraph id={id}>{description}</Paragraph>
      </Description>
      <CustomImage
        src={src}
        width={width}
        height={height}
        alt={title}
        marginRight={id % 2 === 0}
        marginLeft={id % 2 !== 0}
      />
      {id % 2 !== 0 && <RedCircle />}
      {id % 2 === 0 && <BlueCircle />}
    </Item>
  );
};

export default Zine;
