const container = document.querySelector('.container');
let boxRange = document.getElementById('boxRange')
let rangeValue = document.createElement('p')
const button = document.querySelector('.clear')
const buttons = document.querySelector('.buttons')
const rainbow = document.querySelector('.rainbow')

rangeValue.textContent = `${boxRange.value} × ${boxRange.value}`;
let row, box;

for (let index = 0; index < 64; index++) {
    let row = document.createElement('div')
    row.style.cssText = "display: flex; flex: 1;";
    
    for (let i = 0; i < 64; i++) {
        let box = document.createElement('div')
        box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black";
        })
        row.appendChild(box);
    }
    
    container.appendChild(row);
    
}
document.querySelector('.content').insertBefore(rangeValue, buttons)


boxRange.addEventListener('click', function() {
    rangeValue.textContent = `${boxRange.value} × ${boxRange.value}`;
    container.innerHTML = null
    for (let index = 0; index < boxRange.value; index++) {
        let row = document.createElement('div')
        row.style.cssText = "display: flex; flex: 1;";
        
        for (let i = 0; i < boxRange.value; i++) {
            let box = document.createElement('div')
            box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor = "black";
            })
            row.appendChild(box);
        }
        
        container.appendChild(row);
        
    
        
    }
})

button.addEventListener('click', function () {
    boxRange.addEventListener('click', function() {
        rangeValue.textContent = `${boxRange.value} × ${boxRange.value}`;
        container.innerHTML = null
        for (let index = 0; index < boxRange.value; index++) {
            let row = document.createElement('div')
            row.style.cssText = "display: flex; flex: 1;";
            
            for (let i = 0; i < boxRange.value; i++) {
                let box = document.createElement('div')
                box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
                box.addEventListener('mouseover', function () {
                    box.style.backgroundColor = "black";
                })
                row.appendChild(box);
            }
            
            container.appendChild(row);
            
        
            
        }
    })
    
    container.innerHTML = null
    for (let index = 0; index < boxRange.value; index++) {
        let row = document.createElement('div')
        row.style.cssText = "display: flex; flex: 1;";
        
        for (let i = 0; i < boxRange.value; i++) {
            let box = document.createElement('div')
            box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor = `rgb(${Math.floor(Math.random(255))}, ${Math.floor(Math.random(255))}, ${Math.floor(Math.random(255))})`;
            })
            row.appendChild(box);
        }
        
        container.appendChild(row);
        
    
        
    }
})

rainbow.addEventListener('click', function () {
    boxRange.addEventListener('click', function() {
        rangeValue.textContent = `${boxRange.value} × ${boxRange.value}`;
        container.innerHTML = null
        for (let index = 0; index < boxRange.value; index++) {
            let row = document.createElement('div')
            row.style.cssText = "display: flex; flex: 1;";
            
            for (let i = 0; i < boxRange.value; i++) {
                let box = document.createElement('div')
                box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
                box.addEventListener('mouseover', function () {
                    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255   )})`;
                })
                row.appendChild(box);
            }
            
            container.appendChild(row);
            
        
            
        }
    })
    container.innerHTML = null
    for (let index = 0; index < boxRange.value; index++) {
        let row = document.createElement('div')
        row.style.cssText = "display: flex; flex: 1;";
        
        for (let i = 0; i < boxRange.value; i++) {
            let box = document.createElement('div')
            box.style.cssText = "width: auto; height: auto; min-width: 7.8125px; min-height: 7.8125px; display: flex; flex: 1;";
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255   )})`;
            })
            row.appendChild(box);
        }
        
        container.appendChild(row);
        
    
        
    }
})





