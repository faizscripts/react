import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState("react")

    const [results, setResults] = useState([])

    useEffect(() => {
        search(term)
    }, [])

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            if (term) search(term)
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [term])


    const search = async (term) => {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${term}`)

        setResults(response.data.query.search)
    }

    const renderList = (results) => {
        if (results.length > 0){
            return results.map(
                result => {
                    return (
                        <div className="item" key={result.pageid}>
                            <div className="right floated content">
                                <a
                                    className="ui button"
                                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                                    Go
                                </a>
                            </div>
                            <div className="content">
                                <div className="header">
                                    {result.title}
                                </div>
                                <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                            </div>
                        </div>
                    )
                }
            )
        }
    }

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderList(results)}
            </div>
        </div>
    )
}

export default Search