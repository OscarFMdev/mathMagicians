import { useCallback, useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({
    author: '',
    content: '',
  });

  const fetchData = useCallback(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((json) => {
        setQuote(
          {
            author: json.author,
            content: json.quote,
          },
        );
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section className="quote-section">
        <p className="quote">
          {' '}
          {quote.content}
        </p>
        <p className="author">
          {quote.author}
          {' '}
        </p>
        <button type="button" onClick={fetchData}>New quote</button>
      </section>
    </>
  );
};

export default Quote;