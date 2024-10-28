let level = 1;
let current_level = 1;

function jumpLevel(current){
    level = (current + 1 );
    current_level = (current + 1 );
    document.getElementById('progress-' + current ).style.backgroundColor='rgb(8, 68, 101)';
    document.getElementById('progress-' + (current + 1 ) ).style.backgroundColor='rgb(14, 122, 185)';
    document.getElementById('progress-' + current ).style.boxShadow='inset 0px 0px 0px 2px rgb(8, 68, 101)';
    document.getElementById('progress-' + (current + 1 ) ).style.boxShadow='inset 0px 0px 0px 2px #fff';
    document.getElementById('level' + current ).style.display='none';
    document.getElementById('level' + (current + 1 )).style.display='block';
}


function setup() {
    document.getElementsByClassName('ip_clicked')[0].addEventListener('click',ipClicked);
    document.getElementsByClassName('search_ip')[0].addEventListener('click',ipSearched);
    document.getElementsByClassName('escalate')[0].addEventListener('click',ipEscalate);
    document.getElementsByClassName('staff_chosen')[0].addEventListener('click',staffClicked);
    document.getElementsByClassName('ip_blocked')[0].addEventListener('click',ipBlocked);
    let prog_buttons = document.getElementsByClassName('progress-bar-dots')[0].getElementsByTagName('div');
    for (let i in prog_buttons) {
        if (typeof prog_buttons[i] === 'object') {
            prog_buttons[i].addEventListener('click', function () {
                let id = parseInt(this.id.replace('progress-', ''));
                if (id <= level) {
                    if( current_level === level ){
                        document.getElementById('progress-' + current_level).style.boxShadow = 'inset 0px 0px 0px 2px rgb(14, 122, 185)';
                    }else {
                        document.getElementById('progress-' + current_level).style.boxShadow = 'inset 0px 0px 0px 2px rgb(8, 68, 101)';
                    }
                    document.getElementById('progress-' + id ).style.boxShadow='inset 0px 0px 0px 2px #fff';
                    document.getElementById('level' + current_level).style.display = 'none';
                    document.getElementById('level' + id).style.display = 'block';
                    current_level = id;
                } else {
                    alert('No intentes avanzar tan rápido');
                }
            });
        }
    }
}

function pieChart(){
    let data = google.visualization.arrayToDataTable([
        ['Tipo', '%'],
        ['Operaciones: Información',     40],
        ['Seguridad: Ataques',      30],
        ['Seguridad: Sospechosos',  30],
    ]);
    let options = {
        legend: {
            position: 'bottom'
        }
    };
    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function barChart(){
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Count');

    data.addRows([
        ['UK', 60],
        ['US', 30],
        ['Brasil', 21],
        ['China', 4],
        ['Rusia', 15],
        ['N. Korea', 17],
    ]);

    let options = {
        title: 'Countries',
        vAxis: {
            maxValue: 80,
        },
        legend: { position: "none" },
    };

    let chart = new google.visualization.ColumnChart(
        document.getElementById('chart'));

    chart.draw(data, options);
}

function drawCharts() {
    pieChart();
    barChart();
}

function ipClicked(){
    jumpLevel(1)
}

function ipSearched(){
    let v = document.getElementById('search_ip_input').value;
    if( v === '143.110.250.149' ) {
        jumpLevel(2)
    }else{
        alert('Dirección IP inválida');
    }
}

function ipEscalate(){
    jumpLevel(3)
}

function staffClicked(){
    if( document.getElementById('correct_staff').checked ){
        jumpLevel(4)
    } else{
        alert('Miembro del personal incorrecto');
    }
}

function ipBlocked(){
    let v = document.getElementById('ip_blocked_input').value;
    if( v === '143.110.250.149' ) {
        jumpLevel(5)
        // document.getElementById('flag').innerHTML=atob(atob('VkVoTmUxUklVa1ZCVkMxQ1RFOURTMFZFZlFvPQo='));
        document.getElementById('flag').innerHTML=atob(atob('UjBaRFUzdEJUa0ZNU1ZOVVFTMU1SVlpGVEMweGZRbz0='));
    }else{
        alert('Dirección IP inválida');
    }
}

// Seleccionar el botón
const redirectButton = document.getElementById("redirectButton");

// Agregar un event listener para redirigir a Google al hacer clic en el botón
redirectButton.addEventListener("click", function() {
    window.location.href = "../level_1/";
});
