import React from 'react';

const Loading = (props) => {
    if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Parece estar demorando demais hein !... <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
        return (
            <div>
                <h1>Carregando (◠﹏◠✿)</h1>
            </div>
        )
    } else {
        return null;
    }
};
export default Loading;