var projectObjects = [

    {
        id: 0,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'
    },
    {
        id: 1,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'

    },
    {
        id: 2,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'

    },
    {
        id: 3,
        name: 'Deadlift',
        date: 'May 21 2020',
        start_time: '01:10pm',
        end_time: '07:40pm',
        duartion: '6:30'
    }
];


function Update() {

    let projectList = document.querySelector('.project-list')


    let projectItems = ''

    for (project of projectObjects) {
        //console.log(people[i].name);
        // projectItems += '<tr>' + '<td>' + project.id + '</td>' + '<td>' + project.name + '</td>' + '</tr>'
        projectItems += `<tr>  
                            <td>  ${project.id}.${project.name}  </td>
                            <td> ${project.date} </td>
                            <td> ${project.start_time} </td>
                            <td> ${project.end_time} </td>
                            <td> ${project.duartion} </td>
                        </tr>`
    }

    projectList.innerHTML = projectItems

};
Update();


let name1 = null;
let date = null;
let start_time = null;
let end_time = null;
let duration = null;

function submitForm() {
    nameInput = document.getElementById('name');
    dateInput = document.getElementById('date');
    startTimeInput = document.getElementById('start_time');
    endTimeInput = document.getElementById('end_time');
    // durationInput = document.getElementById('duration');

    const name1 = nameInput.value;
    const date = dateInput.value;
    const start_time = startTimeInput.value;
    const end_time = endTimeInput.value;
    // const duration = durationInput.value;

    // alert(`${firstName} ${lastName}`);
    console.log(`${name1} ${date} ${start_time} ${end_time} `)
    // ${duration}

    if(name1 === '' || name1 === null || name1 === undefined ||
        date === '' || date === null || date === undefined ||
        start_time === '' || start_time === null || start_time === undefined ||
        end_time === '' || end_time === null || end_time === undefined ){
            resetForm();
            return
        }
    let idInc = projectObjects[projectObjects.length-1].id;
    projectObjects.push({
        id: idInc + 1,
        name: name1,
        date: date,
        start_time: start_time,
        end_time: end_time,
        duartion: '6:30'

    });

    console.log(projectObjects);
    Update();
    resetForm();
}

function resetForm() {
    nameInput.value = '';
    dateInput.value = '';
    startTimeInput.value = '';
    endTimeInput.value = '';
    // durationInput.value = '';
}