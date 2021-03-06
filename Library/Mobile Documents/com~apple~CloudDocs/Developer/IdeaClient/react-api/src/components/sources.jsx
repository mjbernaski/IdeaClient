import React from 'react';

const Sources = ( {sources} ) => {
    console.log(sources)
    return  (
        <div>
            <center>Sources {sources.count} </center>
            {sources.map((source) => (
                <div class="card">
                    <div class="card-body">
                        <h3 class="card.title">{source.name}</h3>
                        <h6 class="card.sub-title"><em>{source.url}</em></h6>
                        {source.tags.map((tag) => 
                        <li>{tag.toLowerCase()}</li>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Sources
