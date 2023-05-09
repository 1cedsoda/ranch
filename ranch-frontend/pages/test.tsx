import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlpacaStore, streamPrompt, StreamPromptParams } from '../stores/alpaca';
import { useEffect } from 'react';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';

export const Page: NextPage = () => {
  const dispatch = useRootDispatch();
  const alpacaStore = useSelector(selectAlpacaStore);

  useEffect(() => {
    console.log(alpacaStore);
  }, [alpacaStore]);

  function handleClick() {
    dispatch(streamPrompt({
      id: "test",
      prompt: "test",
    }));
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default Page;
