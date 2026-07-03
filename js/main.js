const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];

document.addEventListener("mousemove", (e)=>{

    for(let i=0;i<4;i++){

        particles.push({
            x:e.clientX,
            y:e.clientY,
            vx:(Math.random()-0.5)*4,
            vy:(Math.random()-0.5)*4,
            size:Math.random()*4+2,
            life:40
        });

    }

});

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        const p=particles[i];

        p.x+=p.vx;
        p.y+=p.vy;

        p.life--;
        p.size*=0.96;

        ctx.beginPath();
        ctx.fillStyle=`rgba(0,0,0,${p.life/40})`;
        ctx.shadowBlur=20;
        ctx.shadowColor="#ffffffff";
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        if(p.life<=0){
            particles.splice(i,1);
        }

    }

    requestAnimationFrame(animate);

}

animate();