
let canv1inst;
const renderTemplate = () => {
       
    const canv1 = (sketch1) => {
                    
        sketch1.setup = () => {
            sketch1.createCanvas(850, 350, sketch1.WEBGL);
                
            // sketch1.position(100,100);
        
                
        };
        let boxS = 0;
        let szIncrease = sketch1.sin(0.1);
        sketch1.draw = () => {
            sketch1.background(100);
            // sketch1.translate(sketch1.width/2, sketch1.height/2);
            sketch1.rotateX(sketch1.frameCount * 0.01);
            sketch1.box(boxS);

                
        
            boxS+=szIncrease;
            // boxS > 1000 && -1*szIncrease;
            if(boxS > 1000){
                boxS = 100;
            }

            if(sketch1.mouseIsPressed){
                renderTemplate();
            }
        };
    };

    const Template = (
        <div>
            <h1>
                ssss
            </h1>
            <span>
                {canv1inst = new p5(canv1, 'app')}
            </span>
        </div>
    );

    
    
};

const appRoot = document.getElementById('app');

renderTemplate();