import Zine from './Zine/Zine';

const ZineListPL = ({zines}) => {
  return (
    <ul>
      {zines.map((zine) => {
        return (
          <Zine
            key={zine.sys.id}
            id={zine.fields.id}
            title={zine.fields.title}
            description={zine.fields.text}
            src={'https:' + zine.fields.cover.fields.file.url}
            width={zine.fields.cover.fields.file.details.image.width}
            height={zine.fields.cover.fields.file.details.image.height}
          />
        );
      })}
    </ul>
  );
};

export default ZineListPL;
