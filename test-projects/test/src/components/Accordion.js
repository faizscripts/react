import React, {useState, useEffect} from "react";

const Accordion = ({items}) => {

    const [selected, setSelected] = useState(null)

    const renderItems = (items) => {

        const onTitleClick = (index) => {
            setSelected(items[index] )
        }

        return items.map(
            (item, index) => {

                const printActive = (item) => {
                    return item.title === selected.title ? "active" : ""
                }

                return (
                    <React.Fragment key={item.title}>
                        <div className={`title ${printActive(item)}`} onClick={() => onTitleClick(index)}>
                            <i className="dropdown icon" />
                            {item.title}
                        </div>
                        <div className={`content ${printActive(item)}`}>
                            <p>{item.content}</p>
                        </div>
                    </React.Fragment>
                )
            }
        )
    }

    return(
        <div className="ui styled accordion">
            {renderItems(items)}
        </div>
    )
}

export default Accordion