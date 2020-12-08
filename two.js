function create(name, ele, clas, id) {
    var name = document.createElement(ele);
    name.setAttribute('class', clas);
    name.id = id
    return name

}


var container = create(container, 'div', 'container', 'cont')
document.body.append(container);
let count=0;

async function getques() {
    // try {
    var ques = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple')
    var quesgot = await ques.json()
    var ques = await quesgot.results

    console.log('hi')
    console.log(quesgot);
    console.log(ques)
    mani(ques);
    return (ques)
    // }
    // catch {
    console.log('error in fetch')
    // }
}
getques();


function mani(data) {


    data.forEach(function (element, index) {
        if(count===index){
        createhtml(element, index);
        }
        return element;

    });

}

//var complete = 0;

console.log('iam mani')
// var complete = 0;
// data.forEach((element, index) => {

function createhtml(element, index) {



    //let van = 0;

    // if (complete === 1) {
    //     complete = 0;
    //     van = van + 1;
    // }
    // while (index === van) {

    var vals = (index + 1) * 10;
    var idno = 'overall' + index;
    var overall = create(overall, 'div')
    overall.setAttribute('id', idno)
    var header = create(header, 'div', 'quesno')
    var nodisp = create(nodisp, 'div', 'no', 'progress-text')
    nodisp.innerHTML = "Question" + " " + (index + 1) + "/10"


    header.append(nodisp);
    var wrap = create(wrap, 'div', 'progress')
    var progressbar = create(progressbar, 'div', 'progress-bar ', 'process')
    progressbar.setAttribute('role', 'progressbar');
    // progressbar.setAttribute('style', "width:10%")
    progressbar.style.setProperty('width', `${`${vals}`}%`)
    //document.getElementById('process').style.width=`${`${vals}`}%`



    progressbar.setAttribute('aria-valuenow', vals)

    progressbar.setAttribute('aria-valuemin', "0")
    progressbar.setAttribute('aria-valuemax', "100")


    var scorearea = create(scorearea, 'div', 'scoreareas')
    var scorename = create(scorename, 'div', 'scorenames')
    scorename.innerHTML = "score";

    var mark = 0;
    // var scorecard = 's'
    //var scorecard = 0 + mark;
    var score = create(score, 'div', 'scores', 'scores')
    score.innerHTML = mark;

    console.log(score.innerHTML)
    scorearea.append(scorename, score)
    header.append(scorearea)

    var word = create(word, 'div', 'questionscript')

    var questiondes = create(questiondes, 'div')
    questiondes.innerHTML = element.question

    wrap.append(progressbar)
    overall.append(header, wrap, word)
    word.append(questiondes);

    var correct = element.correct_answer;

    var incorrect = element.incorrect_answers;

    incorrect.push(correct);
    var ansarray = incorrect;
    console.log(ansarray);
    randomised(ansarray);


    function randomised(ansarray) {

        var temp = '';

        for (let i = (ansarray.length) - 1; i > 1; i--) {

            var index = Math.floor(Math.random() * i);
            // console.log(index);
            temp = ansarray[index];
            ansarray[index] = ansarray[i];
            ansarray[i] = temp;

        }
        console.log(ansarray);

    }

    console.log(correct);


    var wrapoptA = create(wrapoptA, 'div', 'choice-text', 'a')

    var optionA = create(optionA, 'p', 'opttext', 'A')
    var A = create(A, 'p', 'options', 'optA')
    A.innerHTML = "A"
    wrapoptA.append(A, optionA)



    var wrapoptB = create(wrapoptB, 'div', 'choice-text', 'b')
    var optionB = create(optionB, 'p', 'opttext', 'B')
    var B = create(B, 'p', 'options', 'optB')
    B.innerHTML = "B"
    wrapoptB.append(B, optionB)

    var wrapoptC = create(wrapoptC, 'div', 'choice-text', 'c')
    var optionC = create(optionC, 'p', 'opttext', 'C')
    var C = create(C, 'p', 'options', 'optC')

    C.innerHTML = "C"
    wrapoptC.append(C, optionC)


    var wrapoptD = create(wrapoptD, 'div', 'choice-text', 'd')

    var optionD = create(optionD, 'p', 'opttext', 'D')
    var D = create(D, 'p', 'options', 'optD')
    D.innerHTML = "D"
    wrapoptD.append(D, optionD)

    optionA.innerHTML = ansarray[0];
    optionB.innerHTML = ansarray[1];
    optionC.innerHTML = ansarray[2];
    optionD.innerHTML = ansarray[3];

    let total = 0;
    overall.append(wrapoptA, wrapoptB, wrapoptC, wrapoptD)

    container.append(overall);


    getevent(optionA, optionB, optionC, optionD, correct, mark);

}




function getevent(a, b, c, d, correct, mark) {
    var a1 = document.getElementById('A')
    a1.addEventListener('click', function (e) {
        console.log(e.target.id);
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === correct) {
            mark = mark + 10;

            console.log(mark)
        }
        else {
            mark = mark + 0;
            console.log('wrong')
        }
        console.log(mark)
        let updated = document.getElementById('scores')
        updated.innerHTML = mark;


        return mark
    })


    var b1 = document.getElementById('B')
    b1.addEventListener('click', function (e) {
        console.log(e.target.id);
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === correct) {
            mark = mark + 10;
            console.log(mark)

        }
        else {
            mark = mark + 0;
            console.log('wrong')
        }
        console.log(mark)
        let updated = document.getElementById('scores')
        updated.innerHTML = mark;


        return mark
    })



    var c1 = document.getElementById('C')
    c1.addEventListener('click', function (e) {
        console.log(e.target.id);
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === correct) {
            mark = mark + 10;
            console.log(mark)
        }
        else {
            mark = mark + 0;
            console.log('wrong')
        }
        console.log(mark)
        let updated = document.getElementById('scores')
        updated.innerHTML = mark;


        return mark
    })

    var d1 = document.getElementById('D')
    d1.addEventListener('click', function (e) {
        console.log(e.target.id);
        console.log(e.target.innerHTML)
        if (e.target.innerHTML=== correct) {
            mark = mark + 10;0
            console.log(mark)
        }
        else {
            mark = mark + 0;
            console.log('wrong')
        }
        console.log(mark)
        console.log(mark)
        document.getElementById('scores').value = mark;
        console.log(mark)
        return mark
    })
    //  total = total + mark
    count=count+1;
     
}


// total = total + mark
// console.log(total)
        //complete = 1;

        //index++;
        // }








