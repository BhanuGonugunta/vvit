fetch("data.json")
.then( (response)=>{ return response.json();} )
.then( (data)=>{ display_info(data.basics);} )

var be = document.querySelector("#root");

function display_info(info)
{

    let card = document.createElement("div");
    card.setAttribute('class','card');
    be.append(card);

    let he = document.createElement("h1")
    he.style.textAlign = "center";
    he.style.color = "#FF0A02";
    he.textContent = info.name;
    card.append(he);

    let hr = document.createElement("hr");
    card.append(hr);

    let mail = document.createElement("a");
    mail.href = "mailto:"+info.mail;
    mail.textContent = info.mail;
    card.append(mail);
    
    let b1 = document.createElement("br");
    card.append(b1);
    let b2 = document.createElement("br");
    card.append(b2);

    let ph = document.createElement("a");
    ph.textContent = "+91"+info.phone;
    card.append(ph);

    let b3 = document.createElement("br");
    card.append(b3);

    let b4 = document.createElement("br");
    card.append(b4);

    let button = document.createElement("button");
    button.textContent = "ClickMe..!!"
    card.append(button);
}