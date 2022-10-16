// skip = 22 limit = 5

async function addComment(body) {
    let user = document.createElement('div');
    let Comments = document.querySelector('.comments');

    let CommentInfo = `
    <div class="box">
        <h3>
             User ${id}
        </h3>
        <p> ${body} </p>
    </div>`;
    user.innerHTML = CommentInfo;
    Comments.append(user);
}
let response = fetch('https://dummyjson.com/comments?limit=5&skip=22').then(res => res.json()).then(json => createComment(json.Comments));
console.log(response);
async function parse(data) {
    for(let i = 0; i < data.length; i++){
        let body = await data[i].body;
        console.log(body)
        await addComment(body)
    };
}
