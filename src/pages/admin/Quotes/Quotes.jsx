import {useEffect, useState} from "react";

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("https://quote-garden.onrender.com/api/v3/quotes")
            .then((response) => response.json())
            .then((data) => {
                setQuotes(data.data);
            })
            .catch((error) => {
                console.error("Error fetching the quotes:", error);
            });
    }, []);


    return (
        <div className="container mt-5">
            <div className="row">
                {quotes.map((quote) => (
                    <div key={quote._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"{quote.quoteText}"</p>
                                <h5 className="card-title">{quote.quoteAuthor}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quotes;
