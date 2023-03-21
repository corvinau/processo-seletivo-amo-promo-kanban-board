import { useEffect, useState } from 'react';

import mockCards from '../data/cards';

import { v4 as uuidv4 } from 'uuid';

export const useHookCards = () => {
  const [uuidCard, setUuidCard] = useState('');
  const [columnCard, setColumnCard] = useState('');
  const [titleCard, setTitleCard] = useState('');
  const [tagCard, setTagCard] = useState('');
  const [descriptionCard, setDescriptionCard] = useState('');
  const [newCards, setNewCards] = useState([] as ICard[]);
  console.log(newCards);

  const handleClickSaveCard = (columnsId: string) => {
    setUuidCard(uuidv4());
    setColumnCard(columnsId);
  };

  const handleSubmitCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNewCards([
      ...newCards,
      {
        id: uuidCard,
        title: titleCard,
        tag: tagCard,
        description: descriptionCard,
        column: columnCard,
      },
    ]);

    setUuidCard('');
    setColumnCard('');
    setTitleCard('');
    setTagCard('');
    setDescriptionCard('');
  };

  useEffect(() => {
    setNewCards([...mockCards]);
  }, []);

  return {
    uuidCard,
    setUuidCard,
    columnCard,
    setColumnCard,
    titleCard,
    setTitleCard,
    tagCard,
    setTagCard,
    descriptionCard,
    setDescriptionCard,
    newCards,
    setNewCards,
    handleClickSaveCard,
    handleSubmitCard,
  };
};
