import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
    return(
        <div className="ui container">
            <Header />
            <Routes>
                <Route path="/" element={<StreamList />} />
                <Route path="/streams/new" element={<StreamCreate />} />
                <Route path="/streams/edit/:id" element={<StreamEdit />} />
                <Route path="/streams/show/:id" element={<StreamShow />} />
                <Route path="/streams/delete/:id" element={<StreamDelete />} />
            </Routes>
        </div>
    )
}

export default App