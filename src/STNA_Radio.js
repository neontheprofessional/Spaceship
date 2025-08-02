
/*
//STATION A - THE BOT

    //GREETING
    if (nameValue.includes("STNA") && message.includes("hello") || nameValue.includes("STNA") && message.includes("hi") || nameValue.includes("STNA") && message.includes("hey") || nameValue.includes("STNA") && message.includes("good morning") || nameValue.includes("STNA") && message.includes("good afternoon") || nameValue.includes("STNA") && message.includes("good evening") || nameValue.includes("STNA") && message.includes("hail")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", "greeting")
        }, 5000);
    }

    //TRADE
    if (nameValue.includes("STNA") && message.includes("trade")) {
        setTimeout(function () {
            const reply = rand(STNA["trade"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
    }

    //---------------------------------------------------
    //CO_AMUTGEX-THE COMMS OFFICER
let target;
if (nameValue === "CO_AMUTGEX") { target = Amutgex }
if (nameValue === "STNA") { target = STNA }

if (target = Amutgex){
    //GREETING
    if (nameValue.includes("CO_AMUTGEX") && message.includes("hello") || nameValue.includes("CO_AMUTGEX") && message.includes("hi") || nameValue.includes("CO_AMUTGEX") && message.includes("hey") || nameValue.includes("CO_AMUTGEX") && message.includes("good morning") || nameValue.includes("CO_AMUTGEX") && message.includes("good afternoon") || nameValue.includes("CO_AMUTGEX") && message.includes("good evening") || nameValue.includes("CO_AMUTGEX") && message.includes("hail")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", "greeting")
        }, 5000);
        setTimeout(function () {
            const reply = rand(Amutgex["greeting"]);
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + reply + "<br>";
            setCookie("AMUTGEXmode", "greeting")
        }, 7000);
    }
    //STATUS
    if (nameValue.includes("CO_AMUTGEX") && message.includes("how" && "you") && ((!message.includes("cat") && !message.includes("feline") && !message.includes("naliv"))) || nameValue.includes("CO_AMUTGEX") && message.includes("how" && "it" && "going")) {
        setTimeout(function () {
            const reply = rand(STNA["status"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", "status")
        }, 5000);
        setTimeout(function () {
            const reply = rand(Amutgex["status"]);
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + reply + "<br>";
            setCookie("AMUTGEXmode", "status")
        }, 8000);
    }

    //ACTIVITY
    if (nameValue.includes("CO_AMUTGEX") && message.includes("what" && "up") || nameValue.includes("CO_AMUTGEX") && message.includes("what" && "doing")) {
        setTimeout(function () {
            const reply = rand(STNA["status"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", "activity")
        }, 5000);
        setTimeout(function () {
            const reply = rand(Amutgex["activity"]);
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + reply + "<br>";
            setCookie("AMUTGEXmode", "activity")
        }, 7000);
    }

    //CAT NAME
    if (nameValue.includes("CO_AMUTGEX") && message.includes("cat") || nameValue.includes("CO_AMUTGEX") && message.includes("naliv") || nameValue.includes("CO_AMUTGEX") && message.includes("feline")) {
        setTimeout(function () {
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + "Non-ClassA Lifeforms are not permitted onboard TELLARI™©® SynXComm™ Satellite Stations per Ordinace 378F1" + "<br>";
            setCookie("STNAmode", "cat")
        }, 5000);
        setTimeout(function () {
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + "Naliv is doing very well :)" + "<br>";
            setCookie("AMUTGEXmode", "activity")
        }, 7000);
    }



    //TRADE
    if (nameValue.includes("CO_AMUTGEX") && message.includes("trade")) {
        setTimeout(function () {
            const reply = rand(STNA["trade"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
        setTimeout(function () {
            const reply = rand(Amutgex["trade"]);
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + reply + "<br>";
            setCookie("AMUTGEXmode", "trade")
        }, 7000);
    }
}
    /*CONFIRM TRADE XXXXXXXXXX
        if (nameValue.includes("CO_AMUTGEX") && message.includes("XTRD_01779")) {
            setTimeout(function () {
                const reply = rand(STNA["tradeYes"]);
                myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
                setCookie("fuelStore", 50)
                const creditAdj = (Number(getCookie("credits")) - 1)
                setCookie("credits", creditAdj)
            }, 5000);
        }

);

////
let target;
if (nameValue === "CO_AMUTGEX") { target = Amutgex }
if (nameValue === "STNA") { target = STNA }

if (target = Amutgex)
////
*/

//--------------------------------------------------------------------
/*
1) listen for trigger words
2) set STNAmode in cookies [Greeting, About, Trade]
        **Trade - negotiate, set player credits & fuel
        **Chat - answer questions about self, ship, robot, cat
        **
*/
//--------------------------------------------------------------------

const time = new Date().getHours();
let timegreet = "";
if (time < 10) {
    timegreet = "morning";
} else if (time < 20) {
    timegreet = "afternoon";
} else {
    timegreet = "evening";
}
//-------------------------------
function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}
//-----------------------------------------------------------
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//-----------------------------------------------------------

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//-----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "---[INITIATING <strong>XSHIP CONNECTION SEQUENCE</strong>]---"
    }, 1000);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "<br>[|"
    }, 2000);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||"
    }, 2500);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||"
    }, 2800);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||"
    }, 3000);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||||||||"
    }, 3500);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||||||||"
    }, 3800);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||||||||||||||||||||||||||"
    }, 4000);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||||||||"
    }, 4500);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "||||||||||||||]"
    }, 4800);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "<br> ---[<strong>XSHIP CONNECTION SEQUENCE</strong> SUCCESSFUL]---"
    }, 5000);
    setTimeout(function () {
        document.getElementById('radio').innerHTML += "<br><br>---[<strong>CONNECTED TO: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>"
    }, 6000);


})

const myForm = document.getElementById('form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameinput = document.getElementById('input').value;
    var nameValue = nameinput.split("-")[0]
    var message = nameinput.split("-")[1]
    const myElement = document.getElementById('radio');
    //--------------------------------------------------------
    //CHECKING VALID MESSAGE//
    if (nameValue.includes("@")) {
        setTimeout(function () {
            let newlog = "<br> <strong>\>SHIP</strong>: " + nameValue + " " + message;
            myElement.innerHTML += newlog
            setTimeout(function () {
                myElement.innerHTML +=
                    "<br>---[<strong>MESSAGE TRANSMITTED</strong>]---<br>"
                var credits = getCookie("credits")
                var newCredits = credits - 1
                setCookie("credits", newCredits)
            }, 1000);
        }, 1000);
    } else {
        setTimeout(function () {
            myElement.innerHTML += "<br>---[<strong>MESSAGE FAILURE: NO TARGET</strong>]---<br>";
        }, 1000);
    }
    //IF VALID MESSAGE//
    //------------//------------//------------//------------//------------//
    const barter = [`35 &#8461; of fuel for 2 &#8450;`]
    const tech = ["solar array", "s-band antenna", "sun sensor", "s-band feed", "l-band feed",]
    const xtrade = [`"@XTRD_01779VA"`, `"@XTRD_05532VA"`, `"@XTRD_90338VA"`]
    const repairAction = ["fiddling with", "fixing", "reasoning with", "negotiating with"]
    const action1 = [`monitoring frequencies`]
    const action2 = [`reheating a symProtein in the flavour of Terran Bovine`]
    const action3 = [`trying to get my crewmate to leave the wiring alone`]
    const story = [`theres a story from the old world i heard once, about terrans who destroyed their machine replacements in glorious violent protest. thinking about that for absolutely no reason at all.`,

        `i've been scanning one of those dresorilian books, the one with the pilot who falls into some kind of human-type marriage arrangement with a gieych? free on the TELLARI™©® mediaHub® at least.`,]

    const STNA = {
        //GREETING
        "greeting": [`@SHIP Good ${timegreet} from TELLARI™©® SynXComm™ SATELLITE STATION A`, `@SHIP Greetings from TELLARI™©® SynXComm™ SATELLITE STATION A`],
        //STATUS/ACTIVITY
        "status": [`@SHIP We at TELLARI™©® Systems are working tirelessly to streamline interColony communications.`],
        //TRADE 
        "trade": [`@SHIP This vessel is not  liscenced for trade.`, `@SHIP Unliscenced Trade is unauthorized in Delta Quadrant.`],

    };
    //------------//------------//------------//------------//------------//
    const Amutgex = {
        //GREETING
        "greeting": [`@SHIP ${timegreet} fellow traveller. please ignore the bot. what can I do for you today?`, `@SHIP please ignore it, greetings, this is CO Amutgex`, `@SHIP sorry it still talks no matter what i &#9736;&#9737;&#9740;&#x2629;ing do [ERROR: "&#9736;&#9737;&#9740;&#x2629" > TRANSLATION UNAVAILABLE]. salutations`, `@SHIP ${timegreet}, neighbour. ignore the bot. what can i do for you?`, `@SHIP sorry, it still talks even if i bypass the baby monitor. what can i do for you, neighbour?`,],
        //STATUS
        "status": [`@SHIP well the AI just wiped a full syndisk of podcasts & blocked the media channel <br><br>\><strong>CO_AMUTGEX</strong>: @SHIP so i'm about as well as you'd be doing if the robot you got saddled with babysitting wiped all your podcasts & blocked your media channel <br><br>\><strong>CO_AMUTGEX</strong>: @SHIP a good excercise in patience. what can we at TELLARI™©® SynXComm™ SATELLITE STATION A do for you today, neighbour`,

            `@SHIP well, i'm alive so that's something. what can I do for you, neighbour?`,

            `@SHIP ${rand(story)} what can i do for you this ${timegreet}, neighbour?`,

            `@SHIP you ever had wronutil buns from past the iris terminal? i think i'd sell every part of this station save for the cat for a bite of one of those this ${timegreet}. what can I do for you, neighbour?`],
        //ACTIVITY
        "activity": [`@SHIP repairing a TELLARI™©® HappyCompanion™ AutoClean Bodily Waste Recepticle, which does not autoclean the bodily waste it receives and is not making me or my companion happy. i appreciate the distration.`, `@SHIP earning my engineering stripes ${rand(repairAction)} this &#9736;&#9737;&#9740;&#x2629;ing ${rand(tech)} [ERROR: "&#9736;&#9737;&#9740;&#x2629" > TRANSLATION UNAVAILABLE]. i appreciate the break.`, `@SHIP oh you know, ${rand(action1)}, ${rand(action2)}, ${rand(action3)}. the usual. anything to add to my agenda, neighbour?`],
        //TRADE - initiate
        "trade": [`@SHIP don't worry, i disabled its snitch protocols. happy to trade. i can do ${rand(barter)} & i don't haggle`, `@SHIP ignore that. sure, i've got ${rand(barter)}, no counteroffers`, `@SHIP it can't do anything, you're fine. happy to trade with you, neighbour. i've got ${rand(barter)}, take it or leave it`],
        //TRADE - accept
        "tradeYes": [`@SHIP great - just send "YES" to my XTRADE account > ${rand(xtrade)},, i've set it up for you`, `@SHIP ay ay, captain. you can transfer the credits to to my XTRADE account > ${rand(xtrade)}, just send "YES" `],
        //TRADE - decline
        "tradeNO": [`@SHIP alright, let me know if you change your mind`, `@SHIP no hard feelings, neightbour`],
        //THANKS
        "thank": [`@SHIP anytime, neighbour. stay safe out there <br><br>---[<strong>CONNECTED TO: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>`, `@SHIP happy to help, neighbour. to your health o7<br><br>---[<strong>DISCONNECTED FROM: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>`, `@anytime. safe travels<br><br>---[<strong>DISCONNECTED FROM: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>`, `@SHIP from my hands to yours, neighbour. Keep well<br><br>---[<strong>DISCONNECTED FROM: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>`,]
    };

    //------------//------------//------------//------------//------------//

    let AMUTGEXmode = getCookie("AMUTGEXmode")
    let lib;
    //GREETING
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good morning") || message.includes("good afternoon") || message.includes("good evening") || message.includes("hail")) { lib = "greeting" }
    //STATUS
    else if (((message.includes("how") && message.inludes("you")) && ((!message.includes("cat") && !message.includes("feline") && !message.includes("naliv")))) || (message.includes("how" && "it" && "going"))) { lib = "status" }
    //ACTIVITY
    else if (message.includes("what" && "up") || message.includes("what" && "doing")) {
        { lib = "activity" }
    }
    //THANKS
    else if (message.includes("thanks") || message.includes("thank you")) { lib = "thank" }
    //KITTY
    else if (message.includes("cat") || message.includes("naliv") || message.includes("feline")) { lib = "kitty" }
    //TRADE-initiate
    else if (message.includes("trade") || message.includes("buy") || message.includes("open for")) { lib = "trade" }
    //TRADE-decline
    else if ((AMUTGEXmode === "trade") && ((message.includes("no") || message.includes("leave it") || message.includes("cancel") || message.includes("never mind") || message.includes("too high")))) { lib = "tradeNo" }
    //TRADE-accept
    else if ((AMUTGEXmode === "trade") && ((message.includes("yes") || message.includes("sure") || message.includes("ok") || message.includes("sounds good") || message.includes("take it") || message.includes("deal")))) { lib = "tradeYes" }
    //--------PRINT-------
    if (nameValue.includes("CO_AMUTGEX")) {
        setTimeout(function () {
            const reply = rand(STNA[lib]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", lib)
        }, 5000);
        setTimeout(function () {
            const reply = rand(Amutgex[lib]);
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: " + reply + "<br>";
            setCookie("AMUTGEXmode", lib)
        }, 7000);
    }

    else if (nameValue.includes("STNA")) {
        setTimeout(function () {
            const reply = rand(STNA[lib]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("STNAmode", lib)
        }, 5000)

    }

    else if (nameValue.includes("XTRD_01779VA") || nameValue.includes("XTRD_05532VA") || nameValue.includes("XTRD_90338VA")) {
        setTimeout(function () {
            myElement.innerHTML += "<br>---[CONNECTING TO <strong>XTRADE</strong>]---"
        }, 5200);
        setTimeout(function () {
            myElement.innerHTML += "<pre>\r\n\r\n _  _  _       _                                     \r\n| || || |     | |                          _         \r\n| || || | ____| | ____ ___  ____   ____   | |_  ___  \r\n| ||_|| |\/ _  ) |\/ ___) _ \\|    \\ \/ _  )  |  _)\/ _ \\ \r\n| |___| ( (\/ \/| ( (__| |_| | | | ( (\/ \/   | |_| |_| |\r\n \\______|\\____)_|\\____)___\/|_|_|_|\\____)   \\___)___\/ \r\n                                                     \r\n _    _ _______ ______         _____   _______       \r\n\\ \\  \/ (_______|_____ \\   \/\\  (____ \\ (_______)      \r\n \\ \\\/ \/ _       _____) ) \/  \\  _   \\ \\ _____         \r\n  )  ( | |     (_____ ( \/ \/\\ \\| |   | |  ___)        \r\n \/ \/\\ \\| |_____      | | |__| | |__\/ \/| |_____       \r\n\/_\/  \\_\\\\______)     |_|______|_____\/ |_______)      \r\n\r\n</pre><br>"
        }, 7000);
        setTimeout(function () {
            myElement.innerHTML += "---[INITIATING <strong>XTRADE TRANSFER</strong> of <strong>2 &#8461 </strong>to : <br> <i>V. AMUTGEX</i>]---<br>"
        }, 7500);
        setTimeout(function () {
            myElement.innerHTML += "<br>[|"
        }, 8000);
        setTimeout(function () {
            myElement.innerHTML += "||"
        }, 8500);
        setTimeout(function () {
            myElement.innerHTML += "||||||||"
        }, 9000);
        setTimeout(function () {
            myElement.innerHTML += "||||||||"
        }, 9500);
        setTimeout(function () {
            myElement.innerHTML += "||||||||||||||"
        }, 10000);
        setTimeout(function () {
            myElement.innerHTML += "||||||||||||||"
        }, 15000);
        setTimeout(function () {
            myElement.innerHTML += "||||||||||||||||||||||||||||||||"
        }, 16000);
        setTimeout(function () {
            myElement.innerHTML += "||||||||||||||"
        }, 16500);
        setTimeout(function () {
            myElement.innerHTML += "||||||||||||||]"
        }, 17000);
        const fuelStoreAdj = Number(getCookie("fuelStore")) + 35
        setCookie("fuelStore", fuelStoreAdj)
        const creditAdj = (Number(getCookie("credits")) - 2)
        setCookie("credits", creditAdj)
        setTimeout(function () {
            myElement.innerHTML += "<br><br>---[<strong>XTRADE TRANSFER</strong> SUCCESSFUL]---"
        }, 17500);
        setTimeout(function () {
            myElement.innerHTML += "<br><br>---[<strong>CONNECTED TO: </strong> TELLARI™©® SYNXCOMM™ SATELLITE STATION A - DIRECT COMMS SYSTEM]---<br>"
        }, 18000);
        setTimeout(function () {
            myElement.innerHTML += "<br>\><strong>CO_AMUTGEX</strong>: pleasure doing business with you, neighbour o7<br>"
        }, 19000);
    };
})

/*CONFIRM TRADE XXXXXXXXXX
    if (nameValue.includes("CO_AMUTGEX") && message.includes("XTRD_01779")) {
        setTimeout(function () {
            const reply = rand(STNA["tradeYes"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
            setCookie("fuelStore", 50)
            const creditAdj = (Number(getCookie("credits")) - 1)
            setCookie("credits", creditAdj)
        }, 5000);
    }

);

})

*/
