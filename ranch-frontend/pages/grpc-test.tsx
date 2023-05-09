import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { getState, selectAlpacaStore, streamPrompt, streamState } from '../stores/alpaca';
import { useEffect } from 'react';
import { Stream } from 'stream';
import { useRootDispatch } from '../stores/rootStore';

export const Page: NextPage = () => {
  const dispatch = useRootDispatch();
  const alpacaStore = useSelector(selectAlpacaStore);

  useEffect(() => {
    console.log(alpacaStore);
  }, [alpacaStore]);

  function handleStreamPrompt() {
    dispatch(streamPrompt({
      id: "test",
      prompt: "100+100="
    }));
  }

  function handleGetState() {
    dispatch(getState({
      id: "test"
    }))
  }

  function handleStreamState() {
    dispatch(streamState({
      id: "test"
    }))
  }

  return (
    <>
      <h1>gRPC Test</h1>
      <h2>AlpacaService</h2>
      <button onClick={handleStreamPrompt}>
        streamPrompt
      </button>
      <button onClick={handleGetState}>
        getState
      </button>
      <button onClick={handleStreamState}>
        streamState
      </button>
    </>
  );
};

export default Page;
