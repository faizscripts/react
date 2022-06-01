import React from "react";
import {connect} from "react-redux";
import {selectItem} from "../actions";

const Accordion = ({items, selectItem, selectedItem}) => {

    const onTitleClick = (index) => {
        selectItem(index)
    }

    const renderItems = items.map(
        (item, index) => {

            const active = selectedItem === index ? "active" : ""

            return(
                <React.Fragment key={item.title}>
                    <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                        <i className="dropdown icon" />
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        }
    )

    return(
        <div className="ui styled accordion">
            {renderItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {items: state.items, selectedItem: state.selectedItem}
}

export default connect(mapStateToProps, {selectItem})(Accordion)