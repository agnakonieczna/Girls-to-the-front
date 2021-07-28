import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Zine from './Zine/Zine';
//data
import zinesData from '../../data/zines-data';

const ZineListPL = () => {
  const { language } = useContext(LanguageContext);

  return (
    <ul>
      {zinesData[language].map((zine) => {
        return (
          <Zine
            key={zine.id + 'soi39widjri8'}
            id={zine.id}
            title={zine.title}
            description={zine.description}
            img={zine.img}
          />
        );
      })}
    </ul>
  );
};

export default ZineListPL;
