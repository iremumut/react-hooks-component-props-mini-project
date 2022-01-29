const Article = ({title, date = "January 1, 1970", preview, minutes=1}) => {
    let emoji;
    let emjcount = 0;
    let minString;
    if(minutes >= 30){
        if(minutes%10 == 0){ emjcount = minutes/10;}
        else {emjcount = Math.floor(minutes/10)+1;}
        emoji = "🍱";
    }else {
        if(minutes%5 == 0){ emjcount = minutes/5;}
        else {emjcount = (minutes/5)+1;}
        emoji = "☕️";
    }
    minString = emoji;
    for(let i=0;i<emjcount-2;i++){
        minString += emoji;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>
                {minString} minutes to read</p>
        </article>
    )
}

export default Article;