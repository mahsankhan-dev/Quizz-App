function PlayAgain (props) {
    return (
            <div className="start">
                <button className='reset-button'
                 onClick={() => props.reset()}>{props.title}</button>
            </div>
    )
};

export default PlayAgain;